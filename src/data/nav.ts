import type { NavItem } from "@/types";

/** Primary site navigation — single-page anchor links. */
export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Practice Areas", href: "#practice-areas" },
  { label: "Our Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

/** Section ids the nav anchors point to (used for scroll-spy). */
export const navSectionIds: string[] = navItems.map((item) =>
  item.href.replace(/^#/, ""),
);
