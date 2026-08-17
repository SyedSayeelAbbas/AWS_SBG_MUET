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

      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/5 blur-[150px]" />

      <div className="pointer-events-none absolute -right-32 top-0 -z-10 h-[350px] w-[350px] rounded-full bg-brand-500/5 blur-[130px]" />

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
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <span className="inline-flex items-center rounded-full bg-brand-100 px-5 py-2 text-sm font-semibold text-brand-700">
            By the Numbers
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-heading sm:text-5xl">
            A Community Built to
            <span className="gradient-text"> Grow</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-body">
            From cloud learning to real-world projects, our community
            continues to grow, build and achieve together.
          </p>
        </motion.div>

        {/* =====================================================
            STATS BENTO
        ===================================================== */}

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
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
              min-h-[320px]
              overflow-hidden
              rounded-[2rem]
              bg-gradient-to-br
              from-brand-700
              via-brand-600
              to-brand-500
              p-8
              text-white
              shadow-[0_20px_60px_rgba(91,55,170,0.18)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-[0_30px_80px_rgba(91,55,170,0.28)]
              sm:p-10
            "
          >
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/5" />

            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/5 blur-2xl" />

            {/* Icon */}
            <div
              className="
                relative
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-white/20
                bg-white/10
                backdrop-blur-md
              "
            >
              <featuredStat.icon className="h-6 w-6" />
            </div>

            {/* Content */}
            <div className="relative mt-10">
              <div className="flex items-end gap-2">
                <span className="text-6xl font-bold tracking-tight sm:text-7xl">
                  {featuredStat.value}
                </span>

                <span className="mb-2 text-4xl font-bold">
                  {featuredStat.suffix}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold">
                {featuredStat.title}
              </h3>

              <p className="mt-2 max-w-sm text-base leading-7 text-white/75">
                {featuredStat.description}
              </p>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-8 right-8 flex items-center gap-2 text-sm font-medium text-white/70">
              Growing together
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </motion.div>

          {/* =================================================
              OTHER Four STATS
          ================================================= */}

          <div className="grid gap-6 sm:grid-cols-2">
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
                  min-h-[150px]
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-line
                  bg-white
                  p-7
                  shadow-[0_10px_35px_rgba(30,20,60,0.05)]
                  transition-all
                  duration-400
                  hover:-translate-y-2
                  hover:border-brand-200
                  hover:shadow-[0_20px_50px_rgba(91,55,170,0.12)]
                "
              >
                {/* Small glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-500/5 blur-2xl transition-all duration-500 group-hover:bg-brand-500/10" />

                {/* Icon */}
                <div
                  className="
                    relative
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-brand-50
                    text-brand-600
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-brand-100
                  "
                >
                  <stat.icon className="h-5 w-5" />
                </div>

                {/* Number */}
                <div className="relative mt-6 flex items-end gap-1">
                  <span className="text-4xl font-bold tracking-tight text-heading">
                    {stat.value}
                  </span>

                  {stat.suffix && (
                    <span className="mb-1 text-2xl font-bold text-brand-600">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="relative mt-2 text-base font-semibold text-heading">
                  {stat.title}
                </h3>

                {/* Description */}
                <p className="relative mt-1 text-sm leading-6 text-body">
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
          className="mt-10 flex items-center justify-center gap-3 text-sm text-body"
        >
          <span className="h-2 w-2 rounded-full bg-brand-500" />

          <span>
            Learning together. Building together. Growing together.
          </span>
        </motion.div>
      </Container>
    </section>
  );
}