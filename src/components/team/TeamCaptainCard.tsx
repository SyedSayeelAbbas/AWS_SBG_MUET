import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Calendar, ShieldCheck, Quote } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import type { TeamMember } from "../../types/team";

interface Props {
  member: TeamMember;
  onOpenDetails: (member: TeamMember) => void;
}

export default function TeamCaptainCard({ member, onOpenDetails }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const {
    name,
    role,
    image,
    tagline,
    bio,
    period,
    quote,
    stats,
    linkedin,
    github,
    instagram,
  } = member;

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const spotlightBackground = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(480px circle at ${x * 100}% ${y * 100}%, rgba(167,139,250,0.16), transparent 70%)`
  );

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5 }}
      className="group relative w-full"
      onMouseMove={handleMouseMove}
    >
      {/* static gradient glow ring */}
      <div className="absolute -inset-1 rounded-[2rem] bg-[conic-gradient(from_0deg,#6d28d9,#9333ea,#4f46e5,#6d28d9)] opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-45" />

      <div
        onClick={() => onOpenDetails(member)}
        className="relative flex cursor-pointer flex-col overflow-hidden rounded-[1.5rem] border border-zinc-800 bg-zinc-950 shadow-2xl transition-shadow duration-300 group-hover:shadow-[0_30px_80px_rgba(76,29,149,0.35)] sm:rounded-[2rem] md:min-h-[420px] md:flex-row"
      >
        {/* cursor-tracking spotlight across the whole card */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlightBackground }}
        />

        {/* image column */}
        <div className="relative h-56 w-full shrink-0 overflow-hidden bg-zinc-950 sm:h-96 md:h-auto md:w-[38%] lg:w-[32%]">
          <img
            src={image}
            alt={name}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/10 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-zinc-950/50" />

          {/* glassmorphic role badge */}
          <div
            className="
              absolute left-3 top-3 z-20
              inline-flex items-center gap-1.5
              rounded-full border border-white/40
              bg-white/20 px-2.5 py-1
              text-[11px] font-semibold text-white
              shadow-lg backdrop-blur-md
              transition-transform duration-300
              group-hover:scale-105
              sm:left-4 sm:top-4 sm:px-3 sm:py-1 sm:text-xs
            "
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>{role}</span>
          </div>

          {period && (
            <div className="absolute right-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-full border border-violet-200/50 bg-white/95 px-2.5 py-1 text-[11px] font-bold tracking-wide text-violet-900 shadow-lg backdrop-blur-md sm:right-4 sm:top-4 sm:px-3 sm:text-xs md:hidden">
              <Calendar className="h-3.5 w-3.5 text-violet-600" />
              <span>{period}</span>
            </div>
          )}
        </div>

        {/* content column */}
        <div className="relative z-10 flex flex-1 flex-col justify-center gap-3 p-5 sm:gap-4 sm:p-10 lg:p-12">
          <span className="text-base font-bold uppercase tracking-[0.15em] text-brand-700 sm:text-xl sm:tracking-[0.2em] lg:text-2xl">
            AWS Student Builder Club
          </span>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700 sm:text-xs">
              Tenure Captain
            </span>
            {period && (
              <span className="hidden items-center gap-1 rounded-full border border-zinc-700 px-2.5 py-1 text-xs font-semibold text-zinc-300 md:inline-flex">
                <Calendar className="h-3 w-3" />
                {period}
              </span>
            )}
          </div>

          <h3 className="text-2xl font-extrabold tracking-tight !text-white transition-colors group-hover:text-violet-300 sm:text-3xl lg:text-4xl">
            {name}
          </h3>

          <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            {tagline || bio}
          </p>

          {quote && (
            <div className="relative border-l-2 border-brand-500/40 pl-4 text-xs italic leading-relaxed text-zinc-400 sm:pl-5 sm:text-sm">
              <Quote className="absolute -left-1 -top-1 h-8 w-8 -translate-x-1/2 text-brand-500/10" />
              <span className="relative">"{quote}"</span>
            </div>
          )}

          <div className="mt-1 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800/80 pt-4 sm:mt-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-2.5">
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="rounded-lg bg-zinc-800 p-2 text-zinc-300 transition-all hover:bg-brand-700 hover:text-white sm:p-2.5"
                >
                  <FaLinkedin className="h-4 w-4" />
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="rounded-lg bg-zinc-800 p-2 text-zinc-300 transition-all hover:bg-brand-700 hover:text-white sm:p-2.5"
                >
                  <FaGithub className="h-4 w-4" />
                </a>
              )}
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="rounded-lg bg-zinc-800 p-2 text-zinc-300 transition-all hover:bg-brand-700 hover:text-white sm:p-2.5"
                >
                  <FaInstagram className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* stats strip */}
        {stats && stats.length > 0 && (
          <div className="relative z-10 flex shrink-0 divide-x divide-zinc-800 border-t border-zinc-800 bg-zinc-900/60 md:w-48 md:flex-col md:divide-x-0 md:divide-y md:border-l md:border-t-0">
            {stats.slice(0, 3).map((stat, i) => (
              <div
                key={i}
                className="flex flex-1 flex-col items-center justify-center gap-0.5 px-2 py-2.5 text-center sm:px-4 sm:py-3 md:flex-none md:py-6"
              >
                <span className="text-sm font-extrabold text-white sm:text-lg">
                  {stat.value}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-zinc-400 sm:text-[10px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}