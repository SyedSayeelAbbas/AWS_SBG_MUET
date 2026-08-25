import { motion } from "framer-motion";

import HeroIllustration from "../hero/HeroIllustration";
import HeroStats from "./HeroStats";
import HeroBackground from "../hero/HeroBackground";

import Container from "../layout/Container";
import { Button } from "../ui/Button";
import ScrollIndicator from "../hero/ScrollIndicator";
import HeroCommunityCard from "../hero/HeroCommunityCard";
import HeroTrustBadges from "../hero/HeroTrustBadges";

const headingLines = [
  "Build the",
  "Future",
  "with AWS Cloud",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-28 md:pt-32 lg:pt-36 pb-10 sm:pb-20 lg:pb-24">

      {/* Base Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white" />

      {/* Animated Background */}
      <HeroBackground />

      {/* Noise */}
      <div className="premium-noise" />

      <Container className="max-w-7xl">

        {/* =========================================================
            MAIN HERO
        ========================================================= */}
        <div
          className="
            grid
            items-center
            gap-8
            sm:gap-14
            lg:grid-cols-2
            lg:items-start
            lg:gap-24
          "
        >

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-10
              flex
              flex-col
              items-center
              text-center
              lg:items-start
              lg:text-left
            "
          >

            {/* ================= BADGE ================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="
                mb-6
                inline-flex
                max-w-full
                items-center
                justify-center
                rounded-full
                border
                border-brand-200
                bg-white/70
                px-4
                py-1.5
                text-center
                text-xs
                backdrop-blur-xl
                sm:mb-8
                sm:px-5
                sm:py-2
                sm:text-sm
              "
            >
              <span className="mr-2 h-2 w-2 shrink-0 rounded-full bg-brand-600 animate-pulse" />

              <span className="whitespace-normal sm:whitespace-nowrap">
                Official AWS Student Builder Club — MUET
              </span>
            </motion.div>

            {/* ================= HEADING ================= */}
            <div className="overflow-hidden">
              <h1
                className="
                  max-w-3xl
                  text-[2.25rem]
                  font-black
                  leading-[1.08]
                  sm:text-5xl
                  sm:leading-[1.05]
                  md:text-6xl
                  lg:text-7xl
                "
              >
                {headingLines.map((line, index) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, y: 70 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{
                      duration: 0.9,
                      delay: index * 0.18,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden"
                  >
                    {line === "Future" ? (
                      <motion.span
                        className="gradient-text gradient-glow block"
                        whileHover={{
                          scale: 1.03,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        {line}
                      </motion.span>
                    ) : (
                      <span className="block text-heading">
                        {line}
                      </span>
                    )}
                  </motion.div>
                ))}
              </h1>
            </div>

            {/* ================= DESCRIPTION ================= */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.75,
                duration: 0.7,
              }}
              className="
                mt-6
                max-w-xl
                px-2
                text-sm
                leading-6
                text-body
                sm:mt-8
                sm:px-0
                sm:text-lg
                sm:leading-8
              "
            >
              Empowering students through cloud computing,
              workshops, certifications, hackathons,
              innovation and real-world engineering
              experience.
            </motion.p>

            {/* ================= TRUST BADGES ================= */}
            <div
              className="
                mt-6
                flex
                flex-wrap
                justify-center
                gap-2.5
                sm:mt-8
                sm:gap-3
                lg:justify-start
              "
            >
              <HeroTrustBadges />
            </div>

            {/* ================= CTA BUTTONS ================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.6,
              }}
              className="
                mt-8
                flex
                w-full
                flex-col
                items-center
                gap-3
                sm:mt-10
                sm:w-auto
                sm:flex-row
                sm:gap-4
                lg:items-start
              "
            >
              <Button
                size="lg"
                showArrow
                className="w-full sm:w-auto"
              >
                Join Community
              </Button>

              <Button
                size="lg"
                variant="secondary"
                showArrow
                className="w-full sm:w-auto"
              >
                Explore Events
              </Button>
            </motion.div>

          </motion.div>


          {/* ================= RIGHT ILLUSTRATION ================= */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-20
              order-2
              mx-auto
              w-full
              max-w-[280px]
              sm:max-w-[440px]
              md:max-w-[560px]
              lg:order-last
              lg:mt-6
              lg:max-w-[650px]
            "
          >
            <HeroIllustration />
          </motion.div>

        </div>


        {/* =========================================================
            COMMUNITY CARD + STATS
            Desktop: Side by side
            Mobile/Tablet: Stacked
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-10
            mt-8
            flex
            w-full
            flex-col
            items-center
            gap-5
            sm:mt-10
            sm:gap-6

            lg:mt-8
            lg:flex-row
            lg:items-center
            lg:gap-20
            xl:gap-40
          "
        >

          {/* ================= COMMUNITY CARD ================= */}
        <motion.div
          whileHover={{
            y: -8,
            scale: 1.015,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 18,
          }}
          className="
            group
            w-full
            max-w-[430px]
            shrink-0
            cursor-pointer
            lg:w-[430px]
          "
        >
          <HeroCommunityCard />
        </motion.div>

          {/* ================= STATS ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 1.05,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              w-full
              flex-1
              items-center
              justify-center
              lg:min-h-0
              lg:h-[150px]
            "
          >
            <HeroStats />
          </motion.div>

        </motion.div>


        {/* ================= BOTTOM SCROLL SPACE ================= */}
        <div
          className="
            mt-8
            flex
            justify-center
            sm:mt-16
            lg:mt-20
          "
        />

      </Container>

      {/* ================= SCROLL INDICATOR ================= */}
      <ScrollIndicator />

    </section>
  );
}