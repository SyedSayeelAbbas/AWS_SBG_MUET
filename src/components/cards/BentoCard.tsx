import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

interface BentoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index?: number;
  featured?: boolean;
  className?: string;
}

export default function BentoCard({
  title,
  description,
  icon: Icon,
  index = 0,
  featured = false,
  className = "",
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: (index % 3) * 0.1 },
      }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-line
        bg-white
        p-8
        shadow-md
        transition-all
        duration-300
        hover:border-brand-200
        hover:shadow-2xl
        ${featured ? "sm:p-10 xl:col-span-2" : ""}
        ${className}
      `}
    >
      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-200/40 blur-3xl transition-all duration-500 group-hover:scale-150" />

      {/* Icon — subtle light-purple surface per brand system, not a
          saturated purple block on every card */}
      <div
        className={`
          mb-8
          flex
          items-center
          justify-center
          rounded-2xl
          bg-light-purple
          text-brand-600
          shadow-sm
          transition-transform
          duration-300
          group-hover:scale-110
          group-hover:rotate-6
          ${featured ? "h-20 w-20" : "h-16 w-16"}
        `}
      >
        <Icon size={featured ? 34 : 30} />
      </div>

      {/* Content */}
      <h3 className={`font-bold text-heading ${featured ? "text-3xl" : "text-2xl"}`}>
        {title}
      </h3>

      <p className="mt-4 max-w-md leading-7 text-body">
        {description}
      </p>

      <ArrowUpRight
        className="absolute bottom-8 right-8 text-brand-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
        size={22}
      />
    </motion.div>
  );
}