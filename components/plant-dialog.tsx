"use client";

import { useRouter } from "next/navigation";
import { cn } from "cn";
import type { PlantRarity } from "@/lib/areas";
import { Rarity } from "@/components/rarity";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function PlantDialog({
  title,
  rarity,
  children,
}: {
  title: string;
  rarity: PlantRarity;
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <Dialog
      defaultOpen
      onOpenChange={(open) => {
        if (!open) {
          // navigating back closes the intercepted route and restores the underlying page
          router.back();
        }
      }}
    >
      <DialogContent
        className={cn(
          "flex h-[calc(100vh-2rem)] w-full flex-col overflow-y-auto sm:max-w-none lg:max-w-[80vw]",
          "border border-white/10 bg-[#0b2530] text-white ring-white/10",
        )}
      >
        <DialogHeader className="shrink-0">
          <DialogTitle className="text-2xl font-bold sm:text-3xl">
            You&apos;ve found the{" "}
            <span className="text-yellow-400 font-extrabold">{title}</span>!
          </DialogTitle>
          <DialogDescription className="text-base text-white font-semibold sm:text-lg">
            <Rarity rarity={rarity} />
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
