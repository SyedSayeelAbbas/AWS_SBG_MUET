import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

import Container from "../layout/Container";

/*
  ============================================================
  WEBSITE BUILDERS
  ============================================================

  These cards are now displayed in a normal responsive grid.

  There is NO:
  - automatic carousel
  - duplicated card set
  - left/right movement
  - infinite scrolling

  The click-to-flip interaction is kept.
*/

const websiteTeam = [
  {
    id: 1,
    name: "Syed Sayeel Abbas",
    rollNo: "24sw116",
    work: "Frontend and Integration",
    image: "/team/current_tenure/SYEDSAYEELABBAS.webp",
    fact:
      "Enjoys turning ideas into polished interfaces and connecting different parts of a project into one smooth experience.",
  },

  {
    id: 2,
    name: "Muhammad Ahmed Memon",
    rollNo: "24sw019",
    work: "Frontend and Data Management",
    image: "/team/current_tenure/ahmed.webp",
    fact:
      "Focused on building clean user experiences and making sure the frontend works smoothly with the rest of the system.",
  },

  {
    id: 3,
    name: "Saad Abbasi",
    rollNo: "24sw031",
    work: "Backend and Data Collection",
    image: "/team/current_tenure/MuhammadSaadAbbasi.webp",
    fact:
      "Works behind the scenes on backend systems, data collection and keeping the project's information organized.",
  },
];

/*
  ============================================================
  TEAM FLIP CARD
  ============================================================
*/

function TeamFlipCard({
  member,
  index,
}: {
  member: (typeof websiteTeam)[number];
  index: number;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped((previous) => !previous);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
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
        duration: 0.55,
        delay: index * 0.1,
      }}
      className="
        group
        mx-auto
        h-[400px]
        w-full
        max-w-[360px]
        cursor-pointer
        [perspective:1200px]

        sm:h-[430px]

        md:h-[440px]

        lg:h-[450px]
      "
      onClick={toggleFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleFlip();
        }
      }}
      aria-label={`View more about ${member.name}`}
    >
      {/* =====================================================
          FLIP CONTAINER
      ===================================================== */}

      <motion.div
        className="
          relative
          h-full
          w-full
          [transform-style:preserve-3d]
        "
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* =====================================================
            FRONT OF CARD
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            flex
            h-full
            w-full
            flex-col
            overflow-hidden
            rounded-[1.5rem]
            border
            border-brand-100
            bg-white
            shadow-[0_15px_50px_rgba(91,55,170,0.10)]
            [backface-visibility:hidden]
            transition-all
            duration-300

            hover:border-brand-200
            hover:shadow-[0_20px_60px_rgba(91,55,170,0.16)]

            sm:rounded-[2rem]
          "
        >
          {/* ===================================================
              IMAGE
          =================================================== */}

          <div
            className="
              relative
              h-[205px]
              shrink-0
              overflow-hidden

              sm:h-[235px]

              md:h-[245px]

              lg:h-[255px]
            "
          >
            <img
              src={member.image}
              alt={member.name}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-[1.03]
              "
            />

            {/* Dark gradient at image bottom */}

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                h-24
                bg-gradient-to-t
                from-black/40
                via-black/10
                to-transparent
              "
            />

            {/* Member Number */}

            <div
              className="
                absolute
                right-4
                top-4
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-white/20
                text-xs
                font-semibold
                text-white
                backdrop-blur-md

                sm:right-5
                sm:top-5
                sm:h-10
                sm:w-10
                sm:text-sm
              "
            >
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>

          {/* ===================================================
              DETAILS
          =================================================== */}

          <div
            className="
              flex
              flex-1
              flex-col
              justify-center
              px-5
              py-5

              sm:px-7
              sm:py-6
            "
          >
            <p
              className="
                text-xs
                font-medium
                text-brand-600

                sm:text-sm
              "
            >
              Website Team
            </p>

            <h3
              className="
                mt-2
                text-lg
                font-bold
                tracking-tight
                text-heading

                sm:text-2xl
              "
            >
              {member.name}
            </h3>

            <div
              className="
                mt-3
                space-y-1

                sm:mt-4
              "
            >
              {/* Roll Number */}

              <p
                className="
                  text-xs
                  text-body

                  sm:text-sm
                "
              >
                <span className="font-semibold text-heading">
                  Roll No:
                </span>{" "}
                {member.rollNo}
              </p>

              {/* Work */}

              <p
                className="
                  text-xs
                  leading-relaxed
                  text-body

                  sm:text-sm
                "
              >
                <span className="font-semibold text-heading">
                  Work:
                </span>{" "}
                {member.work}
              </p>
            </div>

            {/* =================================================
                CLICK HINT
            ================================================= */}

            <div
              className="
                mt-auto
                flex
                items-center
                gap-2
                pt-4
                text-[11px]
                font-medium
                text-brand-600

                sm:pt-5
                sm:text-xs
              "
            >
              <RotateCcw
                className="
                  h-3.5
                  w-3.5
                  shrink-0
                "
              />

              Click to discover a fact
            </div>
          </div>
        </div>

        {/* =====================================================
            BACK OF CARD
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            flex
            h-full
            w-full
            flex-col
            items-center
            justify-center
            overflow-hidden
            rounded-[1.5rem]
            border
            border-brand-200
            bg-gradient-to-br
            from-brand-700
            via-brand-600
            to-brand-800
            px-5
            py-6
            text-center
            text-white
            shadow-[0_25px_70px_rgba(91,55,170,0.25)]
            [backface-visibility:hidden]
            [transform:rotateY(180deg)]

            sm:rounded-[2rem]
            sm:px-8
          "
        >
          {/* ===================================================
              DECORATIVE CIRCLES
          =================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-40
              w-40
              rounded-full
              bg-white/10
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-20
              -left-16
              h-48
              w-48
              rounded-full
              bg-white/10
            "
          />

          {/* ===================================================
              BACK CONTENT
          =================================================== */}

          <div
            className="
              relative
              z-10
              w-full
            "
          >
            {/* Question Icon */}

            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-white/20
                bg-white/10
                backdrop-blur-md

                sm:h-16
                sm:w-16
              "
            >
              <span
                className="
                  text-xl
                  font-bold

                  sm:text-2xl
                "
              >
                ?
              </span>
            </div>

            {/* Small Label */}

            <p
              className="
                mt-5
                text-xs
                font-medium
                uppercase
                tracking-[0.16em]
                text-white/70

                sm:mt-7
                sm:text-sm
                sm:tracking-[0.2em]
              "
            >
              A Little Fact
            </p>

            {/* Name */}

            <h3
              className="
                mt-2
                text-xl
                font-bold
                text-white

                sm:mt-3
                sm:text-2xl
              "
            >
              {member.name}
            </h3>

            {/* Fact */}

            <p
              className="
                mx-auto
                mt-4
                max-w-sm
                text-sm
                leading-6
                text-white/85

                sm:mt-5
                sm:text-base
                sm:leading-7
              "
            >
              {member.fact}
            </p>

            {/* Flip Back Hint */}

            <div
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-2
                text-[11px]
                font-medium
                text-white/70

                sm:mt-8
                sm:text-xs
              "
            >
              <RotateCcw
                className="
                  h-3.5
                  w-3.5
                  shrink-0
                "
              />

              Click to flip back
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/*
  ============================================================
  WEBSITE TEAM SECTION
  ============================================================
*/

