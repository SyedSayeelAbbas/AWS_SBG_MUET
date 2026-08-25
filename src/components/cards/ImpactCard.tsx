import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  index?: number;
}

export default function ImpactCard({
  title,
  value,
  description,
  icon: Icon,
  index = 0,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: index * 0.1 },
      }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-line
        bg-white
        p-5
        shadow-md
        transition-all
        duration-300
        hover:border-brand-200
        hover:shadow-[0_25px_60px_rgba(107,70,193,.16)]
        sm:rounded-3xl
        sm:p-8
      "
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div
          className="
            mb-4
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-[linear-gradient(135deg,#7C3AED,#8C52FF)]
            text-white
            shadow-md
            transition-transform
            duration-300
            group-hover:scale-110
            group-hover:rotate-6
            sm:mb-6
            sm:h-14
            sm:w-14
            sm:rounded-2xl
          "
        >
          <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
        </div>

        <h3 className="gradient-text mb-1.5 text-3xl font-bold sm:mb-2 sm:text-5xl">
          {value}
        </h3>

        <h4 className="mb-2 text-base font-semibold text-heading sm:mb-3 sm:text-xl">
          {title}
        </h4>

        <p className="text-sm leading-6 text-body sm:text-base">{description}</p>
      </div>
    </motion.div>
  );
}