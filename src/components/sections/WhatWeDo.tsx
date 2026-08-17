import { motion } from "framer-motion";

import Container from "../layout/Container";
import BentoCard from "../cards/BentoCard";

import { services } from "../../constants/home.constants";

export default function WhatWeDo() {
  return (
    <section className="section bg-brand-50/40">
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
            What We Do
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Learn. Build. Grow.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-body">
            Every activity inside our community is designed to help students
            become industry-ready cloud engineers.
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <BentoCard
              key={service.id}
              index={index}
              featured={false}
              {...service}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}