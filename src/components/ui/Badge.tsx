import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-0.5 font-mono text-xs text-zinc-300 transition-colors hover:border-zinc-700 ${className}`}
    >
      {children}
    </span>
  );
}
