import { motion } from "framer-motion";

import Container from "../layout/Container";
import TestimonialCard from "../cards/TestimonialCard";
import { testimonials } from "../../constants/home.constants";

export default function Testimonials() {
  const testimonialItems = testimonials.slice(0, 4);

  return (
    <section className="section overflow-hidden">
      <Container>
        {/* Section Heading */}
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
            lg:mb-16
          "
        >
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
            Testimonials
          </span>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              tracking-tight
              sm:mt-5
              sm:text-4xl
              lg:mt-6
              lg:text-5xl
            "
          >
            What Students Say
          </h2>

          <p
            className="
              mt-4
              text-sm
              leading-relaxed
              text-body
              sm:mt-5
              sm:text-base
              lg:mt-6
              lg:text-lg
            "
          >
            Real experiences from members who&rsquo;ve grown their
            skills through our workshops and community.
          </p>
        </motion.div>
      </Container>

      {/* Infinite Testimonials */}
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
              duration: 38,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        >
          {/* First Set */}
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
            {testimonialItems.map((item, index) => (
              <div
                key={`first-${item.id}`}
                className="
                  flex
                  h-[250px]
                  w-[270px]
                  shrink-0
                  sm:h-[270px]
                  sm:w-[320px]
                  md:h-[285px]
                  md:w-[350px]
                  lg:h-[300px]
                  lg:w-[380px]
                "
              >
                <TestimonialCard
                  index={index}
                  {...item}
                />
              </div>
            ))}
          </div>

          {/* Second Set */}
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
            {testimonialItems.map((item, index) => (
              <div
                key={`second-${item.id}`}
                className="
                  flex
                  h-[250px]
                  w-[270px]
                  shrink-0
                  sm:h-[270px]
                  sm:w-[320px]
                  md:h-[285px]
                  md:w-[350px]
                  lg:h-[300px]
                  lg:w-[380px]
                "
              >
                <TestimonialCard
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
