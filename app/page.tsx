"use client";
import { ActivityReset } from "@/components/activity-reset";
import { CustomActivities } from "@/components/custom-activities";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
import Image from "next/image";

const Activities = dynamic(
  () => import("@/components/activities").then((mod) => mod.Activities),
  {
    ssr: false,
    loading: () => (
      <>
        <div className="space-y-1">
          <Skeleton className="h-8 rounded-md w-40" />
          <Skeleton className="h-8 rounded-md" />
          <Skeleton className="h-8 rounded-md" />
        </div>
        <div className="space-y-1">
          <Skeleton className="h-8 rounded-md w-40" />
          <Skeleton className="h-8 rounded-md" />
          <Skeleton className="h-8 rounded-md" />
        </div>
      </>
    ),
  }
);

export default function Home() {
  return (
    <main className="flex flex-col gap-4 container grow">
      <div className="grid grid-cols-12 items-center justify-items-center md:justify-items-end gap-4">
        <div className="col-span-12 md:col-span-6 space-y-2 md:space-y-8">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Personalized Tracking for New World Players
          </h1>
          <p>
            Aeternum Tracker puts you in control of your New World journey.
            Customize and track the in-game activities and resources that matter
            most to you. Keep tabs on your progress and optimize your gameplay.
          </p>
        </div>{" "}
        <Image
          src="/tile.webp"
          alt="Aeternum Tracker"
          width={400}
          height={400}
          className="col-span-12 md:col-span-6"
        />
      </div>
      <div className="ml-auto flex gap-2">
        <CustomActivities />
        <ActivityReset />
      </div>
      <Activities />
    </main>
  );
}
