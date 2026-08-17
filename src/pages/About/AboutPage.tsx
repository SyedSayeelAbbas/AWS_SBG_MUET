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

      <section className="relative overflow-hidden pb-20 pt-24 sm:pb-24 sm:pt-28 lg:pb-28 lg:pt-36">

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
            h-[420px]
            w-[420px]
            rounded-full
            bg-brand-500/10
            blur-[140px]
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
            h-[400px]
            w-[400px]
            rounded-full
            bg-purple-400/10
            blur-[140px]
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
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-20">

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
              <div className="flex justify-center lg:justify-start">
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-brand-200/80
                    bg-white/80
                    px-5
                    py-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-brand-700
                    shadow-[0_8px_30px_rgba(140,82,255,0.08)]
                    backdrop-blur-xl
                  "
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
                  </span>

                  AWS Student Builder Club
                </span>
              </div>

              {/* Heading */}
              <h1
                className="
                  mx-auto
                  mt-7
                  max-w-3xl
                  text-4xl
                  font-black
                  leading-[1.05]
                  tracking-tight
                  text-heading
                  sm:text-5xl
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
                  mt-7
                  max-w-xl
                  text-base
                  leading-8
                  text-body
                  sm:text-lg
                  lg:mx-0
                "
              >
                AWS Student Builder Club MUET is a student-driven
                technology community focused on cloud computing,
                innovation, practical learning, certifications,
                projects and collaboration.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">

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
              <div className="mt-8 flex items-center justify-center gap-3 text-sm text-body lg:justify-start">
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

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

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

              <span className="inline-flex rounded-full bg-brand-100 px-5 py-2 text-sm font-semibold text-brand-700">
                Who We Are
              </span>

              <h2 className="mt-6 text-3xl font-black leading-tight text-heading sm:text-4xl lg:text-5xl">
                More Than a Club.
                <span className="animated-gradient">
                  {" "}A Builder Community.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-body sm:text-lg">
                The AWS Student Builder Club MUET brings together
                students interested in cloud computing, software
                engineering, artificial intelligence, DevOps,
                cybersecurity, innovation and technology.
              </p>

              {/* Small statement */}
              <div className="mt-8 flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <Check size={14} />
                </div>

                <p className="text-sm font-medium leading-6 text-heading">
                  Learn together. Build together. Grow together.
                </p>
              </div>

            </motion.div>


            {/* Values */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

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
                      rounded-[1.75rem]
                      border
                      border-line
                      bg-white
                      p-6
                      shadow-[0_10px_35px_rgba(30,20,60,0.04)]
                      transition-all
                      duration-300
                      hover:border-brand-200
                      hover:shadow-[0_25px_55px_rgba(140,82,255,0.12)]
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
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          bg-light-purple
                          text-brand-600
                          transition-all
                          duration-300
                          group-hover:scale-110
                          group-hover:bg-brand-100
                        "
                      >
                        <Icon size={20} />
                      </div>

                      <span className="text-3xl font-black text-brand-100">
                        {value.number}
                      </span>

                    </div>

                    <h3 className="relative mt-5 text-lg font-bold text-heading">
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
              rounded-[2.5rem]
              border
              border-brand-200/70
              bg-[linear-gradient(135deg,#f8f5ff_0%,#ffffff_55%,#f5f0ff_100%)]
              px-6
              py-14
              shadow-[0_30px_80px_rgba(107,70,193,0.08)]
              sm:px-10
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
                h-72
                w-72
                -translate-x-1/2
                rounded-full
                bg-brand-500/15
                blur-[110px]
              "
            />

            <div className="relative text-center">

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
                Our Mission
              </span>

              <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black leading-tight text-heading sm:text-4xl md:text-5xl">
                Empower students to learn cloud technologies,
                build real solutions and create opportunities
                for the future.
              </h2>

            </div>


            {/* Mission pillars */}
            <div className="relative mt-14 grid gap-5 sm:grid-cols-3">

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
                    rounded-[1.75rem]
                    border
                    border-brand-100
                    bg-white/80
                    p-6
                    shadow-sm
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-brand-200
                    hover:shadow-[0_20px_45px_rgba(140,82,255,0.10)]
                  "
                >

                  <span className="text-4xl font-black text-brand-100 transition-colors duration-300 group-hover:text-brand-200">
                    {pillar.number}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-heading">
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

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

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
                    rounded-[1.75rem]
                    border
                    border-line
                    bg-white
                    p-7
                    shadow-[0_10px_35px_rgba(30,20,60,0.04)]
                    transition-all
                    duration-300
                    hover:border-brand-200
                    hover:shadow-[0_25px_60px_rgba(140,82,255,0.12)]
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
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-light-purple
                      text-brand-600
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:bg-brand-100
                    "
                  >
                    <Icon size={26} />
                  </div>

                  <h3 className="relative mt-6 text-xl font-bold text-heading">
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

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
              rounded-[1.75rem]
              border
              border-[#E9D5FF]
              bg-white
              p-6
              shadow-[0_10px_35px_rgba(30,20,60,0.05)]
              transition-all
              duration-300
              hover:border-brand-300
              hover:shadow-[0_22px_55px_rgba(107,70,193,0.14)]
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
                h-11
                w-11
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
              "
                  >
                    <Icon size={21} />
                  </div>

                  {/* Number */}
                  <div className="relative mt-7">
                    <span
                      className="
                  block
                  text-4xl
                  font-extrabold
                  tracking-tight
                  text-brand-600
                  sm:text-[2.65rem]
                "
                    >
                      {stat.value}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="relative mt-2 text-lg font-bold text-heading">
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

          <div className="mx-auto mt-14 max-w-2xl">

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

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

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
                    rounded-[1.75rem]
                    border
                    border-line
                    bg-white
                    shadow-[0_10px_35px_rgba(30,20,60,0.04)]
                    transition-all
                    duration-300
                    hover:border-brand-200
                    hover:shadow-[0_25px_55px_rgba(140,82,255,0.12)]
                    ${featured
                      ? "p-8 sm:col-span-2 lg:col-span-1"
                      : "p-6"
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
                      ${featured ? "h-14 w-14" : "h-12 w-12"}
                    `}
                  >
                    <Icon size={featured ? 26 : 22} />
                  </div>

                  <h3
                    className={`
                      relative
                      mt-5
                      font-bold
                      text-heading
                      ${featured ? "text-2xl" : "text-lg"}
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

          <div className="relative mt-16">

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
                sm:left-0
                sm:top-7
                sm:h-px
                sm:w-full
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
                sm:left-0
                sm:top-7
                sm:h-[2px]
                sm:w-full
                sm:bg-[linear-gradient(90deg,#6B46C1,#8C52FF)]
              "
            />

            <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-4 sm:gap-6">

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

                      <p className="mt-1 max-w-[210px] text-sm leading-6 text-body">
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
          SECTION 9 — FINAL CTA
      ========================================================= */}

      <SectionWrapper
        background="white"
        className="pb-24 sm:pb-28 lg:pb-32"
      >
        <Container>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              overflow-hidden
              rounded-[2.5rem]
              bg-[linear-gradient(135deg,#5B3AA4_0%,#6B46C1_45%,#8C52FF_100%)]
              px-6
              py-16
              text-center
              shadow-[0_35px_90px_rgba(107,70,193,0.28)]
              sm:px-10
              sm:py-20
            "
          >

            {/* Large glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-20
                -top-20
                h-72
                w-72
                rounded-full
                bg-white/10
                blur-3xl
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-24
                -right-20
                h-80
                w-80
                rounded-full
                bg-white/10
                blur-3xl
              "
            />

            {/* Grid pattern */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.08]
                [background-image:radial-gradient(#ffffff_1px,transparent_1px)]
                [background-size:28px_28px]
              "
            />

            {/* Floating particles */}
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
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-white
                "
                style={{
                  left: `${10 + index * 16}%`,
                  top: `${18 + (index % 3) * 25}%`,
                }}
              />
            ))}

            <div className="relative">

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/25
                  bg-white/10
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-xl
                "
              >
                <Sparkles size={16} />
                Join the Community
              </span>

              <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
                Ready to Build What&rsquo;s Next?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                Join a community of students learning, building
                and shaping the future with cloud technology.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

                <Link
                  to={ROUTES.JOIN}
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    showArrow
                    className="
                      w-full
                      !border-0
                      !bg-white
                      !text-brand-700
                      shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                      hover:!bg-white
                      sm:w-auto
                    "
                  >
                    Join the Community
                  </Button>
                </Link>

                <Link
                  to={ROUTES.EVENTS}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    showArrow
                    className="
                      w-full
                      !border
                      !border-white/30
                      !bg-white/10
                      !shadow-none
                      hover:!bg-white/20
                      sm:w-auto
                    "
                  >
                    Explore Events
                  </Button>
                </Link>

              </div>

              <div className="mt-8 flex items-center justify-center gap-2 text-xs font-medium text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                Student-led • Community-driven • Future-focused
              </div>

            </div>

          </motion.div>

        </Container>
      </SectionWrapper>

    </main>
  );
}