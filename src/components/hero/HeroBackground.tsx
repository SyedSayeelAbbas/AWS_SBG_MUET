import { motion } from "framer-motion";

import usePrefersReducedMotion from "../../hooks/useMouseParallax";

export default function HeroBackground() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <>
      {/* White Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#FAF7FF]" />

      {/* Static ambient beams — no animation, cheap to paint once */}
      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-64
          bg-gradient-to-r
          from-brand-300/10
          to-transparent
          blur-3xl
        "
      />
      <div
        className="
          absolute
          right-0
          top-0
          h-full
          w-64
          bg-gradient-to-l
          from-brand-500/10
          to-transparent
          blur-3xl
        "
      />

      {/* 🟢 Purple Glow — reduced blur radius (150px → 110px) and, on
          reduced-motion, held static instead of animating forever */}
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 60, 0],
                y: [0, -30, 0],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-52
          top-0
          h-[300px]
          md:h-[420px]
          lg:h-[520px]
          w-[300px]
          md:w-[420px]
          lg:w-[520px]
          rounded-full
          bg-brand-500/20
          blur-[110px]
          will-change-transform
        "
      />

      {/* 🟢 Secondary Glow — reduced blur radius (160px → 120px) */}
      {!reduceMotion && (
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-180px]
            top-[100px]
            h-[280px]
            md:h-[360px]
            lg:h-[440px]
            w-[280px]
            md:w-[360px]
            lg:w-[440px]
            rounded-full
            bg-brand-500/15
            blur-[120px]
            will-change-transform
          "
        />
      )}

      {/* Mesh Gradient — much slower rotation, smaller blur so it's
          cheaper to composite every frame (was blur-[180px]) */}
      {!reduceMotion && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 90,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[-25%] opacity-[0.12] will-change-transform"
        >
          <div
            className="
              h-full
              w-full
              rounded-full
              bg-gradient-to-r
              from-brand-300
              via-brand-500
              to-brand-600
              blur-[140px]
            "
          />
        </motion.div>
      )}
    </>
  );
}