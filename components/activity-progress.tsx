"use client";

import { Progress } from "@/components/ui/progress";
import { Activity } from "@/lib/activities";
import { useActivitiesStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Check, EyeOff, Plus, X } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";

export function ActivityProgress({ title, max, frequently }: Activity) {
  const activitiesStore = useActivitiesStore();
  const { toast } = useToast();

  const progress = activitiesStore.progress[title] ?? 0;
  const isMax = progress === max;

  return (
    <div className="flex gap-2 items-center">
      <div className="relative grow overflow-hidden">
        <p className="text-md font-bold px-2 py-2 text-shadow truncate">
          <span className="truncate">{title}</span>
          <span className="text-xs ml-2 font-normal">
            ({progress}/{max}{" "}
            <span
              className={cn(
                frequently === "daily" ? "text-daily" : "text-weekly"
              )}
            >
              {frequently === "daily" ? "daily" : "weekly"}
            </span>
            )
          </span>
        </p>
        <Progress
          value={progress}
          max={max}
          className="absolute inset-0 h-full -z-10 rounded-md"
        />
      </div>
      <Button
        size="icon"
        onClick={() =>
          activitiesStore.setProgress(title, Math.min(progress + 1, max))
        }
        disabled={isMax}
        className="shrink-0"
        variant={isMax ? "ghost" : "outline"}
      >
        {progress >= max - 1 ? (
          <Check color={isMax ? "green" : undefined} />
        ) : (
          <Plus />
        )}
      </Button>
      <Button
        size="icon"
        onClick={() => activitiesStore.setProgress(title, 0)}
        disabled={progress === 0}
        className="shrink-0"
        variant="destructive"
      >
        <X />
      </Button>
      <Button
        size="icon"
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Are you sure that you want to remove this activity?",
            action: (
              <ToastAction
                altText="Remove"
                onClick={() => activitiesStore.removeCustomActivity(title)}
              >
                Remove
              </ToastAction>
            ),
          });
        }}
        className="shrink-0"
        variant="destructive"
      >
        <EyeOff />
      </Button>
    </div>
  );
}
