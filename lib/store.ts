import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Activity, activities } from "./activities";

export const useActivitiesStore = create(
  persist<{
    customActivities: Activity[];
    addCustomActivity: (activity: Activity) => void;
    removeCustomActivity: (title: string) => void;
    restoreDefaultActivities: () => void;
    progress: Record<string, number>;
    resetProgress: (frequently: Activity["frequently"]) => void;
    setProgress: (activity: string, progress: number) => void;
  }>(
    (set, get) => ({
      customActivities: activities,
      addCustomActivity: (activity) =>
        set({
          customActivities: [...get().customActivities, activity],
        }),
      removeCustomActivity: (title) =>
        set({
          customActivities: get().customActivities.filter(
            (a) => a.title !== title
          ),
        }),
      restoreDefaultActivities: () =>
        set({
          customActivities: activities,
        }),
      progress: {},
      resetProgress: (frequently) =>
        set({
          progress: Object.fromEntries(
            Object.entries(get().progress).map(([activity, progress]) => [
              activity,
              [...activities, ...get().customActivities].find(
                (a) => a.title === activity
              )?.frequently === frequently
                ? 0
                : progress,
            ])
          ),
        }),
      setProgress: (activity, progress) =>
        set({
          progress: {
            ...get().progress,
            [activity]: progress,
          },
        }),
    }),
    {
      name: "activities-storage",
      storage: createJSONStorage(() => storage),
    }
  )
);

export const useSettingsStore = create(
  persist<{
    hiddenCategories: string[];
    toggleHiddenCategory: (category: string) => void;
  }>(
    (set, get) => ({
      hiddenCategories: [],
      toggleHiddenCategory: (category) =>
        set({
          hiddenCategories: get().hiddenCategories.includes(category)
            ? get().hiddenCategories.filter((c) => c !== category)
            : [...get().hiddenCategories, category],
        }),
    }),
    {
      name: "settings-storage",
    }
  )
);
