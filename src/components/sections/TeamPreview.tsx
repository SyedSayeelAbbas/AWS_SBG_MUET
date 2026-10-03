import { motion } from "framer-motion";

import Container from "../layout/Container";
import TeamPreviewCard from "../cards/TeamPreviewCard";
import { Button } from "../../components/ui/Button";

import { fullTeam } from "../../constants/team";

/*
  ============================================================
  LEADERSHIP JOURNEY
  ============================================================

  Exact order:

  Munsif → Jawad → Sarwat → Rania
*/

const leaderConfig = [
  {
    name: "Captain Munsif Raza",
    displayRole: "Founding Captain",
  },
  {
    name: "Captain Jawad Soomro",
    displayRole: "2nd Tenure Captain",
  },
  {
    name: "Captain Sarwat Aijaz",
    displayRole: "3rd Tenure Captain",
  },
  {
    name: "Rania Sadia Shah",
    displayRole: "Current Leader",
  },
];

/*
  ============================================================
  GET EXACT MEMBERS FROM constants/team.ts
  ============================================================

  Exact equality is intentional.

  Your constants contain other people with names such as
  Jawad Soomro and Sarwat Aijaz in older team lists.

  Using the full exact Captain names prevents the wrong
  profile from being selected.
*/

const featuredLeaders = leaderConfig
  .map((leader) => {
    const member = fullTeam.find(
      (teamMember) => teamMember.name === leader.name,
    );

    if (!member) {
      return null;
    }

    return {
      ...member,
      displayRole: leader.displayRole,
    };
  })
  .filter(
    (
      member,
    ): member is NonNullable<typeof member> => member !== null,
  );

/*
  ============================================================
  IMAGE PATH HELPER
  ============================================================

  Files inside Vite's public folder are accessed from "/".

  Example:

  public/team/current_tenure/Rania.webp

  becomes:

  /team/current_tenure/Rania.webp

  ImageKit URLs are returned unchanged.
*/

function getImagePath(image: string) {
  if (!image) {
    return "/logo.png";
  }

  if (image.startsWith("public/")) {
    return `/${image.slice("public/".length)}`;
  }

  return image;
}

/*
  ============================================================
  TEAM PREVIEW
  ============================================================
*/

export default function TeamPreview() {
  return (
    <section className="section section-tone-lavender overflow-hidden">
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
            Leadership Journey
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
            Meet Our Leadership
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
            Meet the leaders who have guided AWS Student Builder Club MUET
            from its founding tenure to the present.
          </p>
        </motion.div>

        {/* =====================================================
            LEADERSHIP CARDS

            Munsif → Jawad → Sarwat → Rania

            Static cards.
            No carousel.
            No side movement.
        ===================================================== */}

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            gap-6

            sm:grid-cols-2
            sm:gap-7

            lg:grid-cols-4
            lg:gap-6

            xl:gap-8
          "
        >
          {featuredLeaders.map((member, index) => (
            <motion.div
              key={member.name}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="h-full"
            >
              <TeamPreviewCard
                index={index}
                name={member.name}
                role={member.displayRole}
                image={getImagePath(member.image)}
              />
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            LEADERSHIP TIMELINE
            Desktop only
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            mx-auto
            mt-10
            hidden
            max-w-4xl

            lg:block
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-4
              text-sm
              font-semibold
              text-brand-700
            "
          >
            <span>Munsif</span>

            <span className="text-lg text-brand-400">
              →
            </span>

            <span>Jawad</span>

            <span className="text-lg text-brand-400">
              →
            </span>

            <span>Sarwat</span>

            <span className="text-lg text-brand-400">
              →
            </span>

            <span>Rania</span>
          </div>

          <p
            className="
              mt-2
              text-center
              text-xs
              text-body
            "
          >
            Founding Tenure → Current Tenure
          </p>
        </motion.div>

        {/* =====================================================
            VIEW FULL TEAM
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="
            mt-10
            text-center

            sm:mt-12
          "
        >
          <Button>
            View Full Team
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}