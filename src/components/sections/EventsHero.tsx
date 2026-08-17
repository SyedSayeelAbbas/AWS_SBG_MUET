import { motion } from "framer-motion";
import { CalendarDays, Users, LayoutGrid, ArrowDown } from "lucide-react";

import Container from "../layout/Container";
import { eventsHeroStats } from "../../constants/events.constants";

/* Icons + per-stat accent tints */
const statMeta = [
  { icon: CalendarDays, tint: "from-violet-100 to-violet-50", iconColor: "text-violet-700" },
  { icon: Users, tint: "from-blue-100 to-violet-50", iconColor: "text-blue-700" },
  { icon: LayoutGrid, tint: "from-fuchsia-100 to-pink-50", iconColor: "text-fuchsia-700" },
];

export default function EventsHero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-20 lg:pb-24">
      {/* Base Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-50 via-white to-white" />

      {/* Soft radial glow behind the heading */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-24
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-violet-300/20
          blur-[120px]
        "
      />
      <div
        className="
          pointer-events-none
          absolute
          right-[15%]
          top-16
          h-32
          w-32
          rounded-full
          bg-fuchsia-300/20
          blur-3xl
        "
      />

      {/* Faint floating particles */}
      {[
        { top: "20%", left: "8%", size: 6, delay: 0 },
        { top: "30%", left: "90%", size: 4, delay: 1.2 },
        { top: "64%", left: "5%", size: 5, delay: 0.6 },
        { top: "72%", left: "93%", size: 3, delay: 1.8 },
        { top: "14%", left: "48%", size: 3, delay: 2.4 },
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

      {/* Floating event-badge chip */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="pointer-events-none absolute right-[6%] top-[16%] hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-violet-200/50 bg-white/40 opacity-[0.35] backdrop-blur-sm"
        >
          <CalendarDays size={34} className="text-brand-600" />
          <span className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border border-violet-200/50 bg-white/50">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          </span>
        </motion.div>
      </motion.div>

      {/* Faint calendar-grid outlines — event-specific visual, no glass */}
      <div className="pointer-events-none absolute inset-0 hidden opacity-[0.35] md:block">
        {[
          { top: "14%", left: "8%", label: "01", rotate: -6 },
          { top: "10%", left: "82%", label: "15", rotate: 5 },
          { top: "68%", left: "10%", label: "22", rotate: 4 },
          { top: "72%", left: "84%", label: "27", rotate: -5 },
        ].map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
            style={{ top: card.top, left: card.left, rotate: `${card.rotate}deg` }}
            className="absolute flex h-14 w-14 flex-col items-center justify-center rounded-xl border border-violet-200/60 text-violet-300"
          >
            <span className="text-[10px] font-bold tracking-wide">{card.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Noise */}
      <div className="premium-noise" />

      <Container className="max-w-7xl">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          {/* Badge — purple dot instead of green pulse */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-4 py-1.5 backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
            </span>
            <CalendarDays size={14} className="text-brand-700" />
            <span className="text-xs font-semibold text-heading">
              Events & Workshops
            </span>
          </motion.div>

          {/* Heading — tighter, more dominant */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.02] tracking-[-0.04em] text-gray-900"
          >
            Every Event We've{" "}
            <span className="gradient-text gradient-glow">Built Together</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-5 max-w-xl text-sm sm:text-base leading-6 sm:leading-7 text-gray-600"
          >
            From hands-on workshops to flagship hackathons, explore
            everything AWS Student Builder Club MUET has hosted.
          </motion.p>

          {/* Stats — light, floating metrics, per-stat accent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4 sm:gap-5"
          >
            {eventsHeroStats.map((stat, i) => {
              const meta = statMeta[i] ?? statMeta[0];
              const Icon = meta.icon;

              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 24, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className="
                    rounded-2xl
                    border
                    border-white/70
                    bg-white/60
                    p-4
                    shadow-[0_12px_40px_rgba(124,58,237,0.08)]
                    backdrop-blur-xl
                    transition-shadow
                    duration-300
                    hover:shadow-[0_18px_50px_rgba(124,58,237,0.14)]
                    sm:p-5
                  "
                >
                  <span
                    className={`
                      mx-auto mb-2.5 flex h-9 w-9 items-center justify-center
                      rounded-xl bg-gradient-to-br ${meta.tint} ${meta.iconColor}
                    `}
                  >
                    <Icon size={16} />
                  </span>

                  <h3 className="text-xl font-bold gradient-text sm:text-2xl">
                    {stat.value}
                  </h3>

                  <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA — larger, stronger */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-11"
          >
            <a
              href="#events-grid"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-brand-700
                px-7
                py-3
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-brand-700/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-brand-800
                hover:shadow-xl
              "
            >
              Browse Events
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400"
          >
            <span>Scroll to explore</span>
            <ArrowDown size={12} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}