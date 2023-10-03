"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useSettingsStore } from "@/lib/store";
import { ChevronDown, ChevronUp } from "lucide-react";

export function CollapsibleCategory({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const settingsStore = useSettingsStore();
  const open = !settingsStore.hiddenCategories.includes(title);

  return (
    <Collapsible
      open={open}
      onOpenChange={() => settingsStore.toggleHiddenCategory(title)}
    >
      <CollapsibleTrigger className="w-full">
        <div className="text-xl flex items-center justify-between">
          <span>{title}</span>
          {open ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2">{children}</CollapsibleContent>
    </Collapsible>
  );
}
