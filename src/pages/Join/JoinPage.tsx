import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code2,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../../components/layout/Container";
import SectionWrapper from "../../components/common/SectionWrapper";
import SectionHeading from "../../components/common/SectionHeading";
import { Button } from "../../components/ui/Button";

const benefits = [
  {
    icon: Cloud,
    title: "Explore AWS",
    description:
      "Learn cloud technologies, AWS services and practical cloud concepts through workshops and sessions.",
  },
  {
    icon: Code2,
    title: "Build & Learn",
    description:
      "Work on projects, experiment with new technologies and turn your ideas into practical solutions.",
  },
  {
    icon: Users,
    title: "Grow Together",
    description:
      "Connect with students who share your interest in technology, cloud computing and software development.",
  },
  {
    icon: Zap,
    title: "Take Opportunities",
    description:
      "Participate in events, technical activities, community initiatives and learning opportunities.",
  },
];

const expectations = [
  "Participate in AWS Student Builder Club activities",
  "Attend workshops, technical sessions and community events",
  "Learn and experiment with AWS technologies",
  "Collaborate with fellow student builders",
  "Build projects and improve your technical skills",
  "Contribute to the growth of the student community",
];

const joinHeroStats = [
  { icon: Users, value: "500+", label: "Students Reached", offset: "sm:mt-0" },
  { icon: Cloud, value: "35+", label: "Events Hosted", offset: "sm:mt-3" },
  { icon: Zap, value: "Free", label: "To Join", offset: "sm:-mt-1" },
];

