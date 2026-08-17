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
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const headlineWord = {
  hidden: { opacity: 0, y: 24, rotateX: -40 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const hexClip = {
  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
};

export default function TeamHero() {
  return (
    <section className="relative overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-10 lg:pb-12">
      {/* Faint floating particles */}
      {[
        { top: "16%", left: "6%", size: 6, delay: 0 },
        { top: "26%", left: "92%", size: 4, delay: 1.2 },
        { top: "58%", left: "4%", size: 5, delay: 0.6 },
        { top: "76%", left: "90%", size: 3, delay: 1.8 },
        { top: "10%", left: "46%", size: 3, delay: 2.4 },
      ].map((p, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -14, 0], opacity: [0.15, 0.4, 0.15] }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
          style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
          className="pointer-events-none absolute rounded-full bg-brand-400"
        />
      ))}

      {/* Floating team-badge chip */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="pointer-events-none absolute right-[6%] top-[14%] hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-violet-200/50 bg-white/40 opacity-[0.35] backdrop-blur-sm"
        >
          <Users2 size={34} className="text-brand-600" />
          <span className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border border-violet-200/50 bg-white/50">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          </span>
        </motion.div>
      </motion.div>

      {/* floating accent shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          style={hexClip}
          className="absolute left-[8%] top-24 h-16 w-16 border border-violet-300/40 bg-white/30 backdrop-blur-md sm:h-20 sm:w-20"
        />
        <motion.div
          animate={{ y: [0, 16, 0], rotate: [0, -6, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          style={hexClip}
          className="absolute right-[10%] top-40 h-12 w-12 border border-brand-300/40 bg-white/30 backdrop-blur-md sm:h-14 sm:w-14"
        />
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 left-[18%] h-10 w-10 rounded-full border border-violet-300/40 bg-white/20 backdrop-blur-md"
        />
      </div>

      <Container className="relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            inline-flex items-center gap-2 rounded-full
            border border-violet-200 bg-white/70 px-5 py-2
            text-sm font-semibold text-brand-700 backdrop-blur-xl
          "
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-600" />
          </span>
          Meet The Builders
        </motion.span>

        <motion.h1
          variants={headlineContainer}
          initial="hidden"
          animate="show"
          style={{ perspective: 800 }}
          className="mx-auto mt-8 max-w-3xl text-5xl font-bold leading-tight md:text-6xl"
        >
          {headlineLead.map((w) => (
            <motion.span key={w} variants={headlineWord} className="mr-3 inline-block">
              {w}
            </motion.span>
          ))}
          <motion.span
            variants={headlineWord}
            className="gradient-text gradient-glow inline-block"
          >
            AWS Student Builder Club
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted"
        >
          A student-led team from MUET Jamshoro, building workshops,
          hackathons and cloud-first learning experiences for the community.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-5"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="
                  glass rounded-2xl border border-white/40 p-5
                  transition-shadow duration-300
                  hover:shadow-xl
                "
              >
                <Icon size={22} className="mx-auto mb-3 text-brand-700" />

                <h3 className="text-2xl font-bold gradient-text">{stat.value}</h3>

                <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-xs font-medium text-slate-400"
          >
            <span>Browse tenures</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}