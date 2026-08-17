import { motion } from "framer-motion";

interface PremiumBadgeProps {
  text: string;
}

export default function PremiumBadge({
  text,
}: PremiumBadgeProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        scale: 1.04,
      }}
      className="
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-white/40
        bg-white/65
        px-5
        py-2.5
        backdrop-blur-xl
        shadow-lg
      "
    >
      <motion.span
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          h-2.5
          w-2.5
          rounded-full
          bg-brand-600
        "
      />

      <span className="font-medium text-body">
        {text}
      </span>
    </motion.div>
  );
}