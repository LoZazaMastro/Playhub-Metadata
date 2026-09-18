/** Regression harness: mocked Steam/Decky APIs and React elements, no UI/network. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { loadTypeScript } from '../scripts/compiler.mjs';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ts = loadTypeScript();
const compiled = new Map();
const testExports = `\nexport const __test = { primeAchievementStore, loadAchievementsForApp, shouldShowAchievements,
  tryInstallAchievementStorePatch, installPlayhubHomeActivityPatch, installNativeActivityStorePatch,
  setSettings(value: any) { achievementSettingsCache = value; },
  getBypass() { return bypassCounter; }, setBypass(value: number) { bypassCounter = value; } };\n`;
for (const filename of fs.readdirSync(path.join(root, 'src')).filter(x => /\.tsx?$/.test(x))) {
  let text = fs.readFileSync(path.join(root, 'src', filename), 'utf8');
  if (filename === 'steam.ts') text += testExports;
  const result = ts.transpileModule(text, { fileName: filename, reportDiagnostics: true,
    compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } });
  const errors = (result.diagnostics || []).filter(d => d.category === ts.DiagnosticCategory.Error);
  assert.equal(errors.length, 0, `${filename}: ${errors.map(e => ts.flattenDiagnosticMessageText(e.messageText,' '))}`);
  compiled.set(filename.replace(/\.tsx?$/, ''), result.outputText);
}
function environment() {
  const timers = new Map(), listeners = new Map(), routes = new Map(), routePatches = new Map();
  const calls = [], warnings = [], modules = [], rpc = {}, cache = {};
  let id = 0;
  const storage = () => { const values = new Map(); return { getItem: k => values.get(k) ?? null,
    setItem: (k,v) => values.set(k,String(v)), removeItem: k => values.delete(k), clear:()=>values.clear() }; };
  const makeElement = (type, raw, ...children) => {
    const props = { ...(raw || {}) }; const key = props.key == null ? null : String(props.key); delete props.key;
    if(children.length) props.children = children.length === 1 ? children[0] : children;
    return Object.freeze({ $$typeof: Symbol.for('react.element'), type, key, props: Object.freeze(props) });
  };
  const React = { createElement: makeElement, cloneElement: (el, props) => makeElement(el.type, { ...el.props,key:el.key,...props }),
    isValidElement: x => !!x && x.$$typeof === Symbol.for('react.element'), Fragment: Symbol.for('react.fragment'),
    createContext: value => ({ _value:value, Provider:()=>null, Consumer:()=>null }),
    useState: value => [typeof value==='function'?value():value, ()=>{}], useEffect:()=>{}, useLayoutEffect:()=>{},
    useCallback:x=>x, useMemo:fn=>fn(), useRef:value=>({current:value}), memo:x=>x, forwardRef:x=>({render:x}),
    Component: class { constructor(props){this.props=props;} } };
  const walk = (obj, predicate, seen = new Set()) => {
    if(!obj || typeof obj !== 'object' || seen.has(obj)) return undefined;
    seen.add(obj); if(predicate(obj)) return obj;
    for(const child of Object.values(obj)) { const found = walk(child,predicate,seen); if(found) return found; }
  };
  const addListener = (type,fn) => { if(!listeners.has(type)) listeners.set(type,new Set()); listeners.get(type).add(fn); };
  const removeListener = (type,fn) => listeners.get(type)?.delete(fn);
  const element = tag => ({tagName:tag.toUpperCase(),children:[],style:{},dataset:{},
    setAttribute(){},getAttribute(){return null;},removeAttribute(){},appendChild(child){this.children.push(child);return child;},
    remove(){},querySelectorAll(){return [];},querySelector(){return null;},addEventListener:addListener,removeEventListener:removeListener});
  const doc = {querySelectorAll:()=>[],querySelector:()=>null,getElementById:()=>null,
    createElement:element,head:element('head'),body:element('body'),documentElement:element('html'),
    addEventListener:addListener,removeEventListener:removeListener};
  const window = {document:doc,location:{pathname:'/library/home',search:'',hash:'',href:'https://steamloopback.host/library/home'},
    localStorage:storage(),sessionStorage:storage(),addEventListener:addListener,removeEventListener:removeListener,
    dispatchEvent(event){ for(const fn of listeners.get(event.type)||[])fn(event); return true; },
    setTimeout(fn,delay=0){timers.set(++id,{fn,delay,interval:false});return id;},
    setInterval(fn,delay=0){timers.set(++id,{fn,delay,interval:true});return id;},
    clearTimeout(i){timers.delete(i);},clearInterval(i){timers.delete(i);},
    getComputedStyle:()=>({}),innerWidth:1920,innerHeight:1080};
  const deckyAPI = { _version:2, callable: name => (...args) => { calls.push({name,args});
      return Promise.resolve().then(()=>rpc[name] ? rpc[name](...args) : (name==='get_achievement_settings'?settings():name==='get_local_shortcuts'?[]:name==='get_all_metadata'?{}:null)); },
    routerHook:{addRoute:(name,fn)=>routes.set(name,fn),removeRoute:name=>routes.delete(name),
      addPatch:(name,fn)=>{ routePatches.set(name,fn);return fn;},removePatch:(name)=>routePatches.delete(name)},
    toaster:{toast:()=>{}},openFilePicker:async()=>({}) };
  window.__DECKY_SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_deckyLoaderAPIInit = {connect:()=>deckyAPI};
  const dfl = new Proxy({ definePlugin: fn=>fn, staticClasses:{Title:'title'}, Navigation:{Navigate: target=>calls.push({navigate:target})},
    findModuleChild: callback => {for(const mod of modules){const out=callback(mod);if(out)return out;}},
    findModuleByExport: predicate=>modules.find(mod=>Object.keys(mod).some(key=>{try{return predicate(mod[key]);}catch{return false;}})),
    fakeRenderComponent: fn=>fn({}),findInReactTree:walk,
    afterPatch: (target,name,callback)=>{const original=target[name]; const descriptor=Object.getOwnPropertyDescriptor(target,name);
      const patched=function(...args){ return callback.call(this,args,original.apply(this,args)); };target[name]=patched;
      return {unpatch:()=>{if(target[name]===patched){if(descriptor)Object.defineProperty(target,name,descriptor);else delete target[name];}}};},
  }, {get:(target,key)=>key in target?target[key]:(props=>makeElement(String(key),props))});
  const icons = new Proxy({}, {get:(_,key)=>props=>makeElement(String(key),props)});
  const context = vm.createContext({ window,document:doc,localStorage:window.localStorage,sessionStorage:window.sessionStorage,
    SP_REACT:React,DFL:dfl,console:{log:()=>{},warn:(...args)=>warnings.push(args),error:(...args)=>warnings.push(args)},
    setTimeout:window.setTimeout.bind(window),clearTimeout:window.clearTimeout.bind(window),
    setInterval:window.setInterval.bind(window),clearInterval:window.clearInterval.bind(window),
    Event:class{constructor(type){this.type=type;}},CustomEvent:class{constructor(type,options){this.type=type;this.detail=options?.detail;}},
    HTMLElement:class{},Element:class{},ShadowRoot:class{},Node:class{},MutationObserver:class{observe(){}disconnect(){}},
    URL,URLSearchParams,TextEncoder,TextDecoder, navigator:{language:'en-US'},performance:{now:()=>0} });
  function load(name){
    name=name.replace(/^\.\//,'');
    if(name==='react')return React;
    if(name==='@decky/ui')return dfl;
    if(name==='@decky/api')return deckyAPI;
    if(name==='react-icons/fa')return icons;
    if(name==='react/jsx-runtime')return {jsx:(type,props,key)=>makeElement(type,{...props,...(key==null?{}:{key})}),jsxs:(type,props,key)=>makeElement(type,{...props,...(key==null?{}:{key})}),Fragment:React.Fragment};
    if(cache[name])return cache[name].exports;
    assert(compiled.has(name),`unexpected module ${name}`);
    const module={exports:{}};cache[name]=module;
    vm.runInContext(`(function(module,exports,require){${compiled.get(name)}\n})`,context,{filename:`src/${name}.js`})(module,module.exports,load);
    return module.exports;
  }
  function addSteam(){
    class Overview { constructor(appid,nonSteam=true){this.appid=appid;this.app_type=nonSteam?1073741824:1;this.display_name=`Game ${appid}`;}
      BIsShortcut(){return this.app_type===1073741824;} BIsModOrShortcut(){return this.BIsShortcut();} BHasStoreCategory(){return false;}
      GetGameID(){return this.appid;} GetPrimaryAppID(){return this.appid;} GetCanonicalReleaseDate(){return 1;} GetPerClientData(){return {};} }
    const apps=[new Overview(101),new Overview(202),new Overview(440,false)];
    class Details {constructor(){this.m_mapAppData=new Map(apps.map(app=>[app.appid,{details:{unAppID:app.appid},descriptionsData:{},associationData:{}}]));}
      GetAppData(id){return this.m_mapAppData.get(id);} GetDescriptions(){return null;} GetAssociations(){return null;}
      GetAchievements(id){if(id!==440)throw new Error('native shortcut achievements must not be requested');return {native:true};} }
    window.appStore={allApps:apps,m_mapAppOverview:new Map(apps.map(a=>[a.appid,a])),GetAppOverviewByAppID:id=>apps.find(a=>a.appid===Number(id))};
    window.appDetailsStore=new Details();
    window.SteamClient={Apps:{RegisterForAppLifetimeNotifications:()=>({unregister(){}})},System:{},Browser:{}};
    return {apps,Overview,Details};
  }
  async function settle(){for(let n=0;n<30;n++)await Promise.resolve();}
  async function runTimer(filter=()=>true){const entry=[...timers.entries()].filter(([,v])=>filter(v)).sort((a,b)=>a[1].delay-b[1].delay)[0];
    assert(entry,'expected timer');const [key,task]=entry;if(!task.interval)timers.delete(key);task.fn();await settle();}
  return {context,window,React,load,addSteam,rpc,calls,warnings,modules,timers,listeners,routes,routePatches,dfl,settle,runTimer,
    listenerCount:()=>[...listeners.values()].reduce((sum,set)=>sum+set.size,0)};
}
function settings(){return {retroachievements:{enabled:false,game_ids:{}},xbox:{enabled:false,title_ids:{}},rpcs3:{trophy_ids:{}},achievement_sources:{},achievement_cache:{policy:'manual'}};}
const tests=[];const test=(name,fn)=>tests.push([name,fn]);

test('all source modules transpile and lazy context-menu import survives missing chunks',()=>{
  const e=environment(); assert.equal(typeof e.load('contextMenuPatch').default,'function');assert.equal(e.timers.size,0);
  assert.equal(e.load('contextMenuPatch').resolveLibraryContextMenu(),undefined);
});
test('late Steam globals and empty-library map fallback',()=>{
  const e=environment(), c=e.load('compat');assert.equal(c.getOverviewPrototype(),undefined);
  const {Overview}=e.addSteam();e.window.appStore.allApps=[];assert.equal(c.getOverviewPrototype(),Overview.prototype);
  assert.equal(c.getSteamGlobal('appStore'),e.window.appStore);
});
test('throwing lazy webpack export is skipped',()=>{
  const e=environment(), c=e.load('compat'); const mod={ready:42};Object.defineProperty(mod,'late',{enumerable:true,get(){throw new Error('chunk not ready');}});
  assert.deepEqual(JSON.parse(JSON.stringify(c.moduleEntries(mod))),[['ready',42]]);
});
test('method patches restore descriptors and inherited lookup',()=>{
  const e=environment(), {patchMethod}=e.load('compat');const proto={read(){return this.value;}};const obj=Object.create(proto);obj.value=7;
  const stop=patchMethod(obj,'read',(self,original,args)=>original(...args)+1);assert.equal(obj.read(),8);stop();assert.equal(obj.read(),7);assert(!Object.hasOwn(obj,'read'));
  const d=Object.getOwnPropertyDescriptor(proto,'read');const restore=patchMethod(proto,'read',()=>99);restore();assert.deepEqual(Object.getOwnPropertyDescriptor(proto,'read'),d);
});
test('unpatch does not destroy another plugin wrapper',()=>{
  const e=environment(),{patchMethod}=e.load('compat'),obj={read(){return 1;}};const stop=patchMethod(obj,'read',(_,old,args)=>old(...args)+10);
  const previous=obj.read;obj.read=function(){return previous.call(this)+100;};stop();assert.equal(obj.read(),101);
});
test('read-only methods are skipped safely',()=>{
  const e=environment(),{patchMethod}=e.load('compat'),obj={};Object.defineProperty(obj,'read',{value:()=>5,configurable:false,writable:false});
  const stop=patchMethod(obj,'read',()=>99);assert.equal(obj.read(),5);stop();
});
function makeMenu(e){
  const menu=e.React.createElement('Menu',{children:Object.freeze([e.React.createElement('Item',{key:'launch'}),e.React.createElement('Item',{key:'properties',onSelected:function(){return this.AppProperties();}})])});
  class LibraryMenu {constructor(){this.props={overview:e.window.appStore.allApps[0]};}GetTargetApps(){return [this.props.overview];}BuildManageSubmenu(){}render(){return menu;}}
  const owner={marker:function(){return styles.LibraryContextMenu;},render:function(){return e.React.createElement(LibraryMenu,{navigator:undefined});}};
  return {menu,LibraryMenu,owner};
}
test('context menu resolves supplied navigator-wrapper structure',()=>{
  const e=environment();e.addSteam();const {LibraryMenu,owner}=makeMenu(e);e.modules.push(owner);assert.equal(e.load('contextMenuPatch').resolveLibraryContextMenu(),LibraryMenu);
});
test('menu cloning handles frozen output and inserts before Properties without duplicates',()=>{
  const e=environment();e.addSteam();const {menu}=makeMenu(e),{injectMetadataMenuItem}=e.load('contextMenuPatch');
  const out=injectMetadataMenuItem(menu,101);assert.notEqual(out,menu);assert.equal(menu.props.children.length,2);
  assert.deepEqual(out.props.children.map(x=>x.key),['launch','playhub-metadata-edit','properties']);
  const again=injectMetadataMenuItem(out,202);assert.equal(again.props.children.filter(x=>x.key==='playhub-metadata-edit').length,1);
  again.props.children[1].props.onSelected();assert.equal(e.calls.at(-1).navigate,'/playhub-metadata/202');
  assert.equal(injectMetadataMenuItem(menu,440),menu);assert.equal(injectMetadataMenuItem(null,101),null);
});
test('reused menu class follows selected AppID; multi-select untouched; teardown restores class',()=>{
  const e=environment();e.addSteam();const {LibraryMenu,menu}=makeMenu(e),original=LibraryMenu.prototype.render;
  const stop=e.load('contextMenuPatch').default(LibraryMenu),instance=new LibraryMenu();
  instance.render().props.children[1].props.onSelected();assert.equal(e.calls.at(-1).navigate,'/playhub-metadata/101');
  instance.props.overview=e.window.appStore.allApps[1];instance.render().props.children[1].props.onSelected();assert.equal(e.calls.at(-1).navigate,'/playhub-metadata/202');
  instance.GetTargetApps=()=>e.window.appStore.allApps;assert.equal(instance.render(),menu);stop.unpatch();assert.equal(LibraryMenu.prototype.render,original);
});
test('late-loaded context menu retries once and retry is cancelled on unload',async()=>{
  const e=environment();e.addSteam();const cm=e.load('contextMenuPatch'),stop=cm.default();assert.equal(e.timers.size,1);
  const {owner,LibraryMenu}=makeMenu(e),original=LibraryMenu.prototype.render;e.modules.push(owner);await e.runTimer();assert.notEqual(LibraryMenu.prototype.render,original);assert.equal(e.timers.size,0);
  stop.unpatch();assert.equal(LibraryMenu.prototype.render,original);e.modules.length=0;const retry=cm.default();retry.unpatch();assert.equal(e.timers.size,0);
});
test('missing Steam stores have no partial listeners and wait is cancellable',()=>{
  const e=environment(),stop=e.load('steam').installSteamPatches();assert.equal(e.listenerCount(),0);assert.equal(e.routePatches.size,0);assert.equal(e.timers.size,1);stop();assert.equal(e.timers.size,0);
});
test('empty achievement results settle both native maps and clear inflight requests',()=>{
  const e=environment(),store={m_mapMyAchievements:new Map(),m_mapGlobalAchievements:new Map(),m_mapInflightMyAchievementsRequests:new Map([[101,Promise.resolve()]])};
  e.load('steam').__test.primeAchievementStore(store,101,null);
  for(const key of [101,'101']){assert.equal(store.m_mapMyAchievements.get(key).loading,false);assert.equal(store.m_mapGlobalAchievements.get(key).loading,false);}
  assert.equal(store.m_mapInflightMyAchievementsRequests.size,0);
});
test('disabled achievements override stale cached payload and mappings',async()=>{
  const e=environment();e.addSteam();const s=e.load('steam'),cfg=settings();cfg.achievement_sources['101']='disabled';cfg.xbox.title_ids['101']='123';s.__test.setSettings(cfg);s.achievementsCache['101']={steam:{nTotal:10}};
  assert.equal(s.__test.shouldShowAchievements(101),false);assert.equal(await s.__test.loadAchievementsForApp(101),null);assert.equal(e.calls.length,0);
});
test('concurrent per-game achievement loads share one request, including settings load',async()=>{
  const e=environment();e.addSteam();const s=e.load('steam'),cfg=settings();cfg.xbox.enabled=true;cfg.xbox.title_ids['101']='123';e.rpc.get_achievement_settings=()=>cfg;
  let release; e.rpc.fetch_achievements=()=>new Promise(resolve=>release=resolve);
  const first=s.__test.loadAchievementsForApp(101),second=s.__test.loadAchievementsForApp(101);assert.equal(first,second);await e.settle();
  assert.equal(e.calls.filter(x=>x.name==='get_achievement_settings').length,1);assert.equal(e.calls.filter(x=>x.name==='fetch_achievements').length,1);
  release(null);assert.equal(await first,null);await e.settle();e.rpc.fetch_achievements=()=>null;await s.__test.loadAchievementsForApp(101);assert.equal(e.calls.filter(x=>x.name==='fetch_achievements').length,2);
});
test('backend/settings rejection returns settled null instead of unhandled rejection',async()=>{
  const e=environment();e.addSteam();e.rpc.get_achievement_settings=()=>{throw new Error('RPC disconnected');};
  assert.equal(await e.load('steam').__test.loadAchievementsForApp(101),null);assert(e.warnings.some(x=>String(x[0]).includes('backend unavailable')));
});
test('current native achievement store is patched per instance and can be reinstalled',async()=>{
  const e=environment();e.addSteam();const s=e.load('steam'),cfg=settings();s.__test.setSettings(cfg);
  const store={m_mapMyAchievements:new Map(),m_mapGlobalAchievements:new Map(),m_mapInflightMyAchievementsRequests:new Map(),LoadMyAchievements:async function(){throw new Error('Steam API must not be used for shortcuts');}};
  const original=store.LoadMyAchievements;e.modules.push({renamedExport:store});let cleanup=[];assert(s.__test.tryInstallAchievementStorePatch(cleanup));
  const result=await store.LoadMyAchievements(101);assert.equal(result.loading,false);assert.equal(store.m_mapGlobalAchievements.get(101).loading,false);
  cleanup.reverse().forEach(fn=>fn());assert.equal(store.LoadMyAchievements,original);cleanup=[];assert(s.__test.tryInstallAchievementStorePatch(cleanup));cleanup.reverse().forEach(fn=>fn());
});
test('Home integration waits for a real store and cleans timers/listeners',async()=>{
  const e=environment(),s=e.load('steam'),cleanup=[];s.__test.installPlayhubHomeActivityPatch(cleanup);
  assert([...e.timers.values()].some(x=>x.interval));e.window.libraryEventStore={m_vecHomeBestEventsForUser:[]};await e.runTimer(x=>x.interval);
  assert(![...e.timers.values()].some(x=>x.interval));cleanup.reverse().forEach(fn=>fn());assert.equal(e.timers.size,0);assert.equal(e.listenerCount(),0);
});
test('full Steam patch install protects shortcut achievements and restores methods',async()=>{
  const e=environment();const {apps,Overview}=e.addSteam(),s=e.load('steam');s.__test.setSettings(settings());
  const original=e.window.appDetailsStore.GetAchievements;const stop=s.installSteamPatches();
  assert.equal(e.window.appDetailsStore.GetAchievements(101).nTotal,0);assert.equal(e.window.appDetailsStore.GetAchievements(440).native,true);
  s.__test.setBypass(7);const originalGameID=Overview.prototype.GetGameID;
  assert.equal(apps[0].GetGameID(),101);assert.equal(s.__test.getBypass(),7);
  await e.settle();stop();assert.equal(e.window.appDetailsStore.GetAchievements,original);assert.equal(e.routePatches.size,0);assert.equal(e.listenerCount(),0);assert.equal(e.timers.size,0);
});
test('all bundled source hashes match BUILD_INFO',()=>{
  const info=JSON.parse(fs.readFileSync(path.join(root,'dist/BUILD_INFO.json'),'utf8'));
  assert.equal(info.version,'1.8.1');for(const [name,hash] of Object.entries(info.sources))assert.equal(createHash('sha256').update(fs.readFileSync(path.join(root,name))).digest('hex'),hash,name);
  assert.equal(createHash('sha256').update(fs.readFileSync(path.join(root,'dist/index.js'))).digest('hex'),info.bundle_sha256);
});
test('actual Installer bundle imports, mounts, and unmounts before Steam stores exist',async()=>{
  const e=environment();let bundle=fs.readFileSync(path.join(root,'dist/index.js'),'utf8');bundle=bundle.replace('export { index as default };','globalThis.bundlePlugin = index;');
  vm.runInContext(bundle,e.context,{filename:'dist/index.js'});assert.equal(typeof e.context.bundlePlugin,'function');
  const plugin=e.context.bundlePlugin();assert.equal(plugin.name,'Playhub Metadata');assert.equal(e.routes.size,2);await e.settle();plugin.onDismount();await e.settle();
  assert.equal(e.routes.size,0);assert.equal(e.routePatches.size,0);assert.equal(e.listenerCount(),0);
  // Cancelled bootstrap callbacks may remain queued once; they must be inert.
  for(const task of [...e.timers.values()])assert.equal(task.interval,false);
});
test('actual built plugin supports repeated mount/unmount with ready Steam stores', async()=>{
  const e=environment();e.addSteam();const original=e.window.appDetailsStore.GetAchievements;
  const bundle=fs.readFileSync(path.join(root,'dist/index.js'),'utf8').replace('export { index as default };','globalThis.bundlePlugin = index;');
  vm.runInContext(bundle,e.context,{filename:'dist/index.js'});
  for(let i=0;i<2;i++){
    const plugin=e.context.bundlePlugin();await e.settle();
    assert.equal(e.window.appDetailsStore.GetAchievements(101).nTotal,0);
    plugin.onDismount();await e.settle();assert.equal(e.window.appDetailsStore.GetAchievements,original);
    assert.equal(e.routes.size,0);assert.equal(e.routePatches.size,0);assert.equal(e.listenerCount(),0);assert.equal(e.timers.size,0);
  }
});
test('Steam stores appearing late install one complete patch set', async()=>{
  const e=environment(),s=e.load('steam'),stop=s.installSteamPatches();e.addSteam();s.__test.setSettings(settings());
  await e.runTimer();assert(e.listenerCount()>0);assert.equal(e.window.appDetailsStore.GetAchievements(101).nTotal,0);
  stop();await e.settle();assert.equal(e.listenerCount(),0);assert.equal(e.timers.size,0);assert.equal(e.routePatches.size,0);
});
test('native achievement loaders respect disabled source even with a cached payload', async()=>{
  const e=environment();e.addSteam();const s=e.load('steam'),cfg=settings();cfg.achievement_sources['101']='disabled';s.__test.setSettings(cfg);
  s.achievementsCache['101']={steam:{nTotal:10},user:{data:{achieved:{stale:{}}}},global:{data:{stale:100}}};
  const store={m_mapMyAchievements:new Map(),m_mapGlobalAchievements:new Map(),LoadMyAchievements:async()=>({native:true}),LoadGlobalAchievements:async()=>({native:true})};
  e.modules.push({anyName:store});const stop=[];assert(s.__test.tryInstallAchievementStorePatch(stop));
  assert.equal((await store.LoadMyAchievements(101)).loading,false);assert.equal((await store.LoadGlobalAchievements(101)).loading,false);
  assert.equal(Object.keys(store.m_mapMyAchievements.get(101).data.achieved).length,0);
  assert.equal(Object.keys(store.m_mapGlobalAchievements.get(101).data).length,0);stop.reverse().forEach(fn=>fn());
});
let failures=0;
for(const [name,fn] of tests){try{await fn();console.log(`PASS ${name}`);}catch(error){failures++;console.error(`FAIL ${name}\n${error.stack}`);}}
console.log(`\n${tests.length-failures}/${tests.length} frontend regressions passed (${ts.version}).`);
if(failures)process.exitCode=1;
