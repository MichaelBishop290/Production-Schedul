"use client";
import * as React from "react";
type Props = React.PropsWithChildren<{defaultValue?:string, value?:string, onValueChange?:(v:string)=>void}>;
export function Tabs({ children, defaultValue, value, onValueChange }: Props) {
  const [v,setV] = React.useState(defaultValue||"orders");
  const current = value===undefined? v : value;
  const setVal = (nv:string)=>{ if(onValueChange) onValueChange(nv); if(value===undefined) setV(nv); };
  return <div data-tabs-value={current}>{React.Children.map(children,(child:any)=>React.cloneElement(child,{__tabsValue:current,__setTabsValue:setVal}))}</div>;
}
export function TabsList({ children }: React.PropsWithChildren) {
  return <div className="inline-flex gap-2 border rounded p-1">{children}</div>;
}
export function TabsTrigger({ value, children, __tabsValue, __setTabsValue }:{value:string,children:any,__tabsValue?:string,__setTabsValue?:(v:string)=>void}) {
  const active = __tabsValue===value;
  return <button className={`px-3 py-1 rounded ${active?"bg-blue-600 text-white":"bg-gray-100"}`} onClick={()=>__setTabsValue&&__setTabsValue(value)}>{children}</button>;
}
export function TabsContent({ value, children, __tabsValue }:{value:string,children:any,__tabsValue?:string}) {
  if (__tabsValue!==value) return null;
  return <div className="mt-3">{children}</div>;
}
