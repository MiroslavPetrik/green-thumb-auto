export type PlantRarity = "common" | "rare" | "exotic";

export type Plant = {
  id: string;
  label: string;
  /** Path to the plant's photo under public/plants */
  image: string;
  rarity: PlantRarity;
  cx: number;
  cy: number;
};

export type Area = {
  slug: string;
  label: string;
  /** SVG polygon points for this area's region on the root map */
  mapPoints: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  plants: Plant[];
  neighbors: Partial<Record<"north" | "east" | "south" | "west", string>>;
};

export const areas: Area[] = [
  {
    slug: "hills",
    label: "Hills",
    mapPoints:
      "458,121 500,123 537,132 563,151 579,176 586,207 587,235 577,253 574,286 570,326 563,365 553,405 541,443 527,470 505,477 472,475 437,474 402,475 382,487 365,505 344,514 319,512 293,504 267,491 243,474 222,451 211,426 210,402 218,380 227,359 226,337 229,316 235,292 252,276 274,260 294,242 310,220 326,199 345,184 365,168 389,155 414,143 437,132",
    image: "/areas/hills.jpg",
    imageWidth: 1672,
    imageHeight: 941,
    neighbors: { east: "desert", south: "island" },
    plants: [
      {
        id: "blueberry",
        label: "Elliott Blueberry",
        image: "/plants/blueberry.jpg",
        rarity: "common",
        cx: 486,
        cy: 668,
      },
      {
        id: "fireweed",
        label: "Rosebay Fireweed",
        image: "/plants/fireweed.jpg",
        rarity: "common",
        cx: 1368,
        cy: 674,
      },
    ],
  },
  {
    slug: "desert",
    label: "Desert",
    mapPoints:
      "755,175 735,188 697,236 675,250 678,364 718,402 742,414 810,482 916,482 949,439 1010,393 1012,377 994,312 942,276 924,235 904,219 805,172 781,168",
    image: "/areas/desert.jpg",
    imageWidth: 1672,
    imageHeight: 941,
    neighbors: { west: "hills", south: "beach" },
    plants: [
      {
        id: "joshua-tree",
        label: "Mojave Joshua Tree",
        image: "/plants/joshua-tree.jpg",
        rarity: "rare",
        cx: 1095,
        cy: 247,
      },
      {
        id: "agave",
        label: "Blue Agave",
        image: "/plants/agave.jpg",
        rarity: "exotic",
        cx: 613,
        cy: 675,
      },
    ],
  },
  {
    slug: "beach",
    label: "Beach",
    mapPoints:
      "1057,460 1015,462 985,472 991,476 977,488 931,577 861,793 846,821 797,994 773,1039 782,1051 773,1063 764,1055 748,1083 754,1098 767,1108 787,1110 811,1095 894,987 914,952 928,871 944,826 976,764 1040,665 1050,558 1066,496 1066,475",
    image: "/areas/beach.jpg",
    imageWidth: 1672,
    imageHeight: 941,
    neighbors: { north: "desert", west: "island" },
    plants: [
      {
        id: "peppers",
        label: "Cayenne Pepper",
        image: "/plants/pepper.jpg",
        rarity: "common",
        cx: 405,
        cy: 610,
      },
      {
        id: "tomatoes",
        label: "Roma Tomato",
        image: "/plants/tomato.jpg",
        rarity: "common",
        cx: 1165,
        cy: 635,
      },
    ],
  },
  {
    slug: "island",
    label: "Island",
    mapPoints:
      "171,740 177,718 190,700 210,688 229,669 248,650 276,642 310,638 348,636 386,637 420,639 446,647 463,660 469,683 469,712 468,739 475,765 491,788 507,812 520,838 526,866 527,894 523,922 518,950 512,973 500,990 485,998 468,999 448,994 423,984 397,974 370,965 343,955 315,946 287,936 259,926 231,916 207,904 188,890 174,871 163,850 155,827 151,802 150,778 153,757 160,748",
    image: "/areas/island.jpg",
    imageWidth: 1672,
    imageHeight: 941,
    neighbors: { north: "hills", east: "beach" },
    plants: [
      {
        id: "cattail",
        label: "Broadleaf Cattail",
        image: "/plants/cattail.jpg",
        rarity: "common",
        cx: 1000,
        cy: 570,
      },
      {
        id: "water-lily",
        label: "Fragrant Water Lily",
        image: "/plants/water-lily.jpg",
        rarity: "common",
        cx: 1350,
        cy: 560,
      },
    ],
  },
];

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}

export function getPlant(id: string) {
  for (const area of areas) {
    const plant = area.plants.find((plant) => plant.id === id);
    if (plant) {
      return plant;
    }
  }
  return undefined;
}

export function getAreaForPlant(id: string) {
  return areas.find((area) => area.plants.some((plant) => plant.id === id));
}

export function getAllPlants() {
  return areas.flatMap((area) => area.plants);
}
