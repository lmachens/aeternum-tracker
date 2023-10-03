export type Activity = {
  title: string;
  category: string;
  max: number;
  frequently: "daily" | "weekly";
};
export const activities: Activity[] = [
  {
    title: "Faction Bonus Missions",
    category: "Faction",
    max: 3,
    frequently: "daily",
  },
  {
    title: "Elite Runs",
    category: "Other",
    max: 10,
    frequently: "daily",
  },
  {
    title: "Transmog Token",
    category: "Crafting",
    max: 1,
    frequently: "weekly",
  },
  {
    title: "Influence screenshot for Aeternum Map",
    category: "Other",
    max: 1,
    frequently: "daily",
  },
  {
    title: "Gypsum From Faction Vendor",
    category: "Crafting",
    max: 2,
    frequently: "daily",
  },
  {
    title: "Rafflebones",
    category: "Events",
    max: 2,
    frequently: "daily",
  },
  {
    title: "Mutated Dungeons",
    category: "Other",
    max: 35,
    frequently: "weekly",
  },
];

export const activitiesByCategory = activities.reduce((acc, activity) => {
  const { category } = activity;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(activity);
  return acc;
}, {} as Record<string, Activity[]>);
