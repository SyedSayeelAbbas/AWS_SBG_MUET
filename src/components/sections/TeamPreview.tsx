
import { motion } from "framer-motion";

import Container from "../layout/Container";
import TeamPreviewCard from "../cards/TeamPreviewCard";
import { Button } from "../../components/ui/Button";

import { teamMembers } from "../../constants/home.constants";

export default function TeamPreview() {
  return (
    <section className="section overflow-hidden bg-brand-50/40">
      <Container>
        {/* ===================== Section Header ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="
            mx-auto
            mb-10
            max-w-3xl
            px-4
            text-center
            sm:mb-12
            md:mb-16
          "
        >
          <span
            className="
              inline-flex
              rounded-full
              bg-brand-100
              px-4
              py-2
              text-xs
              font-semibold
              text-brand-700
              sm:px-5
              sm:text-sm
            "
          >
            Executive Team
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              leading-tight
              text-heading
              sm:mt-6
              sm:text-4xl
              md:text-5xl
            "
          >
            Meet Our Leadership
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-relaxed
              text-body
              sm:mt-6
              sm:text-lg
            "
          >
            Students leading innovation, collaboration and cloud learning
            at MUET.
          </p>
        </motion.div>
      </Container>

      {/* ===================== TEAM CAROUSEL ===================== */}
      <div className="relative w-full overflow-hidden">
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
            from-[#f9f7ff]
            via-[#f9f7ff]/80
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
            from-[#f9f7ff]
            via-[#f9f7ff]/80
            to-transparent
            sm:w-14
            md:w-20
            lg:w-28
          "
        />

        {/* ===================== MOVING TRACK ===================== */}
        <motion.div
          className="flex w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: 34,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        >
          {/* ===================== FIRST SET ===================== */}
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
            {teamMembers.map((member, index) => (
              <div
                key={`first-${member.id}`}
                className="
                  aspect-[3/4]
                  w-[270px]
                  shrink-0

                  sm:w-[300px]
                  md:w-[320px]
                  lg:w-[340px]
                  xl:w-[360px]
                "
              >
                <TeamPreviewCard
                  index={index}
                  {...member}
                />
              </div>
            ))}
          </div>

          {/* ===================== SECOND SET ===================== */}
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
            {teamMembers.map((member, index) => (
              <div
                key={`second-${member.id}`}
                className="
                  aspect-[3/4]
                  w-[270px]
                  shrink-0

                  sm:w-[300px]
                  md:w-[320px]
                  lg:w-[340px]
                  xl:w-[360px]
                "
              >
                <TeamPreviewCard
                  index={index}
                  {...member}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ===================== BUTTON ===================== */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="
            mt-10
            px-4
            text-center
            sm:mt-12
            md:mt-16
          "
        >
          <Button>
            View Full Team
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
