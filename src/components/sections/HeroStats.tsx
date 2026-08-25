import {
  Users,
  CalendarDays,
  Award,
  Rocket,
} from "lucide-react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Community Members",
    icon: Users,
  },
  {
    value: 35,
    suffix: "+",
    label: "Events",
    icon: CalendarDays,
  },
  {
    value: 120,
    suffix: "+",
    label: "AWS Certified",
    icon: Award,
  },
  {
    value: 60,
    suffix: "+",
    label: "Projects",
    icon: Rocket,
  },
];

function useCountUp(
  end: number,
  duration: number,
  start: boolean
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let frame: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;

      const progress = Math.min(
        (time - startTime) / (duration * 1000),
        1
      );

      const eased =
        1 - Math.pow(1 - progress, 3);

      setCount(Math.round(eased * end));

      if (progress < 1)
        frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [end, duration, start]);

  return count;
}

function StatCard({
  stat,
  inView,
  index,
}: {
  stat: (typeof stats)[0];
  inView: boolean;
  index: number;
}) {
  const count = useCountUp(
    stat.value,
    1.8,
    inView
  );

  const Icon = stat.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
      }}
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/40
        bg-white/65
        p-4
        backdrop-blur-xl
        transition-all
        hover:border-brand-300/60
        sm:p-6
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
          bg-gradient-to-br
          from-brand-500/10
          via-brand-500/10
          to-brand-600/10
        "
      />

      <div className="relative z-10">
        <div
          className="
            mb-3
            inline-flex
            rounded-xl
            bg-brand-100
            p-2.5
            sm:mb-4
            sm:p-3
          "
        >
          <Icon
            size={19}
            className="text-brand-600 sm:hidden"
          />
          <Icon
            size={22}
            className="hidden text-brand-600 sm:block"
          />
        </div>

        <h3 className="text-2xl font-black gradient-text sm:text-4xl">
          {count}
          {stat.suffix}
        </h3>

        <p className="mt-1.5 text-xs font-medium text-body sm:mt-2 sm:text-sm">
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}

export default function HeroStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        mt-10
        grid
        grid-cols-2
        gap-3
        sm:mt-14
        sm:gap-5
        xl:grid-cols-4
      "
    >
      {stats.map((stat, index) => (
        <StatCard
          key={stat.label}
          stat={stat}
          inView={inView}
          index={index}
        />
      ))}
    </motion.div>
  );
}