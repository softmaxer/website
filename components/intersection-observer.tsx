"use client";

import { useIsVisible } from "@/hooks/element-boundary";
import React from "react";

export default function Page() {
  const ref1 = React.useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <div
      ref={ref1}
      className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}
    >
      Hello
    </div>
  );
}
