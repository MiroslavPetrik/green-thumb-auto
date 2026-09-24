import { Progress } from "@/components/ui/progress";

const TOTAL_PLANTS = 8;

export function CollectionStat({ collected }: { collected: number }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-lg font-extrabold uppercase tracking-wide text-white">
        Collected Plants
      </span>
      <div className="flex items-center gap-4">
        <span className="text-4xl font-extrabold tabular-nums text-white">
          {collected}
          <span className="text-muted-foreground">
            /<small className="align-bottom">{TOTAL_PLANTS}</small>
          </span>
        </span>
        <Progress
          value={(collected / TOTAL_PLANTS) * 100}
          className="w-28"
          trackClassName="h-3 bg-white/10"
          indicatorClassName="bg-lime-500"
        />
      </div>
    </div>
  );
}
