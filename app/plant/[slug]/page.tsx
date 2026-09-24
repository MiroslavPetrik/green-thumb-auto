import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPlants, getAreaForPlant, getPlant } from "@/lib/areas";
import { Rarity } from "@/components/rarity";

export function generateStaticParams() {
  return getAllPlants().map((plant) => ({ slug: plant.id }));
}

export default async function PlantPage(props: PageProps<"/plant/[slug]">) {
  const { slug } = await props.params;
  const plant = getPlant(slug);
  const area = getAreaForPlant(slug);

  if (!plant || !area) {
    notFound();
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4 p-4">
      <h1 className="text-2xl text-white font-bold">{plant.label}</h1>
      <p className="text-lg text-white font-semibold">
        <Rarity rarity={plant.rarity} />
      </p>
      <Image
        src={plant.image}
        alt={plant.label}
        width={480}
        height={480}
        className="rounded-xl object-cover"
        preload
      />
      <Link
        href={`/area/${area.slug}`}
        className="text-lg uppercase font-extrabold text-white hover:text-lime-500 underline-offset-8 underline"
      >
        Back to {area.label}
      </Link>
    </div>
  );
}
