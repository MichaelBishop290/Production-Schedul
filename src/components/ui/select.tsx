"use client";
import * as React from "react";
export function Select({ value, onValueChange, children }:{value?:string,onValueChange?:(v:string)=>void,children:any}) {
  return <div data-select-value={value}>{React.Children.map(children,(c:any)=>React.cloneElement(c,{__selectValue:value,__setSelectValue:onValueChange}))}</div>;
}
export function SelectTrigger({ className="", children }:{className?:string, children:any}) {
  return <div className={`border rounded p-2 ${className}`}>{children}</div>;
}
export function SelectValue({ placeholder }:{placeholder?:string}) { return <span>{placeholder}</span>; }
export function SelectContent({ children }:{children:any}) { return <div className="mt-1 border rounded p-1 bg-white">{children}</div>; }
export function SelectItem({ value, children, __setSelectValue }:{value:string,children:any,__setSelectValue?:(v:string)=>void}) {
  return <div className="px-2 py-1 hover:bg-gray-100 cursor-pointer" onClick={()=>__setSelectValue && __setSelectValue(value)}>{children}</div>;
}
