import { motion, useTransform } from "framer-motion";

import heroImage from "../../assets/hero.png";

import FloatingCard from "./FloatingCard";

import OrbitIcon from "./OrbitIcon";
import GlowRing from "./GlowRing";
import ConnectionLines from "./ConnectionLines";

import {
  Cloud,
  Users,
  CalendarDays,
  Rocket,
  Database,
  Server,
  Code2,
  Cpu,
} from "lucide-react";

import useMouseParallax from "../../hooks/useMouseParallax";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

const particles = [
  { top: "10%", left: "18%" },
  { top: "20%", left: "82%" },
  { top: "35%", left: "8%" },
  { top: "58%", left: "18%" },
  { top: "72%", left: "80%" },
  { top: "90%", left: "60%" },
];

export default function HeroIllustration() {
  const mouse = useMouseParallax();
  const reduceMotion = usePrefersReducedMotion();

  // All of these are derived Motion Values, not React state — they
  // update the DOM directly on the animation frame and never trigger
  // a re-render of this component or its children.
  const glowX = useTransform(mouse.x, (v) => v * 60);
  const glowY = useTransform(mouse.y, (v) => v * 60);

  const rotateX = useTransform(mouse.y, (v) => v * -7);
  const rotateY = useTransform(mouse.x, (v) => v * 7);
  const cardTranslateX = useTransform(mouse.x, (v) => v * 16);
  const cardTranslateY = useTransform(mouse.y, (v) => v * 16);

  const cloudX = useTransform(mouse.x, (v) => v * -12);
  const cloudY = useTransform(mouse.y, (v) => v * -8);
  const usersX = useTransform(mouse.x, (v) => v * 18);
  const usersY = useTransform(mouse.y, (v) => v * -10);
  const calendarX = useTransform(mouse.x, (v) => v * -18);
  const calendarY = useTransform(mouse.y, (v) => v * 12);
  const rocketX = useTransform(mouse.x, (v) => v * 15);
  const rocketY = useTransform(mouse.y, (v) => v * 16);

  return (
    <div
      // 🟢 Instruction 10: Responsive height
      className="relative flex h-[300px] sm:h-[400px] md:h-[540px] lg:h-[680px] items-center justify-center"
      style={{
        perspective: "1600px",
      }}
    >
      {/* ===================================== */}
      {/* BACKGROUND GLOW (motion-value driven, no re-renders) */}
      {/* ===================================== */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="
          absolute
          h-[220px]
          w-[220px]
          sm:h-[320px]
          sm:w-[320px]
          md:h-[400px]
          md:w-[400px]
          lg:h-[480px]
          lg:w-[480px]
          rounded-full
          bg-brand-500/15
          blur-[80px]
          sm:blur-[110px]
          will-change-transform
        "
      />

      {/* ===================================== */}
      {/* ROTATING GRADIENT RING — hidden on the smallest phones since
          it's purely decorative and adds compositing cost relative
          to the shrunk illustration size */}
      {/* ===================================== */}
      {!reduceMotion && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            hidden
            sm:block
            sm:h-[360px]
            sm:w-[360px]
            md:h-[440px]
            md:w-[440px]
            lg:h-[520px]
            lg:w-[520px]
            rounded-full
            border
            border-brand-300/30
          "
        />
      )}

      {/* ===================================== */}
      {/* DECORATIVE BLOBS — desktop/tablet only */}
      {/* ===================================== */}
      {!reduceMotion && (
        <>
          <motion.div
            animate={{
              y: [0, -24, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="
              absolute
              hidden
              sm:block
              top-12
              right-10
              h-28
              w-28
              rounded-full
              bg-brand-400/20
              blur-2xl
              will-change-transform
            "
          />

          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
            }}
            className="
              absolute
              hidden
              sm:block
              bottom-10
              left-10
              h-24
              w-24
              rounded-full
              bg-brand-500/20
              blur-2xl
              will-change-transform
            "
          />
        </>
      )}

      {/* ===================================== */}
      {/* PARTICLES — desktop/tablet only, skipped on phones */}
      {/* ===================================== */}
      {!reduceMotion &&
        particles.map((particle, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -16, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4 + index * 0.4,
              repeat: Infinity,
            }}
            className="absolute hidden sm:block will-change-transform"
            style={particle}
          >
            <div className="h-2 w-2 rounded-full bg-brand-400/70" />
          </motion.div>
        ))}

      {/* ===================================== */}
      {/* WRAPPER: Handles the gentle infinite float */}
      {/* ===================================== */}
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-0"
      >
        {/* GlowRings: hidden on phones (pure decoration, would
            overflow a shrunk illustration), scale up from tablet */}
        <GlowRing size={480} duration={32} className="hidden sm:block" />
        <GlowRing size={540} duration={50} reverse className="hidden md:block" />

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : { rotate: [0, 1, 0, -1, 0] }
          }
          style={{
            rotateX,
            rotateY,
            x: cardTranslateX,
            y: cardTranslateY,
            transformStyle: "preserve-3d",
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="
            relative
            overflow-hidden
            glass
            rounded-[26px]
            sm:rounded-[38px]
            border
            border-white/40
            bg-white/75
            p-5
            sm:p-8
            shadow-[0_40px_100px_rgba(124,58,237,.30)]
            will-change-transform
          "
        >
          <div
            className="
            pointer-events-none
            absolute
            inset-0
            rounded-[38px]
            overflow-hidden
          "
          >
            <div
              className="
                absolute
                -left-24
                -top-24
                h-[220px]
                w-[120%]
                rotate-12
                bg-gradient-to-r
                from-white/60
                via-white/20
                to-transparent
              "
            />
          </div>

          {/* 🟢 Instruction 11: Responsive image size */}
          <img
            src={heroImage}
            alt="AWS Student Builder Club"
            className="
              w-[190px]
              sm:w-[300px]
              md:w-[390px]
              lg:w-[430px]
              max-w-full
              select-none
              drop-shadow-[0_30px_60px_rgba(0,0,0,.25)]
            "
          />
        </motion.div>
      </motion.div>

      <ConnectionLines />

      {/* ===================================== */}
      {/* FLOATING CARDS — bound to shared motion values via style,
          no per-card spring/state recompute */}
      {/* 🟢 Instruction 12: Hide all floating cards on mobile */}
      {/* ===================================== */}
      <motion.div
        style={{ x: cloudX, y: cloudY }}
        className="hidden lg:block absolute -left-10 top-6 will-change-transform"
      >
        <FloatingCard
          icon={Cloud}
          title="AWS Certified"
          subtitle="Cloud Practitioner"
          className="bg-white/60 backdrop-blur-sm border border-white/50 shadow-lg shadow-brand-500/20"
        />
      </motion.div>

      <motion.div
        style={{ x: usersX, y: usersY }}
        className="hidden lg:block absolute -right-10 top-6 will-change-transform"
      >
        <FloatingCard
          icon={Users}
          title="500+ Members"
          subtitle="Growing Community"
          className="bg-white/60 backdrop-blur-sm border border-white/50 shadow-lg shadow-brand-500/20"
          delay={0.5}
        />
      </motion.div>

      <motion.div
        style={{ x: calendarX, y: calendarY }}
        className="hidden lg:block absolute -left-10 bottom-6 will-change-transform"
      >
        <FloatingCard
          icon={CalendarDays}
          title="35+ Workshops"
          subtitle="Hands-on Learning"
          className="bg-white/60 backdrop-blur-sm border border-white/50 shadow-lg shadow-brand-500/20"
          delay={1}
        />
      </motion.div>

      <motion.div
        style={{ x: rocketX, y: rocketY }}
        className="hidden lg:block absolute -right-10 bottom-6 will-change-transform"
      >
        <FloatingCard
          icon={Rocket}
          title="60+ Projects"
          subtitle="Built by Students"
          className="bg-white/60 backdrop-blur-sm border border-white/50 shadow-lg shadow-brand-500/20"
          delay={1.5}
        />
      </motion.div>

      {/* 🟢 Instruction 13: Hide Orbit Icons on mobile */}
      {!reduceMotion && (
        <>
          <OrbitIcon
            icon={Database}
            className="hidden lg:block top-8 left-36"
          />

          <OrbitIcon
            icon={Server}
            className="hidden lg:block top-44 right-16"
            delay={1}
          />

          <OrbitIcon
            icon={Code2}
            className="hidden lg:block bottom-20 left-36"
            delay={2}
          />

          <OrbitIcon
            icon={Cpu}
            className="hidden lg:block bottom-10 right-32"
            delay={3}
          />
        </>
      )}
    </div>
  );
}