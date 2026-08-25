
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Container from "../layout/Container";
import ImpactCard from "../cards/ImpactCard";

import { impactStats } from "../../constants/home.constants";

export default function CommunityImpact() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-brand-50/50 via-white to-white">
      {/* Decorative radial glows */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-0
          -z-10
          h-[260px]
          w-[260px]
          rounded-full
          bg-brand-500/10
          blur-[100px]
          sm:h-[420px]
          sm:w-[420px]
          sm:blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          -z-10
          hidden
          h-[380px]
          w-[380px]
          rounded-full
          bg-brand-600/10
          blur-[140px]
          sm:block
        "
      />

      <Container>
        {/* ================= STATEMENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          {/* Badge */}
          <span
            className="
              inline-flex
              rounded-full
              bg-brand-100
              px-4
              py-1.5
              text-xs
              font-semibold
              text-brand-700
              sm:px-5
              sm:py-2
              sm:text-sm
            "
          >
            Community Impact
          </span>

          {/* Heading */}
          <h2
            className="
              mt-5
              text-3xl
              font-bold
              leading-tight
              sm:mt-6
              sm:text-4xl
              lg:text-5xl
            "
          >
            Making a Real
            <span className="gradient-text"> Difference</span>
            &nbsp;in Student Careers
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-body
              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
          >
            Every workshop, hackathon and mentorship session moves
            our members closer to becoming industry-ready cloud
            engineers &mdash; these numbers are the proof.
          </p>

          {/* Link */}
          <a
            href="#"
            className="
              group
              mt-6
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-brand-600
              sm:mt-8
              sm:text-base
            "
          >
            See our full story

            <ArrowUpRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>
        </motion.div>
      </Container>

      {/* ================= IMPACT CAROUSEL ================= */}
      <div className="relative mt-10 w-full overflow-hidden sm:mt-14">
        {/* Left Fade */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-8
            bg-gradient-to-r
            from-white
            via-white/80
            to-transparent

            sm:w-14
            md:w-20
            lg:w-28
          "
        />

        {/* Right Fade */}
        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full
            w-8
            bg-gradient-to-l
            from-white
            via-white/80
            to-transparent

            sm:w-14
            md:w-20
            lg:w-28
          "
        />

        {/* Moving Track */}
        <motion.div
          className="flex w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        >
          {/* ================= FIRST SET ================= */}
          <div
            className="
              flex
              shrink-0
              gap-3
              pr-3

              sm:gap-4
              sm:pr-4

              md:gap-5
              md:pr-5

              lg:gap-6
              lg:pr-6
            "
          >
            {impactStats.map((item, index) => (
              <div
                key={`first-${item.id}`}
                className="
                  h-[220px]
                  w-[260px]
                  shrink-0

                  sm:h-[240px]
                  sm:w-[300px]

                  md:h-[260px]
                  md:w-[330px]

                  lg:h-[280px]
                  lg:w-[360px]
                "
              >
                <ImpactCard
                  index={index}
                  {...item}
                />
              </div>
            ))}
          </div>

          {/* ================= SECOND SET ================= */}
          <div
            className="
              flex
              shrink-0
              gap-3
              pr-3

              sm:gap-4
              sm:pr-4

              md:gap-5
              md:pr-5

              lg:gap-6
              lg:pr-6
            "
          >
            {impactStats.map((item, index) => (
              <div
                key={`second-${item.id}`}
                className="
                  h-[220px]
                  w-[260px]
                  shrink-0

                  sm:h-[240px]
                  sm:w-[300px]

                  md:h-[260px]
                  md:w-[330px]

                  lg:h-[280px]
                  lg:w-[360px]
                "
              >
                <ImpactCard
                  index={index}
                  {...item}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
