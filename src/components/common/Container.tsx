import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Centered max-width (~1200px) wrapper with responsive horizontal padding. */
export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-300 px-5 sm:px-6 lg:px-8", className)}
    >
      {children}
    </div>
  );
}
