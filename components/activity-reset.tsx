"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useActivitiesStore } from "@/lib/store";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";

export function ActivityReset() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const activitiesStore = useActivitiesStore();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex gap-2">
          <span>Reset Progress</span>
          <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-1 w-52" onClick={() => setOpen(false)}>
        <Button
          disabled={Object.keys(activitiesStore.progress).length === 0}
          className="w-full hover:bg-destructive"
          variant="ghost"
          onClick={() => activitiesStore.resetProgress("daily")}
        >
          Reset <span className="text-daily mx-1">Daily</span> Progress
        </Button>
        <Button
          disabled={Object.keys(activitiesStore.progress).length === 0}
          className="w-full hover:bg-destructive"
          variant="ghost"
          onClick={() => activitiesStore.resetProgress("weekly")}
        >
          Reset <span className="text-weekly mx-1">Weekly</span> Progress
        </Button>
        <Button
          variant="ghost"
          className="w-full hover:bg-destructive"
          onClick={() => {
            toast({
              variant: "destructive",
              title:
                "Are you sure that you want to restore the default activities?",
              action: (
                <ToastAction
                  altText="Restore"
                  onClick={() => activitiesStore.restoreDefaultActivities()}
                >
                  Restore
                </ToastAction>
              ),
            });
          }}
        >
          Restore activities
        </Button>
      </PopoverContent>
    </Popover>
  );
}
