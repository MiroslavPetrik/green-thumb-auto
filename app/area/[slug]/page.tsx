import Image from "next/image";
import { notFound } from "next/navigation";
import { areas, getArea } from "@/lib/areas";
import Link from "next/link";
import { ViewTransition } from "react";
import { PlantCollectionBanner } from "@/components/plant-collection-banner";
import { PlantMarkers } from "@/components/plant-markers";

/** Same-route dynamic segment ([slug]) swaps subtrees rather than unmounting, so enter/exit don't fire reliably; key+name+share does */
const SHARE_CLASS_BY_TYPE = {
  "nav-north": "area-nav-north",
  "nav-east": "area-nav-east",
  "nav-south": "area-nav-south",
  "nav-west": "area-nav-west",
  default: "none",
} as const;

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export default async function AreaPage(props: PageProps<"/area/[slug]">) {
  const { slug } = await props.params;
  const area = getArea(slug);

  if (!area) {
    notFound();
  }

  const directions = [
    {
      dir: "north" as const,
      arrow: "▲",
      position: "top-0 left-1/2 -translate-x-1/2 -translate-y-full",
      size: "h-12 w-24",
    },
    {
      dir: "east" as const,
      arrow: "▶",
      position: "top-1/2 right-0 -translate-y-1/2 translate-x-full",
      size: "h-24 w-12",
    },
    {
      dir: "south" as const,
      arrow: "▼",
      position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-full",
      size: "h-12 w-24",
    },
    {
      dir: "west" as const,
      arrow: "◀",
      position: "top-1/2 left-0 -translate-y-1/2 -translate-x-full",
      size: "h-24 w-12",
    },
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <ViewTransition
        key={slug}
        name="area-content"
        share={SHARE_CLASS_BY_TYPE}
        default="none"
      >
        <main className="relative inline-block">
          <Image
            src={area.image}
            alt={`${area.label} area`}
            width={area.imageWidth}
            height={area.imageHeight}
            preload
          />
          <PlantCollectionBanner plants={area.plants} />
          {directions.map(({ dir, arrow, position, size }) => {
            const neighborSlug = area.neighbors[dir];
            const baseClassName =
              "absolute z-10 flex items-center justify-center text-2xl font-extrabold";

            if (!neighborSlug) {
              return (
                <div
                  key={dir}
                  className={`${baseClassName} ${size} ${position} invisible`}
                >
                  {arrow}
                </div>
              );
            }

            return (
              <Link
                key={dir}
                href={`/area/${neighborSlug}`}
                transitionTypes={[`nav-${dir}`]}
                className={`${baseClassName} ${size} ${position} group bg-black/80 text-white`}
              >
                <span className="transition-colors duration-150 group-hover:text-lime-500">
                  {arrow}
                </span>
              </Link>
            );
          })}
          <PlantMarkers
            plants={area.plants}
            imageWidth={area.imageWidth}
            imageHeight={area.imageHeight}
          />
        </main>
      </ViewTransition>
    </div>
  );
}
