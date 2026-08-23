import { type KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { Crown, Clock, Flag } from "lucide-react";

interface Props {
  categories: string[];
  active: string;
  onChange: (value: string) => void;
  /** Optional: number of members per category, e.g. { "Current Tenure": 6 } */
  counts?: Record<string, number>;
}

export default function TeamFilterTabs({ categories, active, onChange, counts }: Props) {
  const nodeCount = categories.length;
  const activeIndex = Math.max(categories.indexOf(active), 0);
  const trackInset = `${50 / nodeCount}%`;
  const progressScale = nodeCount > 1 ? 1 - activeIndex / (nodeCount - 1) : 1;

  const getIcon = (index: number) => {
    if (index === 0) return Crown;
    if (index === nodeCount - 1) return Flag;
    return Clock;
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      onChange(categories[(index + 1) % nodeCount]);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      onChange(categories[(index - 1 + nodeCount) % nodeCount]);
    }
  };

  return (
    <div className="mb-10 sm:mb-16">
      <div className="mx-auto max-w-5xl">
        <div className="relative pb-4 pt-3 sm:pb-6 sm:pt-4">
          {/* Base track — endpoints aligned to the center of the first/last node */}
          <div
            className="absolute top-7 h-1 rounded-full bg-brand-100 sm:top-9 md:top-11"
            style={{ left: trackInset, right: trackInset }}
          />

          {/* Filled progress track — anchored right (founding), fills left toward current */}
          <motion.div
            className="absolute top-7 h-1 origin-right rounded-full bg-gradient-to-r from-brand-500 to-brand-600 sm:top-9 md:top-11"
            style={{ left: trackInset, right: trackInset }}
            initial={false}
            animate={{ scaleX: progressScale }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          />

          {/* Nodes */}
          <div
            role="group"
            aria-label="Filter team by tenure"
            className="relative grid"
            style={{ gridTemplateColumns: `repeat(${nodeCount}, minmax(0, 1fr))` }}
          >
            {categories.map((cat, index) => {
              const isActive = active === cat;
              const isCurrent = index === 0;
              const count = counts?.[cat];
              const Icon = getIcon(index);

              return (
                <button
                  key={cat}
                  onClick={() => onChange(cat)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-pressed={isActive}
                  className="group flex flex-col items-center gap-2 px-1 sm:gap-3 md:gap-4"
                >
                  {/* Node dot */}
                  <span className="relative flex h-9 w-9 shrink-0 items-center justify-center sm:h-11 sm:w-11 md:h-14 md:w-14">
                    {isActive && (
                      <motion.span
                        layoutId="timeline-ring"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="absolute inset-0 rounded-full bg-brand-700 shadow-xl shadow-brand-600/30"
                      />
                    )}

                    {!isActive && (
                      <span className="absolute inset-0 rounded-full border-2 border-brand-200 bg-white transition-colors duration-200 group-hover:border-brand-400" />
                    )}

                    {isCurrent && !isActive && (
                      <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
                      </span>
                    )}

                    <Icon
                      size={16}
                      className={`relative h-4 w-4 transition-colors duration-200 sm:h-[18px] sm:w-[18px] md:h-[22px] md:w-[22px] ${
                        isActive ? "text-white" : "text-brand-400 group-hover:text-brand-700"
                      }`}
                    />
                  </span>

                  {/* Label */}
                  <div className="text-center">
                    <p
                      className={`text-[11px] font-bold leading-tight transition-colors duration-200 sm:text-sm md:text-base ${
                        isActive ? "text-brand-700" : "text-heading/70 group-hover:text-brand-700"
                      }`}
                    >
                      {cat}
                    </p>
                    {typeof count === "number" && (
                      <p className="mt-0.5 hidden text-xs text-heading/40 sm:mt-1 sm:block md:text-sm">
                        {count} {count === 1 ? "member" : "members"}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}