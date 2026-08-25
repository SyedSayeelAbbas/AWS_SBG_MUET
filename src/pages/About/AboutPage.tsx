import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

import Container from "../../components/layout/Container";
import SectionWrapper from "../../components/common/SectionWrapper";
import SectionHeading from "../../components/common/SectionHeading";
import { Button } from "../../components/ui/Button";
import TimelineCard from "../../components/cards/TimelineCard";
import AboutHeroVisual from "../../components/about/AboutHeroVisual";

import { ROUTES } from "../../constants/routes";
import { timeline } from "../../constants/home.constants";

import {
  coreValues,
  missionPillars,
  aboutServices,
  aboutImpactStats,
  beliefs,
  experienceSteps,
} from "../../constants/about.constants";

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* =========================================================
          SECTION 1 — HERO
      ========================================================= */}

      <section className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-28 lg:pb-28 lg:pt-36">

        {/* Background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#faf7ff_0%,#ffffff_75%)]"
        />

        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-40
            top-0
            -z-10
            h-[280px]
            w-[280px]
            rounded-full
            bg-brand-500/10
            blur-[110px]
            sm:h-[420px]
            sm:w-[420px]
            sm:blur-[140px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-40
            top-32
            -z-10
            h-[260px]
            w-[260px]
            rounded-full
            bg-purple-400/10
            blur-[110px]
            sm:h-[400px]
            sm:w-[400px]
            sm:blur-[140px]
          "
        />

        {/* Dot pattern */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            -z-10
            opacity-[0.35]
            [background-image:radial-gradient(#8C52FF_1px,transparent_1px)]
            [background-size:32px_32px]
            [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black_25%,transparent_100%)]
          "
        />

        <Container className="max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-20">

            {/* ================= HERO CONTENT ================= */}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="order-1 text-center lg:text-left"
            >

              {/* Eyebrow */}
              <div className="flex justify-center px-2 lg:justify-start lg:px-0">
                <span
                  className="
                    inline-flex
                    max-w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-brand-200/80
                    bg-white/80
                    px-4
                    py-2
                    text-center
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-brand-700
                    shadow-[0_8px_30px_rgba(140,82,255,0.08)]
                    backdrop-blur-xl
                    sm:px-5
                    sm:text-xs
                    sm:tracking-[0.18em]
                  "
                >
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
                  </span>

                  <span className="whitespace-normal sm:whitespace-nowrap">
                    AWS Student Builder Club
                  </span>
                </span>
              </div>

              {/* Heading */}
              <h1
                className="
                  mx-auto
                  mt-6
                  max-w-3xl
                  text-[2rem]
                  font-black
                  leading-[1.12]
                  tracking-tight
                  text-heading
                  sm:mt-7
                  sm:text-5xl
                  sm:leading-[1.05]
                  md:text-6xl
                  lg:mx-0
                "
              >
                Building the Next Generation of{" "}
                <span className="animated-gradient">
                  Cloud Builders.
                </span>
              </h1>

              {/* Description */}
              <p
                className="
                  mx-auto
                  mt-5
                  max-w-xl
                  px-2
                  text-sm
                  leading-7
                  text-body
                  sm:mt-7
                  sm:px-0
                  sm:text-base
                  sm:leading-8
                  lg:mx-0
                  lg:text-lg
                "
              >
                AWS Student Builder Club MUET is a student-driven
                technology community focused on cloud computing,
                innovation, practical learning, certifications,
                projects and collaboration.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col items-center gap-3 sm:mt-9 sm:flex-row sm:gap-4 lg:justify-start">

                <a href="#who-we-are" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    showArrow
                    className="w-full sm:w-auto"
                  >
                    Explore Our Community
                  </Button>
                </a>

                <Link
                  to={ROUTES.TEAM}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="secondary"
                    showArrow
                    className="w-full sm:w-auto"
                  >
                    Meet the Team
                  </Button>
                </Link>

              </div>

              {/* Small trust line */}
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-center text-xs text-body sm:mt-8 sm:flex-nowrap sm:justify-center sm:text-sm lg:justify-start lg:text-left">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        border-white
                        bg-brand-100
                        text-[10px]
                        font-bold
                        text-brand-600
                      "
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <span>
                  Built by students, for students.
                </span>
              </div>
            </motion.div>

            {/* ================= HERO VISUAL ================= */}

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.85,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="order-2"
            >
              <AboutHeroVisual />
            </motion.div>

          </div>
        </Container>
      </section>


      {/* =========================================================
          SECTION 2 — WHO WE ARE
      ========================================================= */}

      <SectionWrapper id="who-we-are" background="white">
        <Container>

          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <span className="inline-flex rounded-full bg-brand-100 px-4 py-2 text-xs font-semibold text-brand-700 sm:px-5 sm:text-sm">
                Who We Are
              </span>

              <h2 className="mt-5 text-2xl font-black leading-tight text-heading sm:mt-6 sm:text-3xl md:text-4xl lg:text-5xl">
                More Than a Club.
                <span className="animated-gradient">
                  {" "}A Builder Community.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-body sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
                The AWS Student Builder Club MUET brings together
                students interested in cloud computing, software
                engineering, artificial intelligence, DevOps,
                cybersecurity, innovation and technology.
              </p>

              {/* Small statement */}
              <div className="mt-7 flex items-start gap-3 sm:mt-8">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <Check size={14} />
                </div>

                <p className="text-sm font-medium leading-6 text-heading">
                  Learn together. Build together. Grow together.
                </p>
              </div>

            </motion.div>


            {/* Values */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

              {coreValues.map((value, index) => {
                const Icon = value.icon;

                return (
                  <motion.div
                    key={value.title}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -7,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[1.5rem]
                      border
                      border-line
                      bg-white
                      p-5
                      shadow-[0_10px_35px_rgba(30,20,60,0.04)]
                      transition-all
                      duration-300
                      hover:border-brand-200
                      hover:shadow-[0_25px_55px_rgba(140,82,255,0.12)]
                      sm:rounded-[1.75rem]
                      sm:p-6
                    "
                  >

                    {/* Glow */}
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        -right-10
                        -top-10
                        h-28
                        w-28
                        rounded-full
                        bg-brand-500/10
                        blur-2xl
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    <div className="relative flex items-center justify-between">

                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-light-purple
                          text-brand-600
                          transition-all
                          duration-300
                          group-hover:scale-110
                          group-hover:bg-brand-100
                          sm:h-11
                          sm:w-11
                        "
                      >
                        <Icon size={20} />
                      </div>

                      <span className="text-2xl font-black text-brand-100 sm:text-3xl">
                        {value.number}
                      </span>

                    </div>

                    <h3 className="relative mt-4 text-base font-bold text-heading sm:mt-5 sm:text-lg">
                      {value.title}
                    </h3>

                    <p className="relative mt-2 text-sm leading-6 text-body">
                      {value.description}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </Container>
      </SectionWrapper>


      {/* =========================================================
          SECTION 3 — MISSION
      ========================================================= */}

      <SectionWrapper background="soft">
        <Container>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="
              relative
              overflow-hidden
              rounded-[1.75rem]
              border
              border-brand-200/70
              bg-[linear-gradient(135deg,#f8f5ff_0%,#ffffff_55%,#f5f0ff_100%)]
              px-5
              py-10
              shadow-[0_30px_80px_rgba(107,70,193,0.08)]
              sm:rounded-[2.5rem]
              sm:px-10
              sm:py-14
              md:px-16
              md:py-20
            "
          >

            {/* Decorative glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-56
                w-56
                -translate-x-1/2
                rounded-full
                bg-brand-500/15
                blur-[90px]
                sm:h-72
                sm:w-72
                sm:blur-[110px]
              "
            />

            <div className="relative text-center">

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-600 sm:text-xs sm:tracking-[0.25em]">
                Our Mission
              </span>

              <h2 className="mx-auto mt-4 max-w-4xl text-2xl font-black leading-tight text-heading sm:mt-5 sm:text-3xl md:text-4xl lg:text-5xl">
                Empower students to learn cloud technologies,
                build real solutions and create opportunities
                for the future.
              </h2>

            </div>


            {/* Mission pillars */}
            <div className="relative mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">

              {missionPillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    group
                    rounded-[1.5rem]
                    border
                    border-brand-100
                    bg-white/80
                    p-5
                    shadow-sm
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-brand-200
                    hover:shadow-[0_20px_45px_rgba(140,82,255,0.10)]
                    sm:rounded-[1.75rem]
                    sm:p-6
                  "
                >

                  <span className="text-3xl font-black text-brand-100 transition-colors duration-300 group-hover:text-brand-200 sm:text-4xl">
                    {pillar.number}
                  </span>

                  <h3 className="mt-3 text-lg font-bold text-heading sm:mt-4 sm:text-xl">
                    {pillar.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-body">
                    {pillar.description}
                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </Container>
      </SectionWrapper>


      {/* =========================================================
          SECTION 4 — WHAT WE DO
      ========================================================= */}

      <SectionWrapper background="white">
        <Container>

          <SectionHeading
            eyebrow="What We Do"
            title="Everything We Do,"
            highlight="Built Around You."
            description="Practical learning experiences designed to turn curiosity into real cloud skills."
          />

          <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">

            {aboutServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 3) * 0.08,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-line
                    bg-white
                    p-6
                    shadow-[0_10px_35px_rgba(30,20,60,0.04)]
                    transition-all
                    duration-300
                    hover:border-brand-200
                    hover:shadow-[0_25px_60px_rgba(140,82,255,0.12)]
                    sm:rounded-[1.75rem]
                    sm:p-7
                  "
                >

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-10
                      -top-10
                      h-32
                      w-32
                      rounded-full
                      bg-brand-500/10
                      blur-3xl
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div
                    className="
                      relative
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-light-purple
                      text-brand-600
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:bg-brand-100
                      sm:h-14
                      sm:w-14
                    "
                  >
                    <Icon size={24} className="sm:hidden" />
                    <Icon size={26} className="hidden sm:block" />
                  </div>

                  <h3 className="relative mt-5 text-lg font-bold text-heading sm:mt-6 sm:text-xl">
                    {service.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-body">
                    {service.description}
                  </p>

                  <div className="relative mt-5 flex items-center gap-2 text-sm font-semibold text-brand-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    Explore
                    <ArrowRight size={16} />
                  </div>

                </motion.div>
              );
            })}

          </div>

        </Container>
      </SectionWrapper>


      {/* ===================================================== */}
      {/* SECTION 5 — OUR IMPACT */}
      {/* ===================================================== */}

      <SectionWrapper background="gradient">
        <Container>
          <SectionHeading
            eyebrow="Our Impact"
            title="A Community That's"
            highlight="Always Growing."
            description="Real momentum, built one workshop, hackathon and project at a time."
          />

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {aboutImpactStats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -8,
                    transition: {
                      duration: 0.25,
                      ease: "easeOut",
                    },
                  }}
                  className="
              group
              relative
              overflow-hidden
              rounded-[1.5rem]
              border
              border-[#E9D5FF]
              bg-white
              p-5
              shadow-[0_10px_35px_rgba(30,20,60,0.05)]
              transition-all
              duration-300
              hover:border-brand-300
              hover:shadow-[0_22px_55px_rgba(107,70,193,0.14)]
              sm:rounded-[1.75rem]
              sm:p-6
            "
                >
                  {/* Background glow */}
                  <div
                    aria-hidden="true"
                    className="
                pointer-events-none
                absolute
                -right-12
                -top-12
                h-32
                w-32
                rounded-full
                bg-brand-500/10
                blur-3xl
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
                  />

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
                bg-light-purple
                text-brand-600
                shadow-sm
                transition-all
                duration-300
                group-hover:scale-105
                group-hover:bg-brand-100
                sm:h-11
                sm:w-11
              "
                  >
                    <Icon size={20} className="sm:hidden" />
                    <Icon size={21} className="hidden sm:block" />
                  </div>

                  {/* Number */}
                  <div className="relative mt-6 sm:mt-7">
                    <span
                      className="
                  block
                  text-3xl
                  font-extrabold
                  tracking-tight
                  text-brand-600
                  sm:text-4xl
                  sm:text-[2.65rem]
                "
                    >
                      {stat.value}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="relative mt-2 text-base font-bold text-heading sm:text-lg">
                    {stat.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-2 text-sm leading-6 text-body">
                    {stat.description}
                  </p>

                  {/* Bottom accent */}
                  <div
                    aria-hidden="true"
                    className="
                absolute
                bottom-0
                left-6
                right-6
                h-px
                origin-left
                scale-x-0
                bg-gradient-to-r
                from-brand-500
                to-brand-300
                transition-transform
                duration-500
                group-hover:scale-x-100
              "
                  />
                </motion.div>
              );
            })}
          </div>
        </Container>
      </SectionWrapper>


      {/* =========================================================
          SECTION 6 — JOURNEY
      ========================================================= */}

      <SectionWrapper background="white">
        <Container>

          <SectionHeading
            eyebrow="Our Journey"
            title="How We Got"
            highlight="Here."
            description="From a small group of curious students to an official AWS Student Builder Club."
          />

          <div className="mx-auto mt-10 max-w-2xl sm:mt-14">

            {timeline.map((item, index) => (
              <TimelineCard
                key={item.id}
                {...item}
                isLast={index === timeline.length - 1}
              />
            ))}

          </div>

        </Container>
      </SectionWrapper>


      {/* =========================================================
          SECTION 7 — BELIEFS
      ========================================================= */}

      <SectionWrapper background="soft">
        <Container>

          <SectionHeading
            eyebrow="What We Believe"
            title="The Principles That"
            highlight="Guide Us."
          />

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">

            {beliefs.map((belief, index) => {
              const Icon = belief.icon;
              const featured = index === 0;

              return (
                <motion.div
                  key={belief.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 3) * 0.08,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-line
                    bg-white
                    shadow-[0_10px_35px_rgba(30,20,60,0.04)]
                    transition-all
                    duration-300
                    hover:border-brand-200
                    hover:shadow-[0_25px_55px_rgba(140,82,255,0.12)]
                    sm:rounded-[1.75rem]
                    ${featured
                      ? "p-6 sm:col-span-2 sm:p-8 lg:col-span-1"
                      : "p-5 sm:p-6"
                    }
                  `}
                >

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-12
                      -top-12
                      h-32
                      w-32
                      rounded-full
                      bg-brand-500/10
                      blur-3xl
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div
                    className={`
                      relative
                      flex
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[linear-gradient(135deg,#6B46C1,#8C52FF)]
                      text-white
                      shadow-[0_10px_25px_rgba(107,70,193,0.20)]
                      ${featured ? "h-12 w-12 sm:h-14 sm:w-14" : "h-11 w-11 sm:h-12 sm:w-12"}
                    `}
                  >
                    <Icon size={featured ? 24 : 20} className="sm:hidden" />
                    <Icon size={featured ? 26 : 22} className="hidden sm:block" />
                  </div>

                  <h3
                    className={`
                      relative
                      mt-4
                      font-bold
                      text-heading
                      sm:mt-5
                      ${featured ? "text-xl sm:text-2xl" : "text-base sm:text-lg"}
                    `}
                  >
                    {belief.title}
                  </h3>

                  <p className="relative mt-2 text-sm leading-6 text-body">
                    {belief.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </Container>
      </SectionWrapper>


      {/* =========================================================
          SECTION 8 — STUDENT EXPERIENCE
      ========================================================= */}

      <SectionWrapper background="white">
        <Container>

          <SectionHeading
            eyebrow="Get Started"
            title="Your Journey"
            highlight="Starts Here."
          />

          <div className="relative mt-14 sm:mt-16">

            {/* Base connector */}
            <div
              aria-hidden="true"
              className="
                absolute
                left-6
                top-0
                h-full
                w-px
                bg-brand-100
                md:left-0
                md:top-7
                md:h-px
                md:w-full
              "
            />

            {/* Animated connector */}
            <motion.div
              initial={{
                scaleY: 0,
                scaleX: 0,
              }}
              whileInView={{
                scaleY: 1,
                scaleX: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                transformOrigin: "top left",
              }}
              className="
                absolute
                left-6
                top-0
                h-full
                w-[2px]
                bg-[linear-gradient(180deg,#6B46C1,#8C52FF)]
                md:left-0
                md:top-7
                md:h-[2px]
                md:w-full
                md:bg-[linear-gradient(90deg,#6B46C1,#8C52FF)]
              "
            />

            <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 md:grid-cols-4 md:gap-6">

              {experienceSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.4,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.12,
                    }}
                    className="
                      relative
                      flex
                      items-start
                      gap-5
                      sm:flex-col
                      sm:items-center
                      sm:text-center
                      md:flex-col
                      md:items-center
                      md:text-center
                    "
                  >

                    <motion.div
                      whileHover={{
                        scale: 1.08,
                      }}
                      className="
                        relative
                        z-10
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-brand-100
                        bg-white
                        text-brand-600
                        shadow-[0_10px_30px_rgba(140,82,255,0.20)]
                        ring-4
                        ring-white
                        sm:h-16
                        sm:w-16
                      "
                    >
                      <Icon size={24} />
                    </motion.div>

                    <div className="pb-2 sm:pb-0">

                      <span className="text-xs font-bold uppercase tracking-widest text-brand-500">
                        Step {step.number}
                      </span>

                      <h3 className="mt-1 text-lg font-bold text-heading sm:text-xl">
                        {step.title}
                      </h3>

                      <p className="mt-1 max-w-[210px] text-sm leading-6 text-body sm:mx-auto">
                        {step.description}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </Container>
      </SectionWrapper>


      {/* =========================================================
          SECTION 9 — FINAL CTA (matches Blog page "Keep Building" CTA)
      ========================================================= */}

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
              rounded-[24px]
              sm:rounded-[36px]
              border
              border-white/10
              bg-brand-700
              px-5
              py-10
              text-center
              shadow-[0_30px_80px_rgba(76,29,149,0.35)]
              sm:px-7
              sm:py-14
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
                h-48
                w-48
                sm:h-72
                sm:w-72
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/10
                blur-[70px]
                sm:blur-[100px]
              "
            />
            <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 sm:-left-16 sm:-top-16 sm:h-40 sm:w-40 rounded-full bg-fuchsia-400/20 blur-[60px] sm:blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 sm:-bottom-16 sm:-right-16 sm:h-40 sm:w-40 rounded-full bg-brand-400/20 blur-[60px] sm:blur-[90px]" />

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
                  mb-5
                  sm:mb-6
                  flex
                  h-12
                  w-12
                  sm:h-14
                  sm:w-14
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
                <Sparkles size={22} className="sm:hidden" />
                <Sparkles size={24} className="hidden sm:block" />
              </motion.div>

              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white">
                Join the Community
              </span>

              <h2 className="mx-auto mt-3 sm:mt-4 max-w-2xl text-2xl sm:text-3xl font-black text-white md:text-5xl">
                Ready to Build{" "}
                <span className="text-white/90">What&rsquo;s Next?</span>
              </h2>

              <p className="mx-auto mt-4 sm:mt-5 max-w-xl text-sm sm:text-base leading-6 sm:leading-7 text-white/80">
                Join a community of students learning, building and
                shaping the future with cloud technology.
              </p>

              {/* Actions */}
              <div className="mt-7 sm:mt-9 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
                <Link
                  to={ROUTES.JOIN}
                  className="
                    group
                    inline-flex
                    w-full
                    sm:w-auto
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-white
                    px-6
                    py-3
                    sm:px-7
                    sm:py-3.5
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
                  Join the Community
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to={ROUTES.EVENTS}
                  className="
                    inline-flex
                    w-full
                    sm:w-auto
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    border
                    border-white/25
                    bg-white/5
                    px-6
                    py-3
                    sm:px-7
                    sm:py-3.5
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
                  Explore Events
                </Link>
              </div>

              {/* Trust row */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 gap-y-2 sm:gap-y-3 border-t border-white/10 pt-6 sm:pt-7 text-xs sm:text-sm text-white">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  Student-led
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  Community-driven
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  Future-focused
                </span>
              </div>
            </div>
          </motion.div>
        </Container>
      </SectionWrapper>

    </main>
  );
}