import React, { ReactNode } from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
        <div className="w-full h-full ">
          {children}
        </div>
  );
}
