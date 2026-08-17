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
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-brand-100 px-5 py-2 text-brand-700">
            Partners
          </span>

          <h2 className="mt-6 text-5xl font-bold text-heading">
            Working Together
          </h2>

          <p className="mt-6 text-lg text-body">
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
          mt-4
          max-w-[1400px]
          overflow-hidden
          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
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
          <div className="flex shrink-0 items-center gap-6 pr-6">
            {firstSet.map((partner, index) => (
              <div
                key={`first-${partner.id}-${index}`}
                className="
                  flex
                  h-28
                  w-56
                  shrink-0
                  items-center
                  justify-center
                  rounded-3xl
                  border
                  border-line
                  bg-white
                  px-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-brand-200
                  hover:shadow-lg
                "
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 max-w-full opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>

          {/* Second complete set */}
          <div className="flex shrink-0 items-center gap-6 pr-6">
            {secondSet.map((partner, index) => (
              <div
                key={`second-${partner.id}-${index}`}
                className="
                  flex
                  h-28
                  w-56
                  shrink-0
                  items-center
                  justify-center
                  rounded-3xl
                  border
                  border-line
                  bg-white
                  px-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-brand-200
                  hover:shadow-lg
                "
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 max-w-full opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}