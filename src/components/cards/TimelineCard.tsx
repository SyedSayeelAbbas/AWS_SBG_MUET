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
      className="relative flex gap-6"
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
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-brand-600
            text-white
            shadow-lg
          "
        >
          <Icon size={28} />
        </motion.div>

        {!isLast && (
          <div className="mt-2 h-28 w-[2px] bg-brand-200" />
        )}

      </div>

      {/* Content */}

      <div className="pb-12">

        <span className="text-sm font-semibold text-brand-600">
          {year}
        </span>

        <h3 className="mt-2 text-2xl font-bold text-heading">
          {title}
        </h3>

        <p className="mt-3 max-w-xl leading-7 text-muted">
          {description}
        </p>

      </div>

    </motion.div>
  );
}