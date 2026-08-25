import { motion } from "framer-motion";

import Container from "../layout/Container";
import TimelineCard from "../cards/TimelineCard";
import { timeline } from "../../constants/home.constants";

export default function JourneyTimeline() {
  return (
    <section className="section relative overflow-hidden">
      <div className="aurora" />

      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl px-4 text-center sm:mb-16 md:mb-20"
        >
          <span className="inline-block rounded-full bg-brand-100 px-4 py-2 text-xs font-semibold text-brand-700 sm:px-5 sm:text-sm">
            Our Journey
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight sm:mt-6 sm:text-4xl md:text-5xl">
            Building the Next Generation
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            of Cloud Engineers
          </h2>

          <p className="mx-auto mt-5 max-w-2xl px-2 text-base leading-relaxed text-body sm:mt-6 sm:px-0 sm:text-lg">
            Our story is driven by students passionate about cloud,
            innovation and community.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mx-auto w-full max-w-4xl px-2 sm:px-4">
          {timeline.map((item, index) => (
            <TimelineCard
              key={item.year}
              {...item}
              isLast={index === timeline.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}