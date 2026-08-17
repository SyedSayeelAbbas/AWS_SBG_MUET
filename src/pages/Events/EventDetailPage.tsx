import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  Link,
  useParams,
} from "react-router-dom";

import Container from "../../components/layout/Container";
import SectionWrapper from "../../components/common/SectionWrapper";
import SectionHeading from "../../components/common/SectionHeading";
import { Button } from "../../components/ui/Button";

import { getEventById } from "../../constants/events";

export default function EventDetailPage() {
  /*
   * ============================================================
   * ROUTE PARAMETER
   * ============================================================
   */

  const { id } = useParams<{ id: string }>();

  /*
   * ============================================================
   * GET EVENT FROM CENTRALIZED EVENT DATA
   * ============================================================
   */

  const event = id ? getEventById(id) : undefined;

  /*
   * ============================================================
   * EVENT NOT FOUND
   * ============================================================
   */

  if (!event) {
    return (
      <main>
        <SectionWrapper background="gradient">
          <Container>
            <div className="flex min-h-[65vh] flex-col items-center justify-center text-center">
              {/* Icon */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-3xl
                  border
                  border-brand-200/60
                  bg-white/70
                  text-brand-600
                  shadow-xl
                  backdrop-blur-xl
                "
              >
                <CalendarDays size={36} />
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
                className="
                  mt-8
                  text-4xl
                  font-black
                  tracking-tight
                  text-heading
                  md:text-5xl
                "
              >
                Event Not Found
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="
                  mt-4
                  max-w-lg
                  text-base
                  leading-7
                  text-muted
                "
              >
                The event you're looking for doesn't exist or may have been
                removed.
              </motion.p>

              {/* Back button */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
                className="mt-8"
              >
                <Link to="/events">
                  <Button
                    size="lg"
                    showArrow
                  >
                    Back to Events
                  </Button>
                </Link>
              </motion.div>
            </div>
          </Container>
        </SectionWrapper>
      </main>
    );
  }

  /*
   * ============================================================
   * MAIN PAGE
   * ============================================================
   */

  return (
    <main>
      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}

      <SectionWrapper
        background="gradient"
        className="pt-28 md:pt-32 lg:pt-36"
      >
        <Container>
          {/* Back navigation */}
          <motion.div
            initial={{
              opacity: 0,
              x: -15,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <Link
              to="/events"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-gray-500
                transition-colors
                duration-300
                hover:text-brand-600
              "
            >
              <ArrowLeft
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
              />

              Back to Events
            </Link>
          </motion.div>

          {/* Hero content */}
          <div
            className="
              mt-10
              grid
              items-center
              gap-12
              lg:grid-cols-[1.1fr_0.9fr]
            "
          >
            {/* ================================================= */}
            {/* LEFT CONTENT */}
            {/* ================================================= */}

            <div>
              {/* Category */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-brand-200/70
                  bg-white/65
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-brand-700
                  shadow-sm
                  backdrop-blur-xl
                "
              >
                <Sparkles size={15} />

                {event.category}
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mt-6
                  max-w-3xl
                  text-5xl
                  font-black
                  leading-[1.05]
                  tracking-tight
                  text-heading
                  md:text-6xl
                  lg:text-7xl
                "
              >
                {event.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.25,
                }}
                className="
                  mt-7
                  max-w-2xl
                  text-lg
                  leading-8
                  text-muted
                "
              >
                {event.description}
              </motion.p>

              {/* ================================================= */}
              {/* EVENT META */}
              {/* ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.35,
                }}
                className="
                  mt-8
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >
                <MetaItem
                  icon={CalendarDays}
                  label="Date"
                  value={event.date}
                />

                <MetaItem
                  icon={Clock3}
                  label="Time"
                  value={event.time}
                />

                <MetaItem
                  icon={MapPin}
                  label="Location"
                  value={event.location}
                />

                <MetaItem
                  icon={Users}
                  label="Audience"
                  value={event.attendees}
                />
              </motion.div>

              {/* ================================================= */}
              {/* CTA BUTTONS */}
              {/* ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.45,
                }}
                className="
                  mt-9
                  flex
                  flex-wrap
                  gap-4
                "
              >
                <Button
                  size="lg"
                  showArrow
                >
                  Register Interest
                </Button>

                <Link to="/events">
                  <Button
                    size="lg"
                    variant="secondary"
                  >
                    Explore More Events
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* ================================================= */}
            {/* RIGHT VISUAL */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              className="relative"
            >
              {/* Outer glow */}
              <div
                className="
                  absolute
                  -inset-8
                  rounded-[50px]
                  bg-brand-500/10
                  blur-[80px]
                "
              />

              {/* Glass container */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-white/70
                  bg-white/60
                  p-3
                  shadow-[0_30px_90px_rgba(124,58,237,0.16)]
                  backdrop-blur-2xl
                "
              >
                {/* Main visual */}
                <div
                  className="
                    relative
                    flex
                    min-h-[420px]
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[28px]
                    bg-gradient-to-br
                    from-brand-100
                    via-violet-50
                    to-fuchsia-100
                  "
                >
                  {/* Decorative glow - top right */}
                  <div
                    className="
                      absolute
                      -right-16
                      -top-16
                      h-64
                      w-64
                      rounded-full
                      bg-brand-400/20
                      blur-3xl
                    "
                  />

                  {/* Decorative glow - bottom left */}
                  <div
                    className="
                      absolute
                      -bottom-20
                      -left-16
                      h-64
                      w-64
                      rounded-full
                      bg-fuchsia-400/20
                      blur-3xl
                    "
                  />

                  {/* Main floating icon */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 2, 0, -2, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      relative
                      flex
                      h-28
                      w-28
                      items-center
                      justify-center
                      rounded-[30px]
                      border
                      border-white/70
                      bg-white/70
                      text-brand-600
                      shadow-2xl
                      backdrop-blur-2xl
                    "
                  >
                    <CalendarDays size={50} />
                  </motion.div>

                  {/* Floating status */}
                  <div
                    className="
                      absolute
                      bottom-6
                      left-6
                      right-6
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-white/70
                      bg-white/75
                      px-5
                      py-4
                      shadow-xl
                      backdrop-blur-xl
                    "
                  >
                    <div>
                      <p className="text-xs font-medium text-gray-500">
                        Event Status
                      </p>

                      <p className="mt-1 font-bold text-heading">
                        Coming Soon
                      </p>
                    </div>

                    <span
                      className="
                        h-3
                        w-3
                        animate-pulse
                        rounded-full
                        bg-brand-500
                      "
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </SectionWrapper>

      {/* ====================================================== */}
      {/* HIGHLIGHTS */}
      {/* ====================================================== */}

      <SectionWrapper background="white">
        <Container>
          <SectionHeading
            eyebrow="What You'll Experience"
            title="Build Skills."
            highlight="Create Impact."
            description="This experience is designed to help students move beyond theory and develop practical technology skills."
          />

          <div
            className="
              mt-14
              grid
              gap-5
              md:grid-cols-2
            "
          >
            {event.highlights.map(
              (highlight: string, index: number) => (
                <motion.div
                  key={highlight}
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
                    flex
                    items-start
                    gap-4
                    rounded-3xl
                    border
                    border-gray-200/70
                    bg-white
                    p-6
                    shadow-[0_10px_35px_rgba(0,0,0,0.04)]
                    transition-shadow
                    duration-300
                    hover:shadow-[0_20px_50px_rgba(124,58,237,0.10)]
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
                      bg-brand-50
                      text-brand-600
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <CheckCircle2 size={21} />
                  </div>

                  <div>
                    <p className="font-semibold text-heading">
                      {highlight}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Practical knowledge and experience you can carry into
                      future projects.
                    </p>
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </Container>
      </SectionWrapper>

      {/* ====================================================== */}
      {/* EXPERIENCE */}
      {/* ====================================================== */}

      <SectionWrapper background="gradient">
        <Container>
          <div
            className="
              grid
              gap-12
              lg:grid-cols-2
              lg:items-center
            "
          >
            {/* Left */}
            <SectionHeading
              align="left"
              eyebrow="Why Attend?"
              title="Turn Learning Into"
              highlight="Experience."
              description="AWS Student Builder Club events are built around learning, experimentation and collaboration."
            />

            {/* Right */}
            <div className="space-y-4">
              {event.experience?.map(
                (item: string, index: number) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      x: 5,
                    }}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-white/70
                      bg-white/65
                      p-5
                      shadow-sm
                      backdrop-blur-xl
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-brand-600
                        text-white
                      "
                    >
                      <CheckCircle2 size={17} />
                    </div>

                    <span className="font-medium text-heading">
                      {item}
                    </span>
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* ====================================================== */}
      {/* CTA */}
      {/* ====================================================== */}

      <SectionWrapper background="white">
        <Container>
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-white/70
              bg-gradient-to-br
              from-brand-600
              via-violet-600
              to-fuchsia-600
              px-7
              py-14
              text-center
              shadow-[0_30px_90px_rgba(124,58,237,0.25)]
              md:px-14
              md:py-16
            "
          >
            {/* Decorative glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-72
                w-72
                rounded-full
                bg-white/10
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-24
                -left-20
                h-72
                w-72
                rounded-full
                bg-fuchsia-300/20
                blur-3xl
              "
            />

            <div className="relative">
              <Sparkles
                className="mx-auto text-white/80"
                size={28}
              />

              <h2
                className="
                  mx-auto
                  mt-5
                  max-w-2xl
                  text-3xl
                  font-black
                  text-white
                  md:text-5xl
                "
              >
                Ready to build your{" "}
                <span className="text-violet-200">
                  future?
                </span>
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-xl
                  text-base
                  leading-7
                  text-white/80
                "
              >
                Stay connected with AWS Student Builder Club and be the first
                to know when registration opens.
              </p>

              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  justify-center
                  gap-4
                "
              >
                {/* Register */}
                <Button
                  size="lg"
                  className="
                    bg-white
                    !text-brand-700
                    hover:bg-white/90
                  "
                  showArrow
                >
                  Register Interest
                </Button>

                {/* Events */}
                <Link to="/events">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="
                      border-white/30
                      bg-white/10
                      !text-white
                      hover:bg-white/20
                    "
                  >
                    View All Events
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </Container>
      </SectionWrapper>
    </main>
  );
}

/*
 * ============================================================
 * META ITEM
 * ============================================================
 */

interface MetaItemProps {
  icon: typeof CalendarDays;
  label: string;
  value: string;
}

function MetaItem({
  icon: Icon,
  label,
  value,
}: MetaItemProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-white/70
        bg-white/60
        px-4
        py-3.5
        shadow-sm
        backdrop-blur-xl
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-brand-50
          text-brand-600
        "
      >
        <Icon size={19} />
      </div>

      <div className="min-w-0">
        <p className="text-xs font-medium text-gray-400">
          {label}
        </p>

        <p className="truncate text-sm font-semibold text-heading">
          {value}
        </p>
      </div>
    </div>
  );
}