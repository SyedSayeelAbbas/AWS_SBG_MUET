import { motion } from "framer-motion";
import { Cloud, Users, Rocket, BookOpen, Link2 } from "lucide-react";

import GlowRing from "../hero/GlowRing";
import ConnectionLines from "../hero/ConnectionLines";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

const tags = [
  { label: "AWS", icon: Cloud },
  { label: "CLOUD", icon: Cloud },
  { label: "BUILD", icon: Rocket },
  { label: "LEARN", icon: BookOpen },
  { label: "CONNECT", icon: Users },
];

export default function AboutHeroVisual() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <div
      className="
        relative
        mx-auto
        flex
        h-[300px]
        w-full
        max-w-[420px]
        items-center
        justify-center
        sm:h-[380px]
        sm:max-w-[460px]
        lg:h-[480px]
        lg:max-w-[520px]
      "
    >
      {/* =====================================================
          AMBIENT GLOW
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          h-[220px]
          w-[220px]
          rounded-full
          bg-brand-500/12
          blur-[80px]
          sm:h-[300px]
          sm:w-[300px]
          sm:blur-[110px]
        "
      />

      {/* =====================================================
          DECORATIVE RINGS
      ===================================================== */}

      <GlowRing
        size={340}
        duration={30}
        className="hidden sm:block"
      />

      <GlowRing
        size={400}
        duration={46}
        reverse
        className="hidden md:block"
      />

      {/* =====================================================
          CONNECTION LINES
      ===================================================== */}

      <ConnectionLines />

      {/* =====================================================
          FLOATING COMMUNITY CARD
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.92,
          y: 15,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10"
      >
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -14, 0, 10, 0],
                  rotate: [0, 0.6, 0, -0.4, 0],
                }
          }
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
          whileHover={
            reduceMotion
              ? undefined
              : {
                  y: -18,
                  scale: 1.025,
                  rotate: 0,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }
          }
          className="
            group
            w-full
            max-w-[280px]
            rounded-[28px]
            border
            border-white/60
            bg-white/75
            p-6
            shadow-[0_30px_70px_rgba(124,58,237,.18)]
            backdrop-blur-2xl
            transition-shadow
            duration-500
            hover:shadow-[0_40px_90px_rgba(124,58,237,.28)]
            sm:max-w-[300px]
            sm:p-7
          "
        >
          {/* Card inner glow */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[28px]
              bg-gradient-to-br
              from-white/50
              via-transparent
              to-brand-100/20
              opacity-70
            "
          />

          {/* =================================================
              CARD HEADER
          ================================================= */}

          <div className="relative mb-5 flex items-center gap-3">
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                from-brand-600
                to-brand-500
                text-white
                shadow-[0_8px_20px_rgba(124,58,237,.25)]
                transition-transform
                duration-300
                group-hover:scale-105
              "
            >
              <Link2 size={17} />
            </div>

            <div>
              <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-brand-600">
                Community Focus
              </span>

              <span className="mt-0.5 block text-xs text-body">
                Learn. Build. Connect.
              </span>
            </div>
          </div>

          {/* =================================================
              TAGS
          ================================================= */}

          <div className="relative flex flex-wrap gap-2">
            {tags.map((tag, index) => {
              const Icon = tag.icon;

              return (
                <motion.span
                  key={tag.label}
                  initial={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          y: 8,
                        }
                  }
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                        }
                  }
                  transition={{
                    duration: 0.4,
                    delay: 0.25 + index * 0.06,
                  }}
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-brand-200/70
                    bg-brand-50/80
                    px-3
                    py-1.5
                    text-xs
                    font-bold
                    tracking-wide
                    text-brand-700
                    transition-all
                    duration-300
                    hover:border-brand-300
                    hover:bg-brand-100
                    hover:shadow-sm
                  "
                >
                  <Icon
                    size={12}
                    className="text-brand-600"
                  />

                  {tag.label}
                </motion.span>
              );
            })}
          </div>

          {/* =================================================
              BOTTOM ACCENT
          ================================================= */}

          <div
            aria-hidden="true"
            className="
              relative
              mt-6
              h-px
              w-full
              bg-gradient-to-r
              from-brand-200
              via-brand-400
              to-transparent
              opacity-60
            "
          />
        </motion.div>
      </motion.div>

      {/* =====================================================
          FLOATING NODE ACCENTS
      ===================================================== */}

      {!reduceMotion && (
        <>
          <motion.span
            animate={{
              y: [0, -16, 0],
              x: [0, 3, 0],
              opacity: [0.35, 1, 0.35],
              scale: [0.85, 1.15, 0.85],
            }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-4
              top-6
              hidden
              h-2.5
              w-2.5
              rounded-full
              bg-brand-500
              shadow-[0_0_15px_rgba(140,82,255,.7)]
              sm:block
            "
          />

          <motion.span
            animate={{
              y: [0, 14, 0],
              x: [0, -3, 0],
              opacity: [0.35, 1, 0.35],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="
              absolute
              bottom-8
              right-6
              hidden
              h-2
              w-2
              rounded-full
              bg-brand-400
              shadow-[0_0_14px_rgba(140,82,255,.6)]
              sm:block
            "
          />
        </>
      )}
    </div>
  );
}