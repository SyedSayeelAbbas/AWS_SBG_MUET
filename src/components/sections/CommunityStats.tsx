import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Container from "../layout/Container";
import { communityStats } from "../../constants/home.constants";

export default function CommunityStats() {
  const featuredStat = communityStats[0];
  const otherStats = communityStats.slice(1);

  return (
    <section className="section relative overflow-hidden bg-white">
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/5 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[150px]" />

      <div className="pointer-events-none absolute -right-32 top-0 -z-10 hidden h-[350px] w-[350px] rounded-full bg-brand-500/5 blur-[130px] sm:block" />

      {/* Subtle dot pattern */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-[0.035]
          [background-image:radial-gradient(#6B46C1_1px,transparent_1px)]
          [background-size:24px_24px]
        "
      />

      <Container>
        {/* =====================================================
            HEADING
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-10 max-w-3xl px-2 text-center sm:mb-16 sm:px-0"
        >
          <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-700 sm:px-5 sm:py-2 sm:text-sm">
            By the Numbers
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-heading sm:mt-6 sm:text-5xl">
            A Community Built to
            <span className="gradient-text"> Grow</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-body sm:mt-6 sm:text-lg sm:leading-8">
            From cloud learning to real-world projects, our community
            continues to grow, build and achieve together.
          </p>
        </motion.div>

        {/* =====================================================
            STATS BENTO
        ===================================================== */}

        <div className="mx-auto grid max-w-6xl gap-5 sm:gap-6 lg:grid-cols-2">
          {/* =================================================
              FEATURED STAT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              relative
              min-h-[260px]
              overflow-hidden
              rounded-[1.5rem]
              bg-gradient-to-br
              from-brand-700
              via-brand-600
              to-brand-500
              p-6
              pb-14
              text-white
              shadow-[0_15px_45px_rgba(91,55,170,0.16)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-[0_30px_80px_rgba(91,55,170,0.28)]
              sm:min-h-[320px]
              sm:rounded-[2rem]
              sm:p-10
              sm:pb-10
              sm:shadow-[0_20px_60px_rgba(91,55,170,0.18)]
            "
          >
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-white/10 sm:-right-20 sm:-top-20 sm:h-56 sm:w-56" />

            <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/5 sm:-right-10 sm:-top-10 sm:h-36 sm:w-36" />

            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/5 blur-2xl" />

            {/* Icon */}
            <div
              className="
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                border
                border-white/20
                bg-white/10
                backdrop-blur-md
                sm:h-12
                sm:w-12
              "
            >
              <featuredStat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>

            {/* Content */}
            <div className="relative mt-7 sm:mt-10">
              <div className="flex items-end gap-1.5 sm:gap-2">
                <span className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  {featuredStat.value}
                </span>

                <span className="mb-1 text-2xl font-bold sm:mb-2 sm:text-4xl">
                  {featuredStat.suffix}
                </span>
              </div>

              <h3 className="mt-3 text-xl font-semibold sm:mt-4 sm:text-2xl">
                {featuredStat.title}
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                {featuredStat.description}
              </p>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-2 text-xs font-medium text-white/70 sm:bottom-8 sm:left-auto sm:right-8 sm:text-sm">
              Growing together
              <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </motion.div>

          {/* =================================================
              OTHER Four STATS
          ================================================= */}

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {otherStats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: 0.12 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative
                  min-h-[130px]
                  overflow-hidden
                  rounded-[1.25rem]
                  border
                  border-line
                  bg-white
                  p-4
                  shadow-[0_8px_25px_rgba(30,20,60,0.04)]
                  transition-all
                  duration-400
                  hover:-translate-y-2
                  hover:border-brand-200
                  hover:shadow-[0_20px_50px_rgba(91,55,170,0.12)]
                  sm:min-h-[150px]
                  sm:rounded-[1.75rem]
                  sm:p-7
                  sm:shadow-[0_10px_35px_rgba(30,20,60,0.05)]
                "
              >
                {/* Small glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-500/5 blur-2xl transition-all duration-500 group-hover:bg-brand-500/10" />

                {/* Icon */}
                <div
                  className="
                    relative
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-brand-50
                    text-brand-600
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-brand-100
                    sm:h-10
                    sm:w-10
                    sm:rounded-xl
                  "
                >
                  <stat.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>

                {/* Number */}
                <div className="relative mt-4 flex items-end gap-1 sm:mt-6">
                  <span className="text-2xl font-bold tracking-tight text-heading sm:text-4xl">
                    {stat.value}
                  </span>

                  {stat.suffix && (
                    <span className="mb-0.5 text-lg font-bold text-brand-600 sm:mb-1 sm:text-2xl">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="relative mt-1.5 text-sm font-semibold text-heading sm:mt-2 sm:text-base">
                  {stat.title}
                </h3>

                {/* Description */}
                <p className="relative mt-1 text-xs leading-5 text-body sm:text-sm sm:leading-6">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM MICRO MESSAGE
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-2.5 px-4 text-center text-xs text-body sm:mt-10 sm:gap-3 sm:text-sm"
        >
          <span className="h-2 w-2 shrink-0 rounded-full bg-brand-500" />

          <span>
            Learning together. Building together. Growing together.
          </span>
        </motion.div>
      </Container>
    </section>
  );
}