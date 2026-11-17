/** Digital Stores owns store achievements. Metadata must preserve its native data. */
export function isDigitalStoreAchievementApp(id:number):boolean{
 try{const root=globalThis as any,bridge=root[Symbol.for("playhub.store.achievements.v1")]??root.window?.[Symbol.for("playhub.store.achievements.v1")];return bridge?.protocol===1&&bridge.isManagedApp?.(id)===true;}catch{return false;}
}
