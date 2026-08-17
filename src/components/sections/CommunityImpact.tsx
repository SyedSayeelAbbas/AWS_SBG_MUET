import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Container from "../layout/Container";
import ImpactCard from "../cards/ImpactCard";

import { impactStats } from "../../constants/home.constants";

export default function CommunityImpact() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-brand-50/50 via-white to-white">
      {/* Decorative radial glows */}
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-brand-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[380px] w-[380px] rounded-full bg-brand-600/10 blur-[140px]" />

      <Container>
        <div className="grid gap-10 sm:gap-12 lg:gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* ================= STATEMENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="rounded-full bg-brand-100 px-5 py-2 text-brand-700">
              Community Impact
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
              Making a Real
              <span className="gradient-text"> Difference</span>
              &nbsp;in Student Careers
            </h2>

            <p className="mt-6 max-w-md text-lg leading-8 text-body">
              Every workshop, hackathon and mentorship session moves
              our members closer to becoming industry-ready cloud
              engineers &mdash; these numbers are the proof.
            </p>

            <a
              href="#"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-2
                font-semibold
                text-brand-600
              "
            >
              See our full story
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* ================= METRICS ================= */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {impactStats.map((item, index) => (
              <ImpactCard
                key={item.id}
                index={index}
                {...item}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}