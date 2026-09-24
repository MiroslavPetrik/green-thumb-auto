import type { PlantRarity } from "@/lib/areas";

const HERBARIUM_STORAGE_KEY = "herbarium";

export type HerbariumEntry = {
  dataUrl: string;
  createdAt: string;
  rarity: PlantRarity;
  label: string;
};

let cachedRaw: string | null = null;
let cachedEntries: HerbariumEntry[] = [];
const listeners = new Set<() => void>();

function readEntries(): HerbariumEntry[] {
  const raw = localStorage.getItem(HERBARIUM_STORAGE_KEY);
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedEntries = raw ? JSON.parse(raw) : [];
  }
  return cachedEntries;
}

function writeEntries(entries: HerbariumEntry[]) {
  cachedRaw = JSON.stringify(entries);
  cachedEntries = entries;
  localStorage.setItem(HERBARIUM_STORAGE_KEY, cachedRaw);
  listeners.forEach((listener) => listener());
}

export function subscribeHerbariumEntries(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function getHerbariumEntriesSnapshot(): HerbariumEntry[] {
  return readEntries();
}

const snapshot: HerbariumEntry[] = [];

export function getHerbariumEntriesServerSnapshot(): HerbariumEntry[] {
  return snapshot;
}

export function addHerbariumEntry(
  dataUrl: string,
  rarity: PlantRarity,
  label: string,
) {
  const entry: HerbariumEntry = {
    dataUrl,
    rarity,
    label,
    createdAt: new Date().toISOString(),
  };

  writeEntries([entry, ...readEntries()]);
}

export function removeHerbariumEntry(createdAt: string) {
  writeEntries(readEntries().filter((entry) => entry.createdAt !== createdAt));
}
