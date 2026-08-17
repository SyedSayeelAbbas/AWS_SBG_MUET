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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      className="group h-[430px] w-full cursor-pointer [perspective:1200px]"
      onClick={() => setIsFlipped((prev) => !prev)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setIsFlipped((prev) => !prev);
        }
      }}
      aria-label={`View more about ${member.name}`}
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
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
            rounded-[2rem]
            border
            border-brand-100
            bg-white
            shadow-[0_15px_50px_rgba(91,55,170,0.10)]
            [backface-visibility:hidden]
            transition-shadow
            duration-300
            group-hover:shadow-[0_25px_70px_rgba(91,55,170,0.18)]
          "
        >
          {/* Image */}
          <div className="relative h-[250px] overflow-hidden">
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
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />

            {/* Number */}
            <div
              className="
                absolute
                right-5
                top-5
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-white/20
                text-sm
                font-semibold
                text-white
                backdrop-blur-md
              "
            >
              0{index + 1}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-1 flex-col justify-center px-7 py-6">
            <p className="text-sm font-medium text-brand-600">
              Website Team
            </p>

            <h3 className="mt-2 text-2xl font-bold tracking-tight text-heading">
              {member.name}
            </h3>

            <div className="mt-4 space-y-1">
              <p className="text-sm text-body">
                <span className="font-semibold text-heading">Roll No:</span>{" "}
                {member.rollNo}
              </p>

              <p className="text-sm text-body">
                <span className="font-semibold text-heading">Work:</span>{" "}
                {member.work}
              </p>
            </div>

            {/* Click hint */}
            <div className="mt-auto flex items-center gap-2 pt-5 text-xs font-medium text-brand-600">
              <RotateCcw className="h-3.5 w-3.5" />
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
            rounded-[2rem]
            border
            border-brand-200
            bg-gradient-to-br
            from-brand-700
            via-brand-600
            to-brand-800
            p-8
            text-center
            text-white
            shadow-[0_25px_70px_rgba(91,55,170,0.25)]
            [backface-visibility:hidden]
            [transform:rotateY(180deg)]
          "
        >
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-white/10" />

          <div className="relative z-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
              <span className="text-2xl font-bold">?</span>
            </div>

            <p className="mt-7 text-sm font-medium uppercase tracking-[0.2em] text-white/70">
              A Little Fact
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              {member.name}
            </h3>

            <p className="mx-auto mt-5 max-w-sm text-base leading-7 text-white/85">
              {member.fact}
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs font-medium text-white/70">
              <RotateCcw className="h-3.5 w-3.5" />
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
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-brand-100 px-5 py-2 text-sm font-medium text-brand-700">
            Built With Purpose
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-heading sm:text-5xl">
            Meet the Builders
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-body">
            Meet the team behind the design, development and data that bring
            the AWS Student Builder Club MUET website to life.
          </p>
        </motion.div>

        {/* =====================================================
            TEAM CARDS
        ===================================================== */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {websiteTeam.map((member, index) => (
            <TeamFlipCard
              key={member.id}
              member={member}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}