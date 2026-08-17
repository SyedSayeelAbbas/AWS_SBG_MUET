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
          className="mx-auto mb-16 max-w-3xl text-center"
        >

          <span className="rounded-full bg-brand-100 px-5 py-2 text-brand-700">
            Upcoming Events
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Learn. Build. Network.
          </h2>

          <p className="mt-6 text-lg text-muted">
            Discover workshops, hackathons and community events
            organized by AWS Student Builder Club MUET.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

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