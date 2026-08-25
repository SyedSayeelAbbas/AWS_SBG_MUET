
import { motion } from "framer-motion";

import Container from "../layout/Container";
import BentoCard from "../cards/BentoCard";

import { services } from "../../constants/home.constants";

export default function WhatWeDo() {
  return (
    <section className="section overflow-hidden bg-brand-50/40">
      <Container>
        {/* =====================================================
            SECTION HEADING
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="
            mx-auto
            mb-10
            max-w-3xl
            px-3
            text-center
            sm:mb-12
            sm:px-4
            lg:mb-16
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
              font-medium
              text-brand-700
              sm:px-5
              sm:py-2
              sm:text-sm
            "
          >
            What We Do
          </span>

          {/* Heading */}
          <h2
            className="
              mt-4
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-heading
              sm:mt-5
              sm:text-4xl
              lg:mt-6
              lg:text-5xl
            "
          >
            Learn. Build. Grow.
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-relaxed
              text-body
              sm:mt-5
              sm:text-base
              lg:mt-6
              lg:text-lg
            "
          >
            Every activity inside our community is designed to help students
            become industry-ready cloud engineers.
          </p>
        </motion.div>

        {/* =====================================================
            SERVICES GRID

            Mobile  : 2 columns × 3 rows
            Tablet  : 2 columns × 3 rows
            Desktop : 3 columns × 2 rows
        ===================================================== */}
        <div
          className="
            grid
            w-full
            grid-cols-2
            gap-3
            sm:gap-5
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {services.slice(0, 6).map((service, index) => (
            <div
              key={service.id}
              className="
                min-w-0
                w-full
                aspect-square
              "
            >
              <BentoCard
                index={index}
                featured={false}
                {...service}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
