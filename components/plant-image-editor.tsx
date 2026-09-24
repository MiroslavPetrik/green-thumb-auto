"use client";

import { useRouter } from "next/navigation";
import ImageEditor from "@unlayer/react-image-editor";
import { addHerbariumEntry } from "@/lib/herbarium";
import type { PlantRarity } from "@/lib/areas";

export function PlantImageEditor({
  image,
  rarity,
  label,
}: {
  image: string;
  rarity: PlantRarity;
  label: string;
}) {
  const router = useRouter();

  return (
    <ImageEditor
      image={image}
      options={{ theme: "dark" }}
      minHeight={520}
      style={{ height: "100%", flex: 1 }}
      onCancel={() => router.back()}
      onSave={({ dataUrl }) => {
        addHerbariumEntry(dataUrl, rarity, label);
        router.back();
      }}
    />
  );
}
