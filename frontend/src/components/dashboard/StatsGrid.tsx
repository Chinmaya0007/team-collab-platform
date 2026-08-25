import {
  Folder,
  Layers,
  SquareCheckBig,
  Users,
} from "lucide-react";

import StatCard from "./StatCard";

const stats = [
  {
    title: "Active Projects",
    value: "12",
    icon: Folder,
  },
  {
    title: "Open Tasks",
    value: "48",
    icon: Layers,
  },
  {
    title: "Completed Tasks",
    value: "124",
    icon: SquareCheckBig,
  },
  {
    title: "Team Members",
    value: "18",
    icon: Users,
  },
];

export default function StatsGrid() {
  return (
    <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
        />
      ))}
    </section>
  );
}