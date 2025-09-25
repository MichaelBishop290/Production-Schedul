import * as React from "react";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default"|"secondary"|"destructive" };
export function Button({ className="", variant="default", ...props }: Props) {
  const styles = variant==="secondary"
    ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
    : variant==="destructive"
    ? "bg-red-600 text-white hover:bg-red-700"
    : "bg-blue-600 text-white hover:bg-blue-700";
  return <button className={`px-3 py-2 rounded ${styles} ${className}`} {...props} />;
}
