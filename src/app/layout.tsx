import "./globals.css";
import React from "react";

export const metadata = {
  title: "Phoenix Sawing Operations Dashboard",
  description: "Production planning & workforce assignment",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
