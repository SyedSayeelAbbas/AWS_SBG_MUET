import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Container from "../layout/Container";
import TestimonialCard from "../cards/TestimonialCard";
import { testimonials } from "../../constants/home.constants";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  };

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  return (
    <section className="section section-tone-sky overflow-hidden">
      <Container>
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
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
            duration: 0.6,
          }}
          className="
            mx-auto
            mb-10
            max-w-3xl
            px-4
            text-center

            sm:mb-12
            lg:mb-14
          "
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-brand-200
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
            Testimonials
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              tracking-tight
              text-heading

              sm:mt-6
              sm:text-4xl

              lg:text-5xl
            "
          >
            What People Say
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-body

              sm:mt-6
              sm:text-base

              lg:text-lg
            "
          >
            Hear from guest speakers, industry professionals and community
            members who have experienced our events and initiatives.
          </p>
        </motion.div>

        {/* =====================================================
            AUTO SLIDER
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            max-w-3xl
          "
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* ===================================================
              TESTIMONIAL
          =================================================== */}

          <div
            className="
              relative
              min-h-[360px]
              overflow-hidden

              sm:min-h-[380px]
            "
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{
                  opacity: 0,
                  x: 80,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -80,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                drag="x"
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0.15}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) {
                    nextSlide();
                  }

                  if (info.offset.x > 60) {
                    previousSlide();
                  }
                }}
                className="
                  absolute
                  inset-x-0
                  top-0
                  cursor-grab
                  active:cursor-grabbing
                "
              >
                <TestimonialCard
                  {...testimonials[activeIndex]}
                  index={0}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ===================================================
              DOT NAVIGATION
          =================================================== */}

          <div
            className="
              mt-7
              flex
              items-center
              justify-center
              gap-2
            "
          >
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className={`
                  h-2.5
                  rounded-full
                  transition-all
                  duration-300

                  ${
                    activeIndex === index
                      ? "w-8 bg-brand-600"
                      : "w-2.5 bg-brand-200 hover:bg-brand-300"
                  }
                `}
              />
            ))}
          </div>

          {/* ===================================================
              OPTIONAL COUNTER
          =================================================== */}

          <div
            className="
              mt-3
              text-center
              text-xs
              font-medium
              text-body/70
            "
          >
            {String(activeIndex + 1).padStart(2, "0")}
            {" / "}
            {String(testimonials.length).padStart(2, "0")}
          </div>
        </div>
      </Container>
    </section>
  );
}