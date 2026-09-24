"use client";

import { Download, ImageIcon, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Rarity } from "@/components/rarity";
import { CollectionStat } from "@/components/collection-stat";
import { removeHerbariumEntry } from "@/lib/herbarium";
import { useHerbariumEntries } from "@/lib/hooks/use-herbarium-entries";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TOTAL_SLOTS = 8;

function downloadHerbariumEntry(entry: {
  dataUrl: string;
  label: string;
  createdAt: string;
}) {
  const link = document.createElement("a");
  link.href = entry.dataUrl;
  link.download = `${entry.label}-${entry.createdAt}.png`;
  link.click();
}

export default function HerbariumPage() {
  const entries = useHerbariumEntries();

  const emptySlots = Array.from({
    length: Math.max(TOTAL_SLOTS - entries.length, 0),
  });

  const collectedCount = new Set(entries.map((entry) => entry.label)).size;

  return (
    <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-8 mt-12 mx-auto max-w-screen-2xl">
      <header className="flex flex-row items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-bold text-white">Herbarium</h1>
          <p className="text-xl text-white">
            Your collection of plants from the Liberty City
          </p>
        </div>
        <CollectionStat collected={collectedCount} />
      </header>
      <Separator className="bg-white/10 h-1!" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {entries.map((entry) => (
          <Card
            key={entry.createdAt}
            className="flex flex-col gap-3 rounded-none border-none bg-white/5 p-3 group transition-colors duration-150 hover:bg-lime-500"
          >
            <button
              type="button"
              onClick={() => downloadHerbariumEntry(entry)}
              aria-label={`Download ${entry.label}`}
              className="group relative flex aspect-square cursor-pointer items-center justify-center overflow-hidden rounded-none bg-white/5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- data URL can't be optimized by next/image */}
              <img
                src={entry.dataUrl}
                alt={entry.label}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                <Download className="size-10 text-lime-500" />
              </div>
            </button>
            <CardHeader>
              <CardTitle className="text-lg font-extrabold group-hover:text-lime-950 tracking-wide text-white uppercase">
                {entry.label}
              </CardTitle>
              <CardAction>
                <Button
                  size="icon-sm"
                  className="rounded-none"
                  aria-label="Delete entry"
                  onClick={() => removeHerbariumEntry(entry.createdAt)}
                >
                  <Trash2 className="size-4" />
                </Button>
              </CardAction>
              <CardDescription className="text-white group-hover:text-lime-950!">
                <Rarity rarity={entry.rarity} />
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
        {emptySlots.map((_, index) => (
          <Card
            key={index}
            className="flex flex-col gap-3 rounded-none border-none bg-white/5 p-3"
          >
            <div className="flex aspect-square items-center justify-center rounded-none bg-white/5">
              <ImageIcon className="size-10 text-muted-foreground" />
            </div>
            <CardHeader>
              <CardTitle className="text-lg font-extrabold tracking-wide text-white uppercase">
                Empty slot
              </CardTitle>
              <CardDescription>
                <Rarity />
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <Separator className="bg-white/10 h-1!" />
      <footer>
        <p className="text-lg font-bold text-white">
          💚 Love it?{" "}
          <a
            href="https://github.com/MiroslavPetrik/green-thumb-auto"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-8"
          >
            Star on GitHub.
          </a>
        </p>
      </footer>
    </div>
  );
}
