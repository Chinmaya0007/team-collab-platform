interface Stat {
  label: string;
  value: string;
  active?: boolean;
}

const stats: Stat[] = [
  {
    label: "Total Tasks",
    value: "84",
  },
  {
    label: "Completed",
    value: "42",
  },
  {
    label: "In Progress",
    value: "18",
    active: true,
  },
  {
    label: "Todo",
    value: "24",
  },
];

export default function ProjectStats() {
  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`flex flex-col items-center justify-center rounded-xl border bg-white p-5 shadow-sm ${
            stat.active
              ? "border-[#c7c4d8] border-l-4 border-l-[#3525cd]"
              : "border-[#c7c4d8]"
          }`}
        >
          <span className="mb-1 text-xs font-medium text-[#464555]">
            {stat.label}
          </span>

          <span
            className={`text-2xl font-semibold ${
              stat.active
                ? "text-[#3525cd]"
                : "text-[#191c1d]"
            }`}
          >
            {stat.value}
          </span>
        </div>
      ))}
    </section>
  );
}