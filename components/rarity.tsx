import { Star } from "lucide-react";
import type { PlantRarity } from "@/lib/areas";

const FILLED_STAR_COUNT: Record<PlantRarity, number> = {
  common: 1,
  rare: 2,
  exotic: 3,
};

export function Rarity({ rarity }: { rarity?: PlantRarity }) {
  const filledCount = rarity ? FILLED_STAR_COUNT[rarity] : 0;

  return (
    <span className="flex items-center gap-2">
      <span className="flex items-center gap-1">
        {Array.from({ length: 3 }).map((_, index) => (
          <Star
            key={index}
            className="size-4"
            fill={index < filledCount ? "currentColor" : "none"}
          />
        ))}
      </span>
      {rarity && <span className="capitalize">{rarity}</span>}
    </span>
  );
}
