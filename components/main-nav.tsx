"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Start", segment: null },
  { href: "/map", label: "Map", segment: "map" },
  { href: "/herbarium", label: "Herbarium", segment: "herbarium" },
  { href: "/about", label: "About", segment: "about" },
] as const;

export function MainNav() {
  const segment = useSelectedLayoutSegment();

  return (
    <ul className="flex flex-col gap-3">
      {NAV_ITEMS.map((item) => {
        const isActive = segment === item.segment;

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "block px-4 py-2 text-center text-[32px] leading-none font-bold uppercase transition-colors duration-300",
                isActive
                  ? "bg-white text-[#051a23]"
                  : "bg-black/20 text-white hover:text-lime-500",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
