import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Rocket, ArrowRight } from "lucide-react";

import Container from "../layout/Container";
import { ROUTES } from "../../constants/routes";
import { fullTeam } from "../../constants/team";

const tenureCount = new Set(fullTeam.map((m) => m.tenure)).size;

export default function TeamJoinCTA() {
  return (
    <section className="section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-brand-700
            px-7
            py-14
            text-center
            shadow-[0_30px_80px_rgba(76,29,149,0.35)]
            md:px-14
            md:py-16
          "
        >
          {/* Glow layers — lighter tints sitting on the dark panel */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-72
              w-72
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/10
              blur-[100px]
            "
          />
          <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-fuchsia-400/20 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-brand-400/20 blur-[90px]" />

          {/* Subtle grid texture for depth */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.07]
              [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)]
              [background-size:32px_32px]
            "
          />

          <div className="relative">
            {/* Icon badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="
                mx-auto
                mb-6
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-white/20
                bg-white/10
                text-white
                shadow-lg
                backdrop-blur-md
              "
            >
              <Rocket size={24} />
            </motion.div>

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Careers at the Club
            </span>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black text-white md:text-5xl">
              Want to build <span className="text-white">with us?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/85">
              We open new core team positions every semester. Bring your
              skills in cloud, design, content or events — and grow with a
              team that ships real projects.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to={ROUTES.JOIN}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-white
                  px-7
                  py-3.5
                  font-semibold
                  text-brand-700
                  shadow-xl
                  shadow-black/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-brand-50
                  hover:shadow-2xl
                "
              >
                Apply to Join
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to={ROUTES.CONTACT}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  border
                  border-white/25
                  bg-white/5
                  px-7
                  py-3.5
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/40
                  hover:bg-white/15
                "
              >
                Contact the Team
              </Link>
            </div>

            {/* Trust row */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-7 text-sm text-white">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                {fullTeam.length}+ members
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                {tenureCount} tenures led
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Since 2023
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}