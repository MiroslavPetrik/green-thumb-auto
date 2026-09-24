import { useSyncExternalStore } from "react";
import {
  getHerbariumEntriesServerSnapshot,
  getHerbariumEntriesSnapshot,
  subscribeHerbariumEntries,
} from "@/lib/herbarium";

export function useHerbariumEntries() {
  return useSyncExternalStore(
    subscribeHerbariumEntries,
    getHerbariumEntriesSnapshot,
    getHerbariumEntriesServerSnapshot,
  );
}
