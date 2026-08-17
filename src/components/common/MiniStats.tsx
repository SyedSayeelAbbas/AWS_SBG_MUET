import { Users, CalendarDays, Award, FolderKanban } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Members",
  },
  {
    icon: CalendarDays,
    value: "35+",
    label: "Events",
  },
  {
    icon: Award,
    value: "120+",
    label: "Certified",
  },
  {
    icon: FolderKanban,
    value: "60+",
    label: "Projects",
  },
];

export default function MiniStats() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="
              rounded-2xl
              border
              border-white/40
              bg-white/55
              p-5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
            "
          >
            <Icon
              size={22}
              className="mb-4 text-brand-600"
            />

            <h3 className="text-2xl font-bold gradient-text">
              {item.value}
            </h3>

            <p className="mt-1 text-sm text-body">
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}