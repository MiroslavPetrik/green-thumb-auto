"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Menu as MenuIcon } from "lucide-react";
import { Menu } from "@base-ui/react/menu";

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
    <>
      <Menu.Root modal={false}>
        <Menu.Trigger
          aria-label="Toggle navigation menu"
          className="flex items-center gap-2 bg-black/20 px-4 py-2 text-lg font-bold uppercase text-white transition-colors duration-300 hover:text-lime-500 lg:hidden"
        >
          <MenuIcon className="size-6" />
          Menu
        </Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner className="z-50" align="end" sideOffset={8}>
            <Menu.Popup className="flex w-56 flex-col bg-[#051a23] ring-1 ring-white/10">
              {NAV_ITEMS.map((item) => {
                const isActive = segment === item.segment;

                return (
                  <Menu.LinkItem
                    key={item.href}
                    href={item.href}
                    closeOnClick
                    className={cn(
                      "px-4 py-3 text-xl font-bold uppercase outline-none transition-colors duration-300",
                      isActive
                        ? "bg-white text-[#051a23]"
                        : "text-white data-highlighted:bg-black/40 data-highlighted:text-lime-500",
                    )}
                  >
                    {item.label}
                  </Menu.LinkItem>
                );
              })}
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
      <ul className="hidden flex-col gap-3 lg:flex">
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
    </>
  );
}

