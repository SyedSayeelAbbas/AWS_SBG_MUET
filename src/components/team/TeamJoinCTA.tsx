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
            rounded-[24px]
            border
            border-white/10
            bg-brand-700
            px-5
            py-10
            text-center
            shadow-[0_20px_50px_rgba(76,29,149,0.35)]
            sm:rounded-[30px]
            sm:px-8
            sm:py-12
            sm:shadow-[0_30px_80px_rgba(76,29,149,0.35)]
            md:rounded-[36px]
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
              h-48
              w-48
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/10
              blur-[70px]
              sm:h-72
              sm:w-72
              sm:blur-[100px]
            "
          />
          <div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-fuchsia-400/20 blur-[60px] sm:-left-16 sm:-top-16 sm:h-40 sm:w-40 sm:blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-brand-400/20 blur-[60px] sm:-bottom-16 sm:-right-16 sm:h-40 sm:w-40 sm:blur-[90px]" />

          {/* Subtle grid texture for depth */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.07]
              [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)]
              [background-size:24px_24px]
              sm:[background-size:32px_32px]
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
                mb-5
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-white/20
                bg-white/10
                text-white
                shadow-lg
                backdrop-blur-md
                sm:mb-6
                sm:h-14
                sm:w-14
              "
            >
              <Rocket size={20} className="sm:hidden" />
              <Rocket size={24} className="hidden sm:block" />
            </motion.div>

            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white sm:text-sm sm:tracking-[0.2em]">
              Careers at the Club
            </span>

            <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-black text-white sm:mt-4 sm:text-3xl md:text-5xl">
              Want to build <span className="text-white">with us?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/85 sm:mt-5 sm:text-base sm:leading-7">
              We open new core team positions every semester. Bring your
              skills in cloud, design, content or events — and grow with a
              team that ships real projects.
            </p>

            {/* Actions */}
            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
              <Link
                to={ROUTES.JOIN}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-brand-700
                  shadow-xl
                  shadow-black/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-brand-50
                  hover:shadow-2xl
                  sm:px-7
                  sm:py-3.5
                  sm:text-base
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
                  justify-center
                  gap-2
                  rounded-2xl
                  border
                  border-white/25
                  bg-white/5
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/40
                  hover:bg-white/15
                  sm:px-7
                  sm:py-3.5
                  sm:text-base
                "
              >
                Contact the Team
              </Link>
            </div>

            {/* Trust row */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 border-t border-white/10 pt-6 text-xs text-white sm:mt-10 sm:gap-x-8 sm:gap-y-3 sm:pt-7 sm:text-sm">
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