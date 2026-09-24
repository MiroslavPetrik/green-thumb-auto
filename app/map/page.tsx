import Image from "next/image";
import { areas } from "@/lib/areas";
import { Separator } from "@/components/ui/separator";

const TOOLTIP_WIDTH = 160;
const TOOLTIP_HEIGHT = 40;

function getPolygonCenter(points: string) {
  const coords = points
    .trim()
    .split(" ")
    .map((point) => point.split(",").map(Number));

  const total = coords.reduce(
    (acc, [x, y]) => ({ x: acc.x + x, y: acc.y + y }),
    { x: 0, y: 0 },
  );

  return { cx: total.x / coords.length, cy: total.y / coords.length };
}

export default function MapPage() {
  return (
    <div className="flex relative flex-1 flex-col gap-6 p-8 mx-auto max-w-screen-2xl">
      <header className="absolute">
        <div className="flex mt-10 flex-col gap-1">
          <h1 className="text-4xl font-bold text-white">Map</h1>
          <p className="text-xl text-white">
            Discover all the areas in Liberty City.
          </p>
        </div>
        <Separator className="mt-6 bg-white/10 h-1!" />
      </header>
      <div className="flex flex-col flex-1 items-center justify-center">
        <main className="relative inline-block">
          <Image
            src="/map.png"
            alt="Touch Grass map"
            width={1254}
            height={1254}
            preload
          />
          <svg
            viewBox="0 0 1254 1254"
            className="absolute inset-0 h-full w-full"
          >
            {areas.map(({ slug, label, mapPoints }) => {
              const { cx, cy } = getPolygonCenter(mapPoints);

              return (
                <a
                  key={slug}
                  href={`/area/${slug}`}
                  aria-label={label}
                  className="group cursor-pointer"
                >
                  <polygon
                    points={mapPoints}
                    className="fill-transparent stroke-transparent transition-colors duration-150 hover:fill-yellow-400/30 hover:stroke-yellow-400"
                    strokeWidth={3}
                  >
                    <title>{label}</title>
                  </polygon>
                  <foreignObject
                    x={cx - TOOLTIP_WIDTH / 2}
                    y={cy - TOOLTIP_HEIGHT / 2}
                    width={TOOLTIP_WIDTH}
                    height={TOOLTIP_HEIGHT}
                    className="pointer-events-none overflow-visible opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                  >
                    <div className="flex h-full items-center justify-center rounded bg-black/80 px-2 text-center text-base font-bold tracking-wide text-yellow-400">
                      [ VISIT {label.toUpperCase()} ]
                    </div>
                  </foreignObject>
                </a>
              );
            })}
          </svg>
        </main>
      </div>
    </div>
  );
}
