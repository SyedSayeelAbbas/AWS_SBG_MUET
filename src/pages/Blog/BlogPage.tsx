import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Cloud,
  Lightbulb,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../../components/layout/Container";
import SectionWrapper from "../../components/common/SectionWrapper";
import { Button } from "../../components/ui/Button";

import {
  blogCategories,
  blogComingSoon,
} from "../../constants/blog";

/* Icon + accent tint per category — gives each card its own identity */
const categoryStyles = {
  aws: {
    icon: Cloud,
    accent: "from-violet-100 to-violet-50",
    iconColor: "text-violet-700",
    line: "from-violet-500",
    ghost: "text-violet-100",
  },
  "student-builders": {
    icon: Lightbulb,
    accent: "from-blue-100 to-violet-50",
    iconColor: "text-blue-700",
    line: "from-blue-500",
    ghost: "text-blue-100",
  },
  community: {
    icon: Users,
    accent: "from-fuchsia-100 to-pink-50",
    iconColor: "text-fuchsia-700",
    line: "from-fuchsia-500",
    ghost: "text-fuchsia-100",
  },
};

export default function BlogPage() {
  return (
    <main>
      {/* =====================================================
          HERO — editorial, reduced vertical space
      ===================================================== */}

      <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-14 lg:pb-16">
        {/* Base Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50 via-white to-white" />

        {/* Faint floating particles */}
        {[
          { top: "16%", left: "8%", size: 6, delay: 0 },
          { top: "24%", left: "90%", size: 4, delay: 1.2 },
          { top: "58%", left: "5%", size: 5, delay: 0.6 },
          { top: "68%", left: "93%", size: 3, delay: 1.8 },
          { top: "10%", left: "48%", size: 3, delay: 2.4 },
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

        {/* Floating book/reading chip */}
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
            <BookOpen size={34} className="text-brand-600" />
            <span className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border border-violet-200/50 bg-white/50">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            </span>
          </motion.div>
        </motion.div>

        {/* Noise */}
        <div className="premium-noise" />

        <Container className="max-w-7xl">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-4 py-1.5 backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <BookOpen size={14} className="text-brand-700" />
              <span className="text-xs font-semibold text-heading">
                AWS Student Builder Club
              </span>
            </motion.div>

            {/* Heading — with soft radial glow behind "Sharing." */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="relative text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-gray-900"
            >
              Ideas Worth{" "}
              <span className="relative inline-block">
                <span className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-24 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/25 blur-2xl" />
                <span className="gradient-text gradient-glow">Sharing.</span>
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mx-auto mt-5 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-600"
            >
              Explore practical insights, student experiences, AWS learning
              resources, and stories from our growing builder community.
            </motion.p>
          </div>

          {/* Coming Soon Card — cleaner, less glass */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="
              relative
              z-10
              mx-auto
              mt-10
              max-w-4xl
              overflow-hidden
              rounded-[32px]
              border
              border-violet-100
              bg-white/70
              p-8
              text-center
              shadow-[0_20px_60px_rgba(124,58,237,0.10)]
              md:p-14
            "
          >
            {/* One large soft gradient blob */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-gradient-to-br
                from-brand-200/40
                to-fuchsia-200/30
                blur-[80px]
              "
            />

            <div className="relative">
              {/* Icon — visual anchor */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="relative mx-auto flex h-20 w-20 items-center justify-center"
              >
                <span className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-100 to-fuchsia-50 shadow-md" />
                <BookOpen size={32} className="relative text-brand-700" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm">
                  <Sparkles size={11} className="text-brand-500" />
                </span>
              </motion.div>

              {/* Badge */}
              <div className="mt-7 inline-flex">
                <span
                  className="
                    rounded-full
                    border
                    border-violet-100
                    bg-violet-50
                    px-4
                    py-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-brand-700
                  "
                >
                  {blogComingSoon.status}
                </span>
              </div>

              <h2
                className="
                  mx-auto
                  mt-5
                  max-w-3xl
                  text-2xl
                  font-black
                  tracking-tight
                  text-heading
                  md:text-4xl
                "
              >
                Our Blog Is Coming Soon
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-2xl
                  text-base
                  leading-7
                  text-gray-600
                  md:text-lg
                "
              >
                We're working on a collection of practical articles, AWS
                learning resources, student experiences, and community
                stories.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/events">
                  <Button size="lg" showArrow>
                    Explore Events
                  </Button>
                </Link>

                <Link to="/team">
                  <Button size="lg" variant="secondary">
                    Meet the Team
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* =====================================================
          WHAT TO EXPECT — editorial category cards
      ===================================================== */}

      <section className="relative overflow-hidden py-20 lg:py-24">
        {/* Soft violet → white → violet, one central glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50/70 via-white to-violet-50/50" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/25 blur-[130px]" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              What's Coming
            </span>
            <h2 className="mx-auto mt-4 text-3xl font-black text-heading md:text-5xl">
              Knowledge From{" "}
              <span className="gradient-text">Builders.</span>
            </h2>
            <p className="mx-auto mt-5 text-base leading-7 text-gray-600">
              Our upcoming blog will focus on useful content that helps
              students learn, build and grow.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {blogCategories.map((category, index) => {
              const style =
                categoryStyles[
                  category.id as keyof typeof categoryStyles
                ];
              const Icon = style.icon;

              return (
                <motion.article
                  key={category.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-gray-100
                    bg-white
                    p-7
                    shadow-[0_12px_40px_rgba(124,58,237,0.06)]
                    transition-shadow
                    duration-300
                    hover:shadow-[0_25px_60px_rgba(124,58,237,0.14)]
                  "
                >
                  {/* Large ghost number, top-right */}
                  <span
                    className={`
                      pointer-events-none
                      absolute
                      -right-1
                      -top-3
                      select-none
                      text-6xl
                      font-black
                      leading-none
                      ${style.ghost}
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative">
                    <div
                      className={`
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        ${style.accent}
                        ${style.iconColor}
                        shadow-sm
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      `}
                    >
                      <Icon size={25} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-heading">
                      {category.title}
                    </h3>

                    {/* Horizontal accent line */}
                    <div
                      className={`mt-3 h-px w-10 bg-gradient-to-r ${style.line} to-transparent`}
                    />

                    <p className="mt-4 text-sm leading-6 text-gray-500">
                      {category.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-600">
                      Coming soon
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =====================================================
          COMMUNITY CTA
      ===================================================== */}

      <SectionWrapper background="gradient">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-white/10
              bg-brand-700
              px-7
              py-14
              text-center
              shadow-[0_30px_80px_rgba(76,29,149,0.35)]
              md:px-14
              md:py-16
            "
          >
            {/* Glow layers */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-72
                w-72
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/10
                blur-[100px]
              "
            />
            <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-fuchsia-400/20 blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-brand-400/20 blur-[90px]" />

            {/* Grid texture — nearly invisible */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.04]
                [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)]
                [background-size:32px_32px]
              "
            />

            <div className="relative">
              {/* Icon badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="
                  mx-auto
                  mb-6
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  shadow-lg
                  backdrop-blur-md
                "
              >
                <Sparkles size={24} />
              </motion.div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Keep Building
              </span>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black text-white md:text-5xl">
                Until then, keep{" "}
                <span className="text-white/90">building.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/80">
                Join our community, participate in events and be part of
                the experiences that will shape our future stories.
              </p>

              {/* Actions */}
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/events"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-2xl
                    bg-white
                    px-7
                    py-3.5
                    font-semibold
                    text-brand-700
                    shadow-xl
                    shadow-black/20
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-brand-50
                    hover:shadow-2xl
                  "
                >
                  Explore Events
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/gallery"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-2xl
                    border
                    border-white/25
                    bg-white/5
                    px-7
                    py-3.5
                    font-semibold
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-white/40
                    hover:bg-white/15
                  "
                >
                  View Gallery
                </Link>
              </div>

              {/* Trust row */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-7 text-sm text-white">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  Student-led
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  MUET Jamshoro
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  Since 2023
                </span>
              </div>
            </div>
          </motion.div>
        </Container>
      </SectionWrapper>
    </main>
  );
}