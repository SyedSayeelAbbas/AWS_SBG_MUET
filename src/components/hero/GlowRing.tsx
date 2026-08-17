import { motion } from "framer-motion";

interface GlowRingProps {
  size: number;
  duration: number;
  reverse?: boolean;
  className?: string;
}

export default function GlowRing({
  size,
  duration,
  reverse = false,
  className = "",
}: GlowRingProps) {
  return (
    <motion.div
      animate={{
        rotate: reverse ? -360 : 360,
        scale: [1, 1.03, 1],
      }}
      transition={{
        rotate: {
          duration,
          repeat: Infinity,
          ease: "linear",
        },
        scale: {
          duration: 5,
          repeat: Infinity,
        },
      }}
      // 🟢 FIXED: Added centering classes
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-300/20 ${className}`}
      style={{
        width: size,
        height: size,
      }}
    />
  );
}