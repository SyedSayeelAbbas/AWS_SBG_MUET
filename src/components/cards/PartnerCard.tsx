import { motion } from "framer-motion";

import Container from "../layout/Container";
import { partners } from "../../constants/home.constants";

/*
  ============================================================
  PARTNER CARD ACCENTS
  ============================================================

  These colors only decorate the cards.
  They do NOT recolor the actual logos.

  AWS          -> Orange
  MUET         -> Purple
  GitHub       -> Dark neutral
  Google Cloud -> Blue
*/

const partnerStyles = [
  {
    glow: "from-[#ff9900]/12",
    line: "bg-[#ff9900]",
    badge: "bg-[#fff7e8] text-[#b56700]",
  },
  {
    glow: "from-[#424085]/12",
    line: "bg-[#424085]",
    badge: "bg-[#f2f1ff] text-[#424085]",
  },
  {
    glow: "from-[#24292f]/10",
    line: "bg-[#24292f]",
    badge: "bg-[#f3f4f6] text-[#24292f]",
  },
  {
    glow: "from-[#4285F4]/12",
    line: "bg-[#4285F4]",
    badge: "bg-[#eef5ff] text-[#2563eb]",
  },
];

export default function Partners() {
  return (
    <section className="section section-tone-warm overflow-hidden">
      <Container>
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mx-auto
            mb-10
            max-w-3xl
            px-4
            text-center

            sm:mb-12
            md:mb-14
          "
        >
          {/* Badge */}

          <span
            className="
              inline-flex
              rounded-full
              border
              border-brand-200
              bg-brand-100
              px-4
              py-2
              text-xs
              font-semibold
              text-brand-700

              sm:px-5
              sm:text-sm
            "
          >
            Our Partners
          </span>

          {/* Heading */}

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-heading

              sm:mt-6
              sm:text-4xl

              md:text-5xl
            "
          >
            Working Together
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-relaxed
              text-body

              sm:mt-6
              sm:text-lg
            "
          >
            Organizations and platforms that support learning,
            collaboration and student-led technology at AWS Student
            Builder Club MUET.
          </p>
        </motion.div>

        {/* =====================================================
            STATIC PARTNERS GRID

            No scrolling.
            No marquee.
            No duplicated cards.
            No grayscale.
        ===================================================== */}

        <div
          className="
            mx-auto
            grid
            max-w-6xl
            grid-cols-1
            gap-5

            sm:grid-cols-2
            sm:gap-6

            lg:grid-cols-4
          "
        >
          {partners.map((partner, index) => {
            const style =
              partnerStyles[index % partnerStyles.length];

            return (
              <motion.div
                key={partner.id}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-brand-100
                  bg-white
                  shadow-[0_10px_35px_rgba(71,45,128,0.07)]
                  transition-shadow
                  duration-300

                  hover:border-brand-200
                  hover:shadow-[0_18px_50px_rgba(71,45,128,0.13)]

                  sm:rounded-[1.75rem]
                "
              >
                {/* =============================================
                    SOFT BRAND GLOW
                ============================================= */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0
                    h-28
                    bg-gradient-to-b
                    ${style.glow}
                    to-transparent
                  `}
                />

                {/* =============================================
                    BRAND COLOR LINE
                ============================================= */}

                <div
                  className={`
                    absolute
                    left-0
                    top-0
                    h-1
                    w-full
                    ${style.line}
                    opacity-80
                  `}
                />

                {/* =============================================
                    CARD CONTENT
                ============================================= */}

                <div
                  className="
                    relative
                    flex
                    min-h-[210px]
                    flex-col
                    items-center
                    justify-center
                    px-6
                    py-8
                    text-center

                    sm:min-h-[230px]
                    sm:px-7
                    sm:py-9

                    lg:min-h-[250px]
                  "
                >
                  {/* Logo Container */}

                  <div
                    className="
                      flex
                      h-24
                      w-full
                      items-center
                      justify-center

                      sm:h-28
                    "
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="
                        max-h-16
                        max-w-[170px]
                        object-contain

                        opacity-100

                        transition-transform
                        duration-300

                        group-hover:scale-105

                        sm:max-h-20
                        sm:max-w-[185px]
                      "
                    />
                  </div>

                  {/* Divider */}

                  <div
                    className="
                      my-5
                      h-px
                      w-12
                      bg-brand-200
                    "
                  />

                  {/* Partner Name */}

                  <h3
                    className="
                      text-base
                      font-bold
                      text-heading

                      sm:text-lg
                    "
                  >
                    {partner.name}
                  </h3>

                  {/* Status */}

                  <span
                    className={`
                      mt-3
                      rounded-full
                      px-3
                      py-1
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]

                      ${style.badge}
                    `}
                  >
                    Partner
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM TEXT
        ===================================================== */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-center
            text-xs
            leading-relaxed
            text-body/70

            sm:mt-10
            sm:text-sm
          "
        >
          Together, we create more opportunities for students to
          learn, build and connect with the wider technology
          ecosystem.
        </motion.p>
      </Container>
    </section>
  );
}