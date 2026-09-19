// @ts-nocheck
// Insert into Steam's Properties section, including nested React fragments.
// Return the original tree when no Properties action exists.
export function insertPluginSection(React, tree, entry) {
  const keys = new Set(['playhub-metadata-edit', 'themedeck-change-music',
    'trailerhero-game-settings', 'launch-curtain-game-settings',
    'quick-settings-game-profile', 'playhub-artworks-change-artwork']);
  const collected = new Map();
  let anchor;
  function scan(node, depth = 0) {
    if (!node || depth > 32) return;
    if (Array.isArray(node)) { node.forEach(n => scan(n, depth + 1)); return; }
    if (!React.isValidElement(node)) return;
    if (keys.has(node.key)) { collected.set(node.key, node); return; }
    const handler = node.props?.onSelected ?? node.props?.onClick;
    if (typeof handler === 'function' && /(?:Show)?AppProperties/.test(Function.prototype.toString.call(handler))) anchor = node;
    scan(node.props?.children, depth + 1);
  }
  scan(tree);
  if (!anchor) return tree;
  collected.set(entry.key, entry);
  const ordered = [...keys].filter(key => collected.has(key)).map(key => collected.get(key));
  function visit(node, depth = 0) {
    if (!node || depth > 32) return node;
    if (Array.isArray(node)) return node.flatMap(n => n === anchor ? [...ordered, n] : keys.has(n?.key) ? [] : [visit(n, depth + 1)]);
    if (!React.isValidElement(node)) return node;
    if (keys.has(node.key)) return null;
    if (node === anchor) return [...ordered, node];
    if (node.props?.children === undefined) return node;
    return React.cloneElement(node, { children: visit(node.props.children, depth + 1) });
  }
  return visit(tree);
}

// Steam's MobX menu replaces instance.render after its first render.
// Patch the inner native Menu as well, deriving the game from React owners.
export function installMenuSectionFallback(React, ui, inject) {
  let proto, hooks, oldUseId, changedUseId = false;
  if (typeof ui.applyHookStubs !== 'function' || typeof ui.removeHookStubs !== 'function') return () => {};
  try {
    hooks = ui.applyHookStubs();
    oldUseId = hooks.useId;
    hooks.useId = () => "playhub-menu-probe";
    changedUseId = true;
    proto = ui.Menu({ children: [] })?.type?.prototype;
  } catch { return () => {}; }
  finally { if (changedUseId) hooks.useId = oldUseId; ui.removeHookStubs(); }
  if (!proto || typeof proto.render !== 'function') return () => {};
  let active = true;
  const restores = [];
  const appFor = (tree, instance) => {
    // Production React elements omit _owner; the mounted native Menu fiber
    // still identifies its enclosing LibraryContextMenu and selected games.
    for (let f = instance?._reactInternals?.return, i = 0; f && i < 32; f = f.return, i++) {
      if (typeof f.stateNode?.GetTargetApps === 'function') {
        const targets = f.stateNode.GetTargetApps();
        if (targets?.length !== 1) return 0;
        const id = Number(targets[0]?.appid);
        return Number.isInteger(id) && id > 0 && id <= 0xffffffff ? id : 0;
      }
    }
    const ids = new Set();
    let multi = false;
    const seen = new Set();
    function walk(n, depth = 0) {
      if (!n || depth > 24 || seen.has(n)) return;
      if (typeof n === 'object') seen.add(n);
      if (Array.isArray(n)) { n.forEach(x => walk(x, depth + 1)); return; }
      if (!React.isValidElement(n)) return;
      for (let owner = n._owner, i = 0; owner && i < 24; owner = owner.return, i++) {
        if (typeof owner.stateNode?.GetTargetApps === 'function') {
          const targets = owner.stateNode.GetTargetApps();
          if (targets?.length !== 1) { multi = true; break; }
          const id = Number(targets[0]?.appid);
          if (Number.isInteger(id) && id > 0 && id <= 0xffffffff) ids.add(id);
          break;
        }
        const id = Number(owner.pendingProps?.overview?.appid ?? owner.memoizedProps?.overview?.appid);
        if (Number.isInteger(id) && id > 0 && id <= 0xffffffff) { ids.add(id); break; }
      }
      walk(n.props?.children, depth + 1);
    }
    walk(tree);
    return !multi && ids.size === 1 ? [...ids][0] : 0;
  };
  const transform = (tree, instance) => {
    if (!active) return tree;
    try { const id = appFor(tree, instance); return id ? inject(tree, id) : tree; }
    catch (e) { console.warn('[Playhub menu] native menu injection skipped', e); return tree; }
  };
  function patch(name, wrap) {
    const descriptor = Object.getOwnPropertyDescriptor(proto, name);
    const original = proto[name];
    if (typeof original !== 'function' || (descriptor && !descriptor.configurable && !descriptor.writable)) return;
    const replacement = function (...args) { return active ? wrap.call(this, original, args) : original.apply(this, args); };
    Object.defineProperty(proto, name, { configurable: true, writable: true, enumerable: descriptor?.enumerable ?? false, value: replacement });
    restores.push(() => { if (proto[name] === replacement) { if (descriptor) Object.defineProperty(proto, name, descriptor); else delete proto[name]; } });
  }
  patch('render', function (original, args) { return transform(original.apply(this, args), this); });
  patch('shouldComponentUpdate', function (original, args) {
    const children = args[0]?.children;
    if (Array.isArray(children) && !Object.isFrozen(children)) {
      const wrapper = React.createElement(React.Fragment, { children });
      const result = transform(wrapper, this);
      if (result !== wrapper && Array.isArray(result?.props?.children)) children.splice(0, children.length, ...result.props.children);
    }
    return original.apply(this, args);
  });
  return () => { active = false; restores.reverse().forEach(restore => restore()); };
}
