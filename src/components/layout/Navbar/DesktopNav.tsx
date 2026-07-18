import { NavLink } from "@/components/layout/Navbar/NavLink";
import type { NavItem } from "@/types";

export interface DesktopNavProps {
  items: NavItem[];
  activeId: string | null;
}

/** Horizontal desktop nav list (hidden below `md`). */
export function DesktopNav({ items, activeId }: DesktopNavProps) {
  return (
    <ul className="hidden items-center gap-1 md:flex">
      {items.map((item) => (
        <li key={item.href}>
          <NavLink
            item={item}
            active={activeId === item.href.replace(/^#/, "")}
          />
        </li>
      ))}
    </ul>
  );
}
