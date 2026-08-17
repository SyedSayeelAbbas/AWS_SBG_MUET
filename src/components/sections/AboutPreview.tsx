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

      <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-brand-500/10 blur-[140px]" />

      <Container>
        <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">

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
            className="relative order-2 lg:order-1"
          >
            {/* Decorative frame */}
            <div
              className="
                absolute
                -left-4
                -top-4
                h-full
                w-full
                rounded-[36px]
                border
                border-brand-200
                sm:-left-6
                sm:-top-6
              "
            />

            {/* Main image */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                shadow-[0_35px_80px_rgba(107,70,193,.20)]
              "
            >
              <img
                src={aboutPreview.image}
                alt={aboutPreview.title}
                className="
                  h-[420px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                  sm:h-[480px]
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
                -bottom-8
                -right-6
                z-10
                sm:-right-10
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
                  gap-3
                  rounded-2xl
                  border
                  border-white/70
                  bg-white/90
                  px-6
                  py-4
                  shadow-[0_20px_50px_rgba(107,70,193,.25)]
                  backdrop-blur-xl
                  sm:px-7
                  sm:py-4
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[linear-gradient(135deg,#7C3AED,#8C52FF)]
                    text-white
                    shadow-[0_8px_20px_rgba(124,58,237,.25)]
                  "
                >
                  <Sparkles size={20} />
                </div>

                {/* Text */}
                <div>
                  <p className="text-2xl font-bold leading-none text-heading">
                    3+ Years
                  </p>

                  <p className="mt-1 text-sm text-body">
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
            <span className="inline-flex rounded-full bg-brand-100 px-5 py-2 text-sm font-medium text-brand-700">
              {aboutPreview.badge}
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-4xl font-bold leading-tight text-heading sm:text-5xl">
              {aboutPreview.title}
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-body">
              {aboutPreview.description}
            </p>

            {/* =================================================
                FEATURE HIGHLIGHTS
            ================================================= */}

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                      rounded-2xl
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

            <Button className="mt-10">
              Learn More

              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}