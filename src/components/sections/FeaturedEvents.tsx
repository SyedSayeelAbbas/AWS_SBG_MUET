import { motion } from "framer-motion";

import Container from "../layout/Container";
import EventCard from "../cards/EventCard";
import { featuredEvents } from "../../constants/home.constants";

export default function FeaturedEvents() {
  return (
    <section className="section bg-brand-50/30">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl px-2 text-center sm:mb-16 sm:px-0"
        >

          <span className="inline-flex rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-700 sm:px-5 sm:py-2 sm:text-sm">
            Upcoming Events
          </span>

          <h2 className="mt-5 text-3xl font-bold sm:mt-6 sm:text-5xl">
            Learn. Build. Network.
          </h2>

          <p className="mt-4 text-sm leading-6 text-muted sm:mt-6 sm:text-lg sm:leading-7">
            Discover workshops, hackathons and community events
            organized by AWS Student Builder Club MUET.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">

          {featuredEvents.map((event, index) => (

            <EventCard
              key={event.id}
              index={index}
              {...event}
            />

          ))}

        </div>

      </Container>

    </section>
  );
}