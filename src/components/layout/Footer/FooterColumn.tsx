import type { ReactNode } from "react";

export interface FooterColumnProps {
  title: string;
  children: ReactNode;
}

/** A titled footer column (heading + list/content). */
export function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">
        {title}
      </h3>
      {children}
    </div>
  );
}
