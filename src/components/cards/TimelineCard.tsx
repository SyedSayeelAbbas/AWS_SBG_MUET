import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface TimelineCardProps {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isLast?: boolean;
}

export default function TimelineCard({
  year,
  title,
  description,
  icon: Icon,
  isLast = false,
}: TimelineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative flex gap-4 sm:gap-5 md:gap-6"
    >
      {/* Timeline */}

      <div className="flex flex-col items-center">

        <motion.div
          whileHover={{
            scale: 1.15,
            rotate: 8,
          }}
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-brand-600
            text-white
            shadow-lg
            sm:h-14
            sm:w-14
            md:h-14
            md:w-14
          "
        >
          <Icon size={22} className="sm:hidden" />
          <Icon size={24} className="hidden sm:block" />
        </motion.div>

        {!isLast && (
          <div className="mt-2 w-[2px] flex-1 min-h-[48px] bg-brand-200 sm:min-h-[64px] md:min-h-[80px]" />
        )}

      </div>

      {/* Content */}

      <div className="pb-8 sm:pb-10 md:pb-11">

        <span className="text-xs font-semibold text-brand-600 sm:text-sm">
          {year}
        </span>

        <h3 className="mt-1.5 text-lg font-bold text-heading sm:mt-2 sm:text-xl md:text-xl">
          {title}
        </h3>

        <p className="mt-2 max-w-xl text-sm leading-6 text-muted sm:mt-3 sm:text-base sm:leading-7">
          {description}
        </p>

      </div>

    </motion.div>
  );
}