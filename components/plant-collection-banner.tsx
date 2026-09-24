"use client";

import type { Plant } from "@/lib/areas";
import { useHerbariumEntries } from "@/lib/hooks/use-herbarium-entries";

export function PlantCollectionBanner({ plants }: { plants: Plant[] }) {
  const entries = useHerbariumEntries();

  const collectedLabels = new Set(entries.map((entry) => entry.label));
  const remaining = plants.filter(
    (plant) => !collectedLabels.has(plant.label),
  ).length;

  return (
    <div
      className={`absolute top-4 left-4 z-10 flex flex-col gap-2 bg-black/80 p-3 ${remaining > 0 ? "animate-shake" : ""}`}
    >
      <span className="text-sm font-extrabold uppercase tracking-wide text-white">
        Collect Plants
      </span>
      <div className="flex items-center gap-2">
        {plants.map((plant) => (
          <div
            key={plant.id}
            className={`h-5 w-5 ${collectedLabels.has(plant.label) ? "bg-lime-500" : "bg-neutral-600"}`}
          />
        ))}
        <span className="text-xs font-bold uppercase tracking-wide text-white">
          {remaining === 0 ? "All plants collected" : `${remaining} remaining`}
        </span>
      </div>
    </div>
  );
}
