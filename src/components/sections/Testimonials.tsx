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
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-brand-100 px-5 py-2 text-sm font-medium text-brand-700">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            What Students Say
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-body">
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
            w-16
            bg-gradient-to-r
            from-white
            via-white/80
            to-transparent
            sm:w-24
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
            w-16
            bg-gradient-to-l
            from-white
            via-white/80
            to-transparent
            sm:w-24
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
          <div className="flex shrink-0 gap-6 pr-6">
            {testimonialItems.map((item, index) => (
              <div
                key={`first-${item.id}`}
                className="
                  flex
                  h-[280px]
                  w-[300px]
                  shrink-0
                  sm:h-[290px]
                  sm:w-[350px]
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
          <div className="flex shrink-0 gap-6 pr-6">
            {testimonialItems.map((item, index) => (
              <div
                key={`second-${item.id}`}
                className="
                  flex
                  h-[280px]
                  w-[300px]
                  shrink-0
                  sm:h-[290px]
                  sm:w-[350px]
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