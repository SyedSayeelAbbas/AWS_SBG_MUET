import { useRef, useState, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Calendar, ShieldCheck, Crown } from "lucide-react";

import type { TeamMember } from "../../types/team";

interface Props {
  member: TeamMember;
  onOpenDetails: (member: TeamMember) => void;
}

export default function TeamMemberCard({ member, onOpenDetails }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { name, role, image, tagline, bio, period, stats, isHead } = member;

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), {
    stiffness: 300,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), {
    stiffness: 300,
    damping: 25,
  });

  const spotlightX = useTransform(mouseX, (v) => `${v * 100}%`);
  const spotlightY = useTransform(mouseY, (v) => `${v * 100}%`);
  const spotlightBackground = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) =>
      `radial-gradient(280px circle at ${x} ${y}, rgba(167,139,250,0.18), transparent 70%)`
  );

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const resetTilt = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative mx-auto w-full max-w-sm"
      style={{ perspective: 1000 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetTilt}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 opacity-20 blur-xl transition duration-500 group-hover:opacity-40 group-hover:duration-200" />

      <motion.div
        ref={cardRef}
        onClick={() => onOpenDetails(member)}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative cursor-pointer overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl transition-shadow duration-300 hover:shadow-violet-900/40"
      >
        {/* cursor-tracking spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlightBackground }}
        />

        {(period || isHead) && (
          <div className="absolute right-3 top-3 z-20 sm:right-4 sm:top-4">
            <div
              className="
                inline-flex items-center gap-1.5
                rounded-full border border-white/40
                bg-white/20 px-2.5 py-1
                text-[11px] font-bold tracking-wide text-white
                shadow-lg backdrop-blur-md
                transition-transform duration-300
                group-hover:scale-105
                sm:px-3.5 sm:py-1.5 sm:text-xs
              "
            >
              {period ? (
                <Calendar className="h-3.5 w-3.5" />
              ) : (
                <Crown className="h-3.5 w-3.5" />
              )}
              <span>{period ?? "Head"}</span>
            </div>
          </div>
        )}

        <div className="absolute left-3 top-3 z-20 sm:left-4 sm:top-4">
          <div
            className="
              inline-flex items-center gap-1.5
              rounded-full border border-white/40
              bg-white/20 px-2.5 py-1
              text-[11px] font-semibold text-white
              shadow-lg backdrop-blur-md
              transition-transform duration-300
              group-hover:scale-105
              sm:px-3 sm:text-xs
            "
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>{role}</span>
          </div>
        </div>

        <div className="relative aspect-square w-full overflow-hidden bg-slate-950">
          <img
            src={image}
            alt={name}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 via-40% to-transparent opacity-95 transition-opacity duration-300 group-hover:opacity-90" />

          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-4 text-left sm:p-6">
            <div className="mb-1 flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700/90 sm:text-xs">
                {role}
              </span>
            </div>

            <h3 className="!text-white text-xl font-extrabold tracking-tight drop-shadow-md sm:text-2xl lg:text-3xl">
              {name}
            </h3>

            <p className="mt-1.5 line-clamp-2 text-xs font-normal leading-relaxed text-slate-300 sm:text-sm">
              {tagline || bio}
            </p>

            <div className="mt-3 flex items-center justify-between border-t border-slate-800/80 pt-3 text-[11px] font-semibold text-brand-700 transition-colors group-hover:text-white sm:mt-4 sm:text-xs">
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 animate-pulse text-brand-700" />
                <span className="hidden sm:inline">Hover or click to view profile</span>
                <span className="sm:hidden">Tap to view profile</span>
              </span>
              <motion.div
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.2 }}
                className="
                  flex items-center gap-1
                  rounded-full border border-white/40
                  bg-white/20 px-2 py-1
                  text-white backdrop-blur-md
                  shadow-lg
                  sm:px-2.5
                "
              >
                <span>Explore</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.div>
            </div>
          </div>
        </div>

        {stats && stats.length > 0 && (
          <div className="grid grid-cols-3 gap-1.5 border-t border-slate-800 bg-slate-950/90 px-3 py-2.5 text-center sm:gap-2 sm:px-6 sm:py-3.5">
            {stats.slice(0, 3).map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-xs font-extrabold text-white sm:text-sm">
                  {stat.value}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 sm:text-[10px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}