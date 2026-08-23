import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Container from "../../components/layout/Container";
import SectionWrapper from "../../components/common/SectionWrapper";
import EventsHero from "../../components/sections/EventsHero";
import EventsGrid from "../../components/sections/EGrid";

// Shared easing curve — matches AboutPage.jsx exactly
const EASE = [0.22, 1, 0.36, 1];

const trustItems = [
  "35+ events hosted",
  "500+ students reached",
  "Since 2023",
];

export default function EventsPage() {
  return (
    <main>
      {/* ===================================================== */}
      {/* PAGE HERO */}
      {/* ===================================================== */}

      <EventsHero />

      {/* ===================================================== */}
      {/* EVENTS — tenure switcher + category filter + grid */}
      {/* ===================================================== */}

      <EventsGrid />

      {/* ===================================================== */}
      {/* CTA */}
      {/* ===================================================== */}

      <SectionWrapper background="gradient">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-white/10
              bg-brand-700
              px-5
              py-10
              text-center
              shadow-[0_20px_50px_rgba(76,29,149,0.35)]
              sm:rounded-[30px]
              sm:px-8
              sm:py-12
              sm:shadow-[0_30px_80px_rgba(76,29,149,0.35)]
              md:rounded-[36px]
              md:px-14
              md:py-16
            "
          >
            {/* Glow layers — lighter tints sitting on the dark panel */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-48
                w-48
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/10
                blur-[70px]
                sm:h-72
                sm:w-72
                sm:blur-[100px]
              "
            />
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-10
                -top-10
                h-24
                w-24
                rounded-full
                bg-fuchsia-400/20
                blur-[60px]
                sm:-left-16
                sm:-top-16
                sm:h-40
                sm:w-40
                sm:blur-[90px]
              "
            />
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-10
                -right-10
                h-24
                w-24
                rounded-full
                bg-brand-400/20
                blur-[60px]
                sm:-bottom-16
                sm:-right-16
                sm:h-40
                sm:w-40
                sm:blur-[90px]
              "
            />

            {/* Subtle grid texture for depth */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.07]
                [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)]
                [background-size:24px_24px]
                sm:[background-size:32px_32px]
              "
            />

            {/* Floating particles — same pattern as AboutPage final CTA */}
            {/* Hidden on the smallest screens to avoid clutter, shown from sm up */}
            {[...Array(6)].map((_, index) => (
              <motion.span
                key={index}
                aria-hidden="true"
                animate={{
                  y: [0, -18, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  delay: index * 0.35,
                }}
                className="
                  pointer-events-none
                  absolute
                  hidden
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-white
                  sm:block
                "
                style={{
                  left: `${10 + index * 16}%`,
                  top: `${18 + (index % 3) * 25}%`,
                }}
              />
            ))}

            <div className="relative">
              {/* Icon badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
                className="
                  mx-auto
                  mb-5
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  shadow-lg
                  backdrop-blur-md
                  sm:mb-6
                  sm:h-14
                  sm:w-14
                "
              >
                <Sparkles size={22} className="sm:hidden" />
                <Sparkles size={24} className="hidden sm:block" />
              </motion.div>

              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
                className="text-xs font-semibold uppercase tracking-[0.15em] text-white sm:text-sm sm:tracking-[0.2em]"
              >
                Stay Connected
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
                className="mx-auto mt-3 max-w-2xl text-2xl font-black leading-tight text-white sm:mt-4 sm:text-3xl md:text-5xl"
              >
                Don&apos;t miss the next{" "}
                <span className="text-white">opportunity.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.28, ease: EASE }}
                className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white sm:mt-5 sm:text-base sm:leading-7"
              >
                Follow the AWS Student Builder Club to stay updated with
                upcoming workshops, hackathons and community activities.
              </motion.p>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.36, ease: EASE }}
                className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4"
              >
                <Link
                  to="/join"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-white
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-brand-700
                    shadow-xl
                    shadow-black/20
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-brand-50
                    hover:shadow-2xl
                    sm:px-7
                    sm:py-3.5
                    sm:text-base
                  "
                >
                  Join Community
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/events"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    border
                    border-white/25
                    bg-white/5
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-white/40
                    hover:bg-white/15
                    sm:px-7
                    sm:py-3.5
                    sm:text-base
                  "
                >
                  View Past Events
                </Link>
              </motion.div>

              {/* Trust row — staggered like the coreValues/aboutImpactStats grids in AboutPage */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 border-t border-white/10 pt-6 text-xs text-white sm:mt-10 sm:gap-x-8 sm:gap-y-3 sm:pt-7 sm:text-sm">
                {trustItems.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.45 + index * 0.08,
                      ease: EASE,
                    }}
                    className="flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </SectionWrapper>
    </main>
  );
}