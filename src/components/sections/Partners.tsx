import { motion } from "framer-motion";

import Container from "../layout/Container";
import { partners } from "../../constants/home.constants";

export default function Partners() {
  // Two complete sets for a seamless infinite loop
  const firstSet = partners;
  const secondSet = partners;

  return (
    <section className="section overflow-hidden bg-brand-50/40">
      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl px-4 text-center sm:mb-14 md:mb-16">
          <span className="inline-block rounded-full bg-brand-100 px-4 py-2 text-xs font-semibold text-brand-700 sm:px-5 sm:text-sm">
            Partners
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-heading sm:mt-6 sm:text-4xl md:text-5xl">
            Working Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-body sm:mt-6 sm:text-lg">
            Backed by organizations that share our commitment to
            student-led cloud innovation.
          </p>
        </div>
      </Container>

      {/* Full-bleed marquee */}
      <div
        className="
          relative
          mx-auto
          mt-2
          w-full
          max-w-[1400px]
          overflow-hidden
          px-0
          [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]
        "
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="flex w-max items-center"
        >
          {/* First complete set */}
          <div className="flex shrink-0 items-center gap-3 pr-3 sm:gap-5 sm:pr-5 md:gap-6 md:pr-6">
            {firstSet.map((partner, index) => (
              <div
                key={`first-${partner.id}-${index}`}
                className="
                  flex
                  h-20
                  w-40
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-line
                  bg-white
                  px-5
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-brand-200
                  hover:shadow-lg
                  sm:h-24
                  sm:w-48
                  sm:rounded-3xl
                  sm:px-6
                  md:h-28
                  md:w-56
                  md:px-8
                "
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="
                    max-h-7
                    max-w-full
                    opacity-70
                    grayscale
                    transition
                    duration-300
                    hover:opacity-100
                    hover:grayscale-0
                    sm:max-h-9
                    md:max-h-10
                  "
                />
              </div>
            ))}
          </div>

          {/* Second complete set */}
          <div className="flex shrink-0 items-center gap-3 pr-3 sm:gap-5 sm:pr-5 md:gap-6 md:pr-6">
            {secondSet.map((partner, index) => (
              <div
                key={`second-${partner.id}-${index}`}
                className="
                  flex
                  h-20
                  w-40
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-line
                  bg-white
                  px-5
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-brand-200
                  hover:shadow-lg
                  sm:h-24
                  sm:w-48
                  sm:rounded-3xl
                  sm:px-6
                  md:h-28
                  md:w-56
                  md:px-8
                "
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="
                    max-h-7
                    max-w-full
                    opacity-70
                    grayscale
                    transition
                    duration-300
                    hover:opacity-100
                    hover:grayscale-0
                    sm:max-h-9
                    md:max-h-10
                  "
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
