"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useActivitiesStore } from "@/lib/store";
import { ActivityProgress } from "./activity-progress";

export function Activities() {
  const activitiesStore = useActivitiesStore();

  const customCategories = [
    ...new Set(
      activitiesStore.customActivities.map((activity) => activity.category)
    ),
  ];
  return (
    <Accordion
      type="multiple"
      value={activitiesStore.openCategories}
      onValueChange={activitiesStore.setOpenCategories}
    >
      {customCategories.map((category) => (
        <AccordionItem key={category} value={category}>
          <AccordionTrigger>{category}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-1">
              {activitiesStore.customActivities
                .filter((activity) => activity.category === category)
                .map((activity) => (
                  <ActivityProgress key={activity.title} {...activity} />
                ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
