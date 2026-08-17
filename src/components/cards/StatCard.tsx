import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  title: string;
  description?: string;
}

export default function StatCard({
  icon: Icon,
  value,
  suffix = "+",
  title,
  description,
}: StatCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/50
        bg-white/80
        backdrop-blur-xl
        p-8
        shadow-md
        transition-all
        duration-300
        hover:border-brand-200
        hover:shadow-2xl
      "
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-500/15 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div
        className="
          relative
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-brand-600
          text-white
          transition-transform
          duration-300
          group-hover:rotate-6
        "
      >
        <Icon size={30} />
      </div>

      {/* Number */}
      <h3 className="relative mb-2 text-5xl font-bold text-heading transition-transform duration-300 group-hover:scale-105">
        {value}
        {suffix}
      </h3>

      {/* Title */}
      <p className="text-lg font-semibold text-heading">
        {title}
      </p>

      {/* Description */}
      {description && (
        <p className="mt-2 text-sm text-muted">
          {description}
        </p>
      )}
    </motion.div>
  );
}