export default function JoinPage() {
  return (
    <main>
      {/* =====================================================
          HERO — ambient purple glow + floating cloud visual
      ===================================================== */}

      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-20 lg:pb-24">
        {/* Base background — stays mostly white */}
        <div className="absolute inset-0 bg-white" />

        {/* Large blurred violet orb, top-right */}
        <div className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full bg-violet-300/25 blur-[130px]" />

        {/* Smaller pink/violet orb, bottom-left */}
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-fuchsia-300/20 blur-[110px]" />

        {/* Faint radial grid */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(#7c3aed_1px,transparent_1px),linear-gradient(90deg,#7c3aed_1px,transparent_1px)]
            [background-size:40px_40px]
            [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,black,transparent)]
          "
        />

        {/* Faint floating particles */}
        {[
          { top: "18%", left: "10%", size: 6, delay: 0 },
          { top: "28%", left: "88%", size: 4, delay: 1.2 },
          { top: "62%", left: "6%", size: 5, delay: 0.6 },
          { top: "70%", left: "92%", size: 3, delay: 1.8 },
          { top: "12%", left: "50%", size: 3, delay: 2.4 },
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

        {/* Noise */}
        <div className="premium-noise" />

        {/* Floating cloud/network visual — faint, decorative */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="pointer-events-none absolute right-[6%] top-[18%] hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-violet-200/50 bg-white/40 opacity-[0.35] backdrop-blur-sm"
          >
            <Cloud size={34} className="text-brand-600" />
            <span className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border border-violet-200/50 bg-white/50">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            </span>
          </motion.div>
        </motion.div>

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
              <Users size={14} className="text-brand-700" />
              <span className="text-xs font-semibold text-heading">
                AWS Student Builder Club MUET
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-[-0.035em] text-gray-900"
            >
              Build Something{" "}
              <span className="gradient-text gradient-glow">Greater.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mx-auto mt-5 max-w-xl text-sm sm:text-base leading-6 sm:leading-7 text-gray-600"
            >
              Join a community of students passionate about cloud computing,
              technology, software development and building real-world
              solutions.
            </motion.p>

            {/* Stats — premium floating style, slightly asymmetric */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4 sm:gap-6"
            >
              {joinHeroStats.map((stat, i) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 24, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -6 }}
                    className={`
                      group relative flex flex-col items-center
                      ${stat.offset}
                    `}
                  >
                    {/* hover glow */}
                    <div className="pointer-events-none absolute -inset-3 -z-10 rounded-full bg-violet-300/0 blur-2xl transition-colors duration-300 group-hover:bg-violet-300/25" />

                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-100 to-fuchsia-50 text-brand-700 shadow-sm">
                      <Icon size={18} />
                    </span>

                    <h3 className="mt-3 text-2xl font-black gradient-text">
                      {stat.value}
                    </h3>

                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                      {stat.label}
                    </p>

                    <span className="mt-3 h-px w-8 bg-gradient-to-r from-transparent via-violet-300 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-4"
            >
              <Button size="lg" showArrow>
                Join the Community
              </Button>

              <Link to="/events">
                <Button size="lg" variant="secondary">
                  Explore Events
                </Button>
              </Link>
            </motion.div>

            {/* Fine print */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-6 text-sm text-gray-500"
            >
              Whether you're just starting your cloud journey or already
              building projects, there is a place for you here.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Soft transition glow into the next section */}
      <div className="relative h-0">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-violet-100/40 blur-3xl" />
      </div>

      {/* =====================================================
          WHY JOIN
      ===================================================== */}

      <SectionWrapper background="white">
        <Container>
          <SectionHeading
            eyebrow="Why Join?"
            title="More Than Just"
            highlight="Events."
            description="The AWS Student Builder Club is a place to learn, experiment, collaborate and grow alongside other students."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -8, scale: 1.015 }}
                  className="
                    group
                    rounded-[26px]
                    border
                    border-gray-200/70
                    bg-white
                    p-6
                    shadow-[0_12px_40px_rgba(0,0,0,0.04)]
                    transition-all
                    duration-300
                    hover:border-violet-200
                    hover:shadow-[0_25px_60px_rgba(124,58,237,0.14)]
                  "
                >
                  <div className="relative">
                    <div className="pointer-events-none absolute -inset-2 -z-10 rounded-2xl bg-violet-300/0 blur-xl transition-colors duration-300 group-hover:bg-violet-300/25" />

                    <div
                      className="
                        relative
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-violet-100
                        to-fuchsia-50
                        text-brand-700
                        shadow-sm
                        transition-transform
                        duration-300
                        group-hover:rotate-6
                      "
                    >
                      <Icon size={23} />
                    </div>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-heading">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </SectionWrapper>

      {/* =====================================================
          WHAT TO EXPECT
      ===================================================== */}

      <SectionWrapper background="gradient">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Be Part of It"
                title="What Can You"
                highlight="Expect?"
                description="Joining the community is about being involved. Learn from others, contribute your ideas and make the most of the opportunities around you."
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[30px] border border-white/70 bg-white/70 p-7 shadow-[0_20px_70px_rgba(124,58,237,0.10)] backdrop-blur-xl md:p-9"
            >
              {/* faint grid pattern */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.05]
                  [background-image:linear-gradient(#7c3aed_1px,transparent_1px),linear-gradient(90deg,#7c3aed_1px,transparent_1px)]
                  [background-size:28px_28px]
                "
              />

              {/* violet gradient blob */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-300/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 h-32 w-32 rounded-full bg-fuchsia-300/15 blur-3xl" />

              {/* thin vertical accent line */}
              <div className="pointer-events-none absolute left-9 top-24 bottom-9 hidden w-px bg-gradient-to-b from-transparent via-brand-300/40 to-transparent md:block" />

              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-brand-700/10 text-brand-700">
                <CheckCircle2 size={20} />
              </div>

              <div className="relative mt-6 space-y-5">
                {expectations.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[10px] font-bold text-brand-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm leading-6 text-gray-600">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </SectionWrapper>

      {/* =====================================================
          CTA — richer gradient + softer lighting
      ===================================================== */}

      <SectionWrapper background="white">
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
              bg-gradient-to-br
              from-brand-700
              via-violet-700
              to-purple-800
              px-7
              py-14
              text-center
              shadow-[0_30px_80px_rgba(76,29,149,0.35)]
              md:px-14
              md:py-16
            "
          >
            {/* Radial glow behind the heading */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[38%]
                h-80
                w-80
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/15
                blur-[110px]
              "
            />
            <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-fuchsia-400/20 blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-brand-400/20 blur-[90px]" />

            {/* Very subtle grid texture */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.045]
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
                Join the Club
              </span>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black text-white md:text-5xl">
                Ready to start{" "}
                <span className="text-white">building?</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/90">
                Become part of a growing community of student builders at
                MUET and start your cloud and technology journey with us.
              </p>

              {/* Actions */}
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="https://www.meetup.com/aws-sbg-at-mehran-uni-engineering-and-tech-jamshoro-pakistan/"
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
                    shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-[1.02]
                    hover:bg-brand-50
                    hover:shadow-2xl
                  "
                >
                  Join Community
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-2xl
                    border
                    border-white/30
                    bg-white/5
                    px-7
                    py-3.5
                    font-semibold
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white/10
                  "
                >
                  Contact Us
                </Link>
              </div>

              {/* Trust row */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-7 text-sm text-white">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  35+ events hosted
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  500+ students reached
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