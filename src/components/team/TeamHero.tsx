import { motion } from "framer-motion";
import { Users2, Layers, Sparkle, ArrowDown } from "lucide-react";

import Container from "../layout/Container";
import { fullTeam } from "../../constants/team";

const tenureCount = new Set(fullTeam.map((m) => m.tenure)).size;

const stats = [
  { icon: Users2, value: `${fullTeam.length}+`, label: "Team Members" },
  { icon: Layers, value: `${tenureCount}`, label: "Tenures" },
  { icon: Sparkle, value: "2023", label: "Founded" },
];

const headlineLead = ["The", "People", "Behind"];

const headlineContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

const headlineWord = {
  hidden: {
    opacity: 0,
    y: 24,
    rotateX: -40,
  },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const hexClip = {
  clipPath:
    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
};

export default function TeamHero() {
  return (
    <section className="relative overflow-hidden pt-26 sm:pt-24 lg:pt-28 pb-10 lg:pb-12">
      {/* =========================================================
          BASE BACKGROUND — MATCHES EVENTS HERO
      ========================================================= */}

      <div className="absolute inset-0 bg-gradient-to-b from-violet-50 via-white to-white" />

      {/* Main purple radial glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-24
          h-[320px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-violet-300/20
          blur-[90px]
          sm:h-[400px]
          sm:w-[560px]
          sm:blur-[110px]
          lg:h-[500px]
          lg:w-[700px]
          lg:blur-[120px]
        "
      />

      {/* Secondary pink/purple glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[15%]
          top-16
          h-20
          w-20
          rounded-full
          bg-fuchsia-300/20
          blur-2xl
          sm:h-32
          sm:w-32
          sm:blur-3xl
        "
      />

      {/* =========================================================
          FAINT FLOATING PARTICLES
      ========================================================= */}

      {[
        { top: "16%", left: "6%", size: 6, delay: 0 },
        { top: "26%", left: "92%", size: 4, delay: 1.2 },
        { top: "58%", left: "4%", size: 5, delay: 0.6 },
        { top: "76%", left: "90%", size: 3, delay: 1.8 },
        { top: "10%", left: "46%", size: 3, delay: 2.4 },
      ].map((p, i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, -14, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
          }}
          className="
            pointer-events-none
            absolute
            hidden
            rounded-full
            bg-brand-400
            sm:block
          "
        />
      ))}

      {/* =========================================================
          FLOATING TEAM BADGE
      ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          delay: 0.2,
        }}
        className="
          pointer-events-none
          absolute
          right-[6%]
          top-[14%]
          hidden
          lg:block
        "
      >
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-3xl
            border
            border-violet-200/50
            bg-white/40
            opacity-[0.35]
            backdrop-blur-sm
          "
        >
          <Users2
            size={34}
            className="text-brand-600"
          />

          <span
            className="
              absolute
              -bottom-2
              -right-2
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              border
              border-violet-200/50
              bg-white/50
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-brand-500
              "
            />
          </span>
        </motion.div>
      </motion.div>

      {/* =========================================================
          FLOATING ACCENT SHAPES
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          hidden
          overflow-hidden
          sm:block
        "
      >
        {/* Left hexagon */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={hexClip}
          className="
            absolute
            left-[8%]
            top-24
            h-16
            w-16
            border
            border-violet-300/40
            bg-white/30
            backdrop-blur-md
            sm:h-20
            sm:w-20
          "
        />

        {/* Right hexagon */}
        <motion.div
          animate={{
            y: [0, 16, 0],
            rotate: [0, -6, 0],
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          style={hexClip}
          className="
            absolute
            right-[10%]
            top-40
            h-12
            w-12
            border
            border-brand-300/40
            bg-white/30
            backdrop-blur-md
            sm:h-14
            sm:w-14
          "
        />

        {/* Floating circle */}
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="
            absolute
            bottom-10
            left-[18%]
            h-10
            w-10
            rounded-full
            border
            border-violet-300/40
            bg-white/20
            backdrop-blur-md
          "
        />
      </div>

      {/* =========================================================
          SUBTLE NOISE — SAME AS EVENTS HERO
      ========================================================= */}

      <div className="premium-noise" />

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <Container className="relative z-10 text-center">
        {/* Badge */}
        <motion.span
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            inline-flex
            max-w-[92vw]
            items-center
            gap-1.5
            rounded-full
            border
            border-violet-200
            bg-white/70
            px-3.5
            py-1.5
            text-xs
            font-semibold
            text-brand-700
            backdrop-blur-xl
            sm:gap-2
            sm:px-5
            sm:py-2
            sm:text-sm
          "
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                animate-ping
                rounded-full
                bg-violet-500
                opacity-75
              "
            />

            <span
              className="
                relative
                inline-flex
                h-2
                w-2
                rounded-full
                bg-violet-600
              "
            />
          </span>

          Meet The Builders
        </motion.span>

        {/* Heading */}
        <motion.h1
          variants={headlineContainer}
          initial="hidden"
          animate="show"
          style={{
            perspective: 800,
          }}
          className="
            mx-auto
            mt-6
            max-w-3xl
            px-2
            text-[2.1rem]
            font-bold
            leading-[1.15]
            sm:mt-8
            sm:px-0
            sm:text-5xl
            sm:leading-tight
            md:text-6xl
          "
        >
          {headlineLead.map((w) => (
            <motion.span
              key={w}
              variants={headlineWord}
              className="
                mr-2
                inline-block
                sm:mr-3
              "
            >
              {w}
            </motion.span>
          ))}

          <motion.span
            variants={headlineWord}
            className="
              gradient-text
              gradient-glow
              inline-block
            "
          >
            AWS Student Builder Club
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.55,
          }}
          className="
            mx-auto
            mt-5
            max-w-2xl
            px-3
            text-sm
            leading-6
            text-muted
            sm:mt-6
            sm:px-0
            sm:text-lg
            sm:leading-normal
          "
        >
          A student-led team from MUET Jamshoro, building workshops,
          hackathons and cloud-first learning experiences for the community.
        </motion.p>

        {/* =========================================================
            STATS
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.65,
          }}
          className="
            mx-auto
            mt-10
            grid
            max-w-2xl
            grid-cols-3
            gap-2.5
            sm:mt-14
            sm:gap-5
          "
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 24,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="
                  glass
                  rounded-xl
                  border
                  border-white/40
                  p-2.5
                  transition-shadow
                  duration-300
                  hover:shadow-xl
                  sm:rounded-2xl
                  sm:p-5
                "
              >
                {/* Mobile icon */}
                <Icon
                  size={16}
                  className="
                    mx-auto
                    mb-1.5
                    text-brand-700
                    sm:hidden
                  "
                />

                {/* Desktop icon */}
                <Icon
                  size={22}
                  className="
                    mx-auto
                    mb-3
                    hidden
                    text-brand-700
                    sm:block
                  "
                />

                <h3
                  className="
                    text-base
                    font-bold
                    gradient-text
                    sm:text-2xl
                  "
                >
                  {stat.value}
                </h3>

                <p
                  className="
                    mt-0.5
                    text-[10px]
                    leading-tight
                    text-slate-600
                    sm:mt-1
                    sm:text-sm
                  "
                >
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* =========================================================
            SCROLL CUE
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
            duration: 0.6,
          }}
          className="
            mt-10
            flex
            justify-center
            sm:mt-16
          "
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex
              flex-col
              items-center
              gap-1
              text-xs
              font-medium
              text-slate-400
            "
          >
            <span>Browse tenures</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}