export default function WebsiteTeam() {
  return (
    <section className="section section-tone-mist overflow-hidden">
      <Container>
        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.6,
          }}
          className="
            mx-auto
            mb-10
            max-w-3xl
            px-4
            text-center

            sm:mb-14

            md:mb-16
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
              font-medium
              text-brand-700

              sm:px-5
              sm:text-sm
            "
          >
            Built With Purpose
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
            Meet the Builders
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
            Meet the team behind the design, development and data that bring
            the AWS Student Builder Club MUET website to life.
          </p>
        </motion.div>

        {/* =====================================================
            STATIC BUILDERS GRID

            No automatic movement.
            No duplicate cards.
            No infinite carousel.
        ===================================================== */}

        <div
          className="
            mx-auto
            grid
            max-w-6xl
            grid-cols-1
            gap-6

            sm:grid-cols-2
            sm:gap-7

            lg:grid-cols-3
            lg:gap-8
          "
        >
          {websiteTeam.map((member, index) => (
            <TeamFlipCard
              key={member.id}
              member={member}
              index={index}
            />
          ))}
        </div>

        {/* =====================================================
            SMALL FOOTNOTE
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
            delay: 0.25,
          }}
          className="
            mx-auto
            mt-8
            max-w-xl
            text-center
            text-xs
            leading-relaxed
            text-body/70

            sm:mt-10
            sm:text-sm
          "
        >
          Click any builder card to discover a little more about the person
          behind the project.
        </motion.p>
      </Container>
    </section>
  );
}