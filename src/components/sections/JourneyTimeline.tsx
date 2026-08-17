import { motion } from "framer-motion";

import Container from "../layout/Container";
import TimelineCard from "../cards/TimelineCard";
import { timeline } from "../../constants/home.constants";

export default function JourneyTimeline() {
  return (
    <section className="section relative overflow-hidden">

      <div className="aurora" />

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="rounded-full bg-brand-100 px-5 py-2 text-sm font-semibold text-brand-700">
            Our Journey
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Building the Next Generation
            <br />
            of Cloud Engineers
          </h2>

          <p className="mt-6 text-lg text-body">
            Our story is driven by students passionate about cloud,
            innovation and community.
          </p>

        </motion.div>

        <div className="mx-auto max-w-4xl">

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