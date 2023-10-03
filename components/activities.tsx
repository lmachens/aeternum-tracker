"use client";
import { useActivitiesStore } from "@/lib/store";
import { ActivityProgress } from "./activity-progress";
import { CollapsibleCategory } from "./collapsible-category";

export function Activities() {
  const activitiesStore = useActivitiesStore();

  const customCategories = [
    ...new Set(
      activitiesStore.customActivities.map((activity) => activity.category)
    ),
  ];

  return (
    <>
      {customCategories.sort().map((category) => (
        <CollapsibleCategory title={category} key={category}>
          <div className="flex flex-col gap-1">
            {activitiesStore.customActivities
              .filter((activity) => activity.category === category)
              .sort((a, b) => a.title.localeCompare(b.title))
              .map((activity) => (
                <ActivityProgress key={activity.title} {...activity} />
              ))}
          </div>
        </CollapsibleCategory>
      ))}
    </>
  );
}
