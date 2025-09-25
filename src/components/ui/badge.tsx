import * as React from "react";
export function Badge({ children, variant="secondary", className="" }:{children:any,variant?:"secondary"|"outline"|"destructive",className?:string}) {
  const base = "inline-flex items-center rounded px-2 py-0.5 text-xs";
  const style = variant==="outline"?"border text-gray-700":variant==="destructive"?"bg-red-100 text-red-800":"bg-gray-200 text-gray-900";
  return <span className={`${base} ${style} ${className}`}>{children}</span>;
}
