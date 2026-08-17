import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface OrbitIconProps {
  icon: LucideIcon;
  className?: string;
  delay?: number;
}

export default function OrbitIcon({
  icon: Icon,
  className = "",
  delay = 0,
}: OrbitIconProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 8, 0, -8, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      className={`
        absolute
        glass
        rounded-2xl
        border
        border-white/40
        bg-white/70
        p-3
        shadow-lg
        ${className}
      `}
    >
      <Icon
        size={26}
        className="text-brand-600"
      />
    </motion.div>
  );
}