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
    title: "Gypsum From Faction Vendor",
    category: "Faction",
    max: 2,
    frequently: "daily",
  },
  {
    title: "Mutated Dungeons",
    category: "Gameplay",
    max: 35,
    frequently: "weekly",
  },
  {
    title: "Transmog Token",
    category: "Gameplay",
    max: 1,
    frequently: "weekly",
  },
  {
    title: "Sulfur Chest Run",
    category: "Gameplay",
    max: 1,
    frequently: "daily",
  },
  {
    title: "Diamond Gypsum (Hidden Stashes)",
    category: "Gypsum",
    max: 3,
    frequently: "daily",
  },
  {
    title: "Emerald Gypsum (Aptitude Chests)",
    category: "Gypsum",
    max: 2,
    frequently: "daily",
  },
  {
    title: "Obsidian Gypsum (L60+ Open World Bosses)",
    category: "Gypsum",
    max: 3,
    frequently: "daily",
  },
  {
    title: "Topaz Gypsum (L55+ Mobs with Potion active)",
    category: "Gypsum",
    max: 15,
    frequently: "daily",
  },
  {
    title: "Garnet Gypsum (PvP 3v3 Arena)",
    category: "Gypsum",
    max: 2,
    frequently: "daily",
  },
  {
    title: "Amethyst Gypsum (L60+ Corrupted Breaches)",
    category: "Gypsum",
    max: 10,
    frequently: "daily",
  },
  {
    title: "Ruby Gypsum (PvP Outpost Rush)",
    category: "Gypsum",
    max: 3,
    frequently: "daily",
  },
  {
    title: "Sapphire Gypsum (Dungeon Bosses)",
    category: "Gypsum",
    max: 2,
    frequently: "daily",
  },

  {
    title: "Citrine Gypsum (PvE Arena )",
    category: "Gypsum",
    max: 2,
    frequently: "daily",
  },
  {
    title: "Helios",
    category: "Elite Chest Runs",
    max: 1,
    frequently: "daily",
  },
  {
    title: "Sirens",
    category: "Elite Chest Runs",
    max: 1,
    frequently: "daily",
  },
  {
    title: "Pools",
    category: "Elite Chest Runs",
    max: 1,
    frequently: "daily",
  },
  {
    title: "Myrkgard",
    category: "Elite Chest Runs",
    max: 1,
    frequently: "daily",
  },
  {
    title: "Mines",
    category: "Elite Chest Runs",
    max: 1,
    frequently: "daily",
  },
  {
    title: "Imperial Palace",
    category: "Elite Chest Runs",
    max: 1,
    frequently: "daily",
  },
  {
    title: "Asmodeum",
    category: "Crafting",
    max: 10,
    frequently: "daily",
  },
  {
    title: "Runic Leather",
    category: "Crafting",
    max: 10,
    frequently: "daily",
  },
  {
    title: "Phoenixweave",
    category: "Crafting",
    max: 10,
    frequently: "daily",
  },
  {
    title: "Glittering Ebony",
    category: "Crafting",
    max: 10,
    frequently: "daily",
  },
  {
    title: "Runestone",
    category: "Crafting",
    max: 10,
    frequently: "daily",
  },
  {
    title: "Prismatic Ingot",
    category: "Crafting",
    max: 10,
    frequently: "daily",
  },
  {
    title: "Prismatic Leather",
    category: "Crafting",
    max: 10,
    frequently: "daily",
  },
  {
    title: "Prismatic Cloth",
    category: "Crafting",
    max: 10,
    frequently: "daily",
  },
  {
    title: "Prismatic Planks",
    category: "Crafting",
    max: 10,
    frequently: "daily",
  },
  {
    title: "Prismatic Blocke",
    category: "Crafting",
    max: 10,
    frequently: "daily",
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
