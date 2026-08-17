import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface FloatingCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  className?: string;
  delay?: number;
}

export default function FloatingCard({
  icon: Icon,
  title,
  subtitle,
  className = "",
  delay = 0,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        delay,
      }}
      className={`
        absolute
        glass
        rounded-2xl
        border
        border-white/40
        shadow-xl
        backdrop-blur-xl
        p-4
        ${className}
      `}
    >
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-brand-100 p-3">
          <Icon
            size={22}
            className="text-brand-600"
          />
        </div>

        <div>
          <h4 className="text-sm font-semibold text-heading">
            {title}
          </h4>

          <p className="text-xs text-muted">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}