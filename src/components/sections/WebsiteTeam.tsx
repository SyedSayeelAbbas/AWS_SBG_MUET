
import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

import Container from "../layout/Container";

const websiteTeam = [
  {
    id: 1,
    name: "Syed Sayeel Abbas",
    rollNo: "24SW116",
    work: "Frontend and Integration",
    image: "/team/sayeel.webp",
    fact:
      "Enjoys turning ideas into polished interfaces and connecting different parts of a project into one smooth experience.",
  },
  {
    id: 2,
    name: "Ahmed Memon",
    rollNo: "24SW019",
    work: "Frontend and Integration",
    image: "/team/ahmed.webp",
    fact:
      "Focused on building clean user experiences and making sure the frontend works smoothly with the rest of the system.",
  },
  {
    id: 3,
    name: "Saad Abbasi",
    rollNo: "24SW031",
    work: "Backend and Data Collection",
    image: "/team/saad.webp",
    fact:
      "Works behind the scenes on backend systems, data collection and keeping the project's information organized.",
  },
];

function TeamFlipCard({
  member,
  index,
}: {
  member: (typeof websiteTeam)[number];
  index: number;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      className="
        group
        h-[400px]
        w-[280px]
        shrink-0
        cursor-pointer
        [perspective:1200px]

        sm:h-[430px]
        sm:w-[320px]

        md:h-[440px]
        md:w-[340px]

        lg:h-[450px]
        lg:w-[360px]
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
            FRONT
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
            transition-shadow
            duration-300

            sm:rounded-[2rem]
          "
        >
          {/* Image */}
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
                duration-700
                group-hover:scale-105
              "
            />

            {/* Image gradient */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                h-24
                bg-gradient-to-t
                from-black/40
                to-transparent
              "
            />

            {/* Number */}
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
              0{index + 1}
            </div>
          </div>

          {/* Details */}
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
            <p className="text-xs font-medium text-brand-600 sm:text-sm">
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

            <div className="mt-3 space-y-1 sm:mt-4">
              <p className="text-xs text-body sm:text-sm">
                <span className="font-semibold text-heading">
                  Roll No:
                </span>{" "}
                {member.rollNo}
              </p>

              <p className="text-xs text-body sm:text-sm">
                <span className="font-semibold text-heading">
                  Work:
                </span>{" "}
                {member.work}
              </p>
            </div>

            {/* Click hint */}
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
              <RotateCcw className="h-3.5 w-3.5 shrink-0" />
              Click to discover a fact
            </div>
          </div>
        </div>

        {/* =====================================================
            BACK
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
          {/* Decorative elements */}
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

          <div className="relative z-10 w-full">
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
              <span className="text-xl font-bold sm:text-2xl">
                ?
              </span>
            </div>

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

            <h3 className="mt-2 text-xl font-bold sm:mt-3 sm:text-2xl">
              {member.name}
            </h3>

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
              <RotateCcw className="h-3.5 w-3.5 shrink-0" />
              Click to flip back
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function WebsiteTeam() {
  return (
    <section className="section overflow-hidden bg-brand-50/40">
      <Container>
        {/* =====================================================
            HEADING
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
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
          <span
            className="
              inline-flex
              rounded-full
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
      </Container>

      {/* =====================================================
          INFINITE TEAM CAROUSEL
      ===================================================== */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-8
            bg-gradient-to-r
            from-[#f9f7ff]
            via-[#f9f7ff]/80
            to-transparent

            sm:w-14
            md:w-20
            lg:w-28
          "
        />

        {/* Right Fade */}
        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full
            w-8
            bg-gradient-to-l
            from-[#f9f7ff]
            via-[#f9f7ff]/80
            to-transparent

            sm:w-14
            md:w-20
            lg:w-28
          "
        />

        {/* Moving Track */}
        <motion.div
          className="flex w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: 32,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        >
          {/* First Set */}
          <div
            className="
              flex
              shrink-0
              gap-3
              pr-3

              sm:gap-4
              sm:pr-4

              md:gap-5
              md:pr-5

              lg:gap-6
              lg:pr-6
            "
          >
            {websiteTeam.map((member, index) => (
              <TeamFlipCard
                key={`first-${member.id}`}
                member={member}
                index={index}
              />
            ))}
          </div>

          {/* Second Set */}
          <div
            className="
              flex
              shrink-0
              gap-3
              pr-3

              sm:gap-4
              sm:pr-4

              md:gap-5
              md:pr-5

              lg:gap-6
              lg:pr-6
            "
          >
            {websiteTeam.map((member, index) => (
              <TeamFlipCard
                key={`second-${member.id}`}
                member={member}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
