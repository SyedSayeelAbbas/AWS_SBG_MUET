import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import Container from "../layout/Container";
import { Button } from "../../components/ui/Button";

import { aboutPreview } from "../../constants/home.constants";

export default function AboutPreview() {
  return (
    <section className="section relative overflow-hidden bg-white">
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-[280px] w-[280px] rounded-full bg-brand-500/10 blur-[100px] sm:h-[420px] sm:w-[420px] sm:blur-[140px]" />

      <Container>
        <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">

          {/* =================================================
              VISUAL
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative order-2 mt-4 lg:order-1 lg:mt-0"
          >
            {/* Decorative frame */}
            <div
              className="
                absolute
                -left-3
                -top-3
                h-full
                w-full
                rounded-[24px]
                border
                border-brand-200
                sm:-left-4
                sm:-top-4
                sm:rounded-[30px]
                md:-left-6
                md:-top-6
                md:rounded-[36px]
              "
            />

            {/* Main image */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[20px]
                shadow-[0_20px_50px_rgba(107,70,193,.16)]
                sm:rounded-[28px]
                sm:shadow-[0_35px_80px_rgba(107,70,193,.20)]
                md:rounded-[32px]
              "
            >
              <img
                src={aboutPreview.image}
                alt={aboutPreview.title}
                className="
                  h-[260px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                  sm:h-[420px]
                  md:h-[480px]
                "
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
            </div>

            {/* =================================================
                FLOATING YEARS CARD
            ================================================= */}

            {/* Entrance animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                -bottom-5
                -right-2
                z-10
                sm:-bottom-8
                sm:-right-6
                md:-right-10
              "
            >
              {/* Continuous floating animation */}
              <motion.div
                animate={{
                  y: [0, -9, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  flex
                  items-center
                  gap-2.5
                  rounded-xl
                  border
                  border-white/70
                  bg-white/90
                  px-4
                  py-3
                  shadow-[0_12px_30px_rgba(107,70,193,.20)]
                  backdrop-blur-xl
                  sm:gap-3
                  sm:rounded-2xl
                  sm:px-6
                  sm:py-4
                  sm:shadow-[0_20px_50px_rgba(107,70,193,.25)]
                  md:px-7
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[linear-gradient(135deg,#7C3AED,#8C52FF)]
                    text-white
                    shadow-[0_8px_20px_rgba(124,58,237,.25)]
                    sm:h-11
                    sm:w-11
                    sm:rounded-xl
                  "
                >
                  <Sparkles size={16} className="sm:hidden" />
                  <Sparkles size={20} className="hidden sm:block" />
                </div>

                {/* Text */}
                <div>
                  <p className="text-lg font-bold leading-none text-heading sm:text-2xl">
                    3+ Years
                  </p>

                  <p className="mt-1 text-xs text-body sm:text-sm">
                    Building the community
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* =================================================
              CONTENT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="order-1 lg:order-2"
          >
            {/* Badge */}
            <span className="inline-flex rounded-full bg-brand-100 px-4 py-1.5 text-xs font-medium text-brand-700 sm:px-5 sm:py-2 sm:text-sm">
              {aboutPreview.badge}
            </span>

            {/* Heading */}
            <h2 className="mt-5 text-3xl font-bold leading-tight text-heading sm:mt-6 sm:text-4xl md:text-5xl">
              {aboutPreview.title}
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm leading-7 text-body sm:mt-6 sm:text-lg sm:leading-8">
              {aboutPreview.description}
            </p>

            {/* =================================================
                FEATURE HIGHLIGHTS
            ================================================= */}

            <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
              {aboutPreview.highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.text}
                    initial={{
                      opacity: 0,
                      y: 16,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.4,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-line
                      bg-pale-purple/60
                      px-4
                      py-3
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-brand-200
                      hover:bg-brand-50/70
                      hover:shadow-sm
                      sm:rounded-2xl
                    "
                  >
                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-light-purple
                        text-brand-600
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    >
                      <Icon size={18} />
                    </div>

                    {/* Text */}
                    <span className="text-sm font-medium text-heading">
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* =================================================
                CTA
            ================================================= */}

            <Button className="mt-8 w-full sm:mt-10 sm:w-auto">
              Learn More

              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}