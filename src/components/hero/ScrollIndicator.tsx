import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 2.2,
        duration: 1,
      }}
      // 🟢 Instruction 18: Hidden on phones, flex on desktop
      className="
        hidden
        lg:flex
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        flex
        flex-col
        items-center
        gap-3
        z-20
      "
    >
      {/* Mouse */}
      <motion.div
        whileHover={{
          scale: 1.08,
        }}
        className="
          relative
          flex
          h-14
          w-8
          justify-center
          rounded-full
          border-2
          border-line
          bg-white/60
          backdrop-blur-xl
          shadow-lg
        "
      >
        {/* Animated Dot */}
        <motion.span
          animate={{
            y: [4, 20, 4],
            opacity: [1, 0.3, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-2
            h-2.5
            w-2.5
            rounded-full
            bg-gradient-to-b
            from-brand-500
            to-brand-500
          "
        />
      </motion.div>

      {/* Text */}
      <motion.p
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          text-xs
          font-medium
          tracking-[0.25em]
          uppercase
          text-body
        "
      >
        Scroll to Explore
      </motion.p>

      {/* Arrow */}
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
      >
        <ChevronDown
          size={18}
          className="text-brand-500"
        />
      </motion.div>
    </motion.div>
  );
}