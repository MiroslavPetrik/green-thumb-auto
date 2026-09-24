"use client";

import Link from "next/link";
import type { Plant } from "@/lib/areas";
import { useHerbariumEntries } from "@/lib/hooks/use-herbarium-entries";

const TOOLTIP_WIDTH = 160;
const TOOLTIP_HEIGHT = 40;

export function PlantMarkers({
  plants,
  imageWidth,
  imageHeight,
  radius = 220,
}: {
  plants: Plant[];
  imageWidth: number;
  imageHeight: number;
  radius?: number;
}) {
  const hoverClassName =
    "fill-transparent stroke-transparent transition-colors duration-150 hover:fill-yellow-400/30 hover:stroke-yellow-400";

  const entries = useHerbariumEntries();
  const collectedLabels = new Set(entries.map((entry) => entry.label));
  const uncollectedPlants = plants.filter(
    (plant) => !collectedLabels.has(plant.label),
  );

  return (
    <svg
      viewBox={`0 0 ${imageWidth} ${imageHeight}`}
      className="absolute inset-0 h-full w-full"
    >
      {uncollectedPlants.map((plant) => (
        <Link
          key={plant.id}
          href={`/plant/${plant.id}`}
          className="group cursor-pointer"
        >
          <circle
            cx={plant.cx}
            cy={plant.cy}
            r={radius}
            className={hoverClassName}
            strokeWidth={3}
          />
          <foreignObject
            x={plant.cx - TOOLTIP_WIDTH / 2}
            y={plant.cy - TOOLTIP_HEIGHT / 2}
            width={TOOLTIP_WIDTH}
            height={TOOLTIP_HEIGHT}
            className="pointer-events-none overflow-visible opacity-0 transition-opacity duration-150 group-hover:opacity-100"
          >
            <div className="flex h-full items-center justify-center rounded bg-black/80 px-2 text-center text-base font-bold tracking-wide text-yellow-400">
              [ TAKE PHOTO ]
            </div>
          </foreignObject>
        </Link>
      ))}
    </svg>
  );
}
