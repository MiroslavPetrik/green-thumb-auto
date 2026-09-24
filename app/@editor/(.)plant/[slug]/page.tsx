import { notFound } from "next/navigation";
import { getPlant } from "@/lib/areas";
import { PlantDialog } from "@/components/plant-dialog";
import { PlantImageEditor } from "@/components/plant-image-editor";

export default async function InterceptedPlantPage(
  props: PageProps<"/plant/[slug]">,
) {
  const { slug } = await props.params;
  const plant = getPlant(slug);

  if (!plant) {
    notFound();
  }

  return (
    <PlantDialog title={plant.label} rarity={plant.rarity}>
      <PlantImageEditor
        image={plant.image}
        rarity={plant.rarity}
        label={plant.label}
      />
    </PlantDialog>
  );
}
