// components/ui/card.jsx
import React from "react";
import { cn } from "../../../../lib/utils.js";

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-white shadow-sm dark:bg-zinc-900",
        className
      )}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }) {
  return <div className={cn("p-6", className)} {...props} />;
}
