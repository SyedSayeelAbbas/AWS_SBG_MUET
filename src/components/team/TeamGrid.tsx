import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Users } from "lucide-react";

import Container from "../layout/Container";
import TeamFilterTabs from "./TeamFilterTabs";
import TeamCaptainCard from "./TeamCaptainCard";
import TeamMemberCard from "./TeamMemberCard";
import TeamMemberModal from "./TeamMemberModal";
import { fullTeam, tenureFilters } from "../../constants/team";
import type { TeamDepartment, TeamMember } from "../../types/team";

const tenureOrder = tenureFilters as string[];

const departmentOrder: TeamDepartment[] = [
  "Operations & Technical",
  "Designing Team",
  "Content Management",
  "Outreach & Marketing",
  "Visual Production",
];

/* Per-department color identity — only touches icon, dot, chevron, glow */
const departmentAccent: Record<
  TeamDepartment,
  {
    iconBg: string;
    iconText: string;
    dot: string;
    chevronBg: string;
    glow: string;
    headerGradient: string;
  }
> = {
  "Operations & Technical": {
    iconBg: "bg-violet-100",
    iconText: "text-violet-700",
    dot: "bg-violet-500",
    chevronBg: "bg-violet-700",
    glow: "bg-violet-300/30",
    headerGradient: "from-violet-50/90 via-white to-violet-50/60",
  },

  "Designing Team": {
    iconBg: "bg-pink-100",
    iconText: "text-pink-700",
    dot: "bg-pink-500",
    chevronBg: "bg-pink-700",
    glow: "bg-pink-300/30",
    headerGradient: "from-pink-50/90 via-white to-pink-50/60",
  },

  "Content Management": {
    iconBg: "bg-blue-100",
    iconText: "text-blue-700",
    dot: "bg-blue-500",
    chevronBg: "bg-blue-700",
    glow: "bg-blue-300/30",
    headerGradient: "from-blue-50/90 via-white to-blue-50/60",
  },

  "Outreach & Marketing": {
    iconBg: "bg-orange-100",
    iconText: "text-orange-700",
    dot: "bg-orange-500",
    chevronBg: "bg-orange-700",
    glow: "bg-orange-300/30",
    headerGradient: "from-orange-50/90 via-white to-orange-50/60",
  },

  "Visual Production": {
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-700",
    dot: "bg-emerald-500",
    chevronBg: "bg-emerald-700",
    glow: "bg-emerald-300/30",
    headerGradient: "from-emerald-50/90 via-white to-emerald-50/60",
  },
};

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir >= 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir >= 0 ? -40 : 40 }),
};

/* Small editorial section header — replaces the pill badge pattern */
function SectionEyebrow({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-6 text-center sm:mb-8">
      <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-600 sm:text-xs sm:tracking-[0.2em]">
        {eyebrow}
      </span>
      <h3 className="mt-2 text-xl font-extrabold tracking-tight text-heading sm:mt-3 sm:text-3xl">
        {title}
      </h3>
    </div>
  );
}

export default function TeamGrid() {
  const [active, setActive] = useState<string>(tenureFilters[0]);
  const [direction, setDirection] = useState(0);
  const [selected, setSelected] = useState<TeamMember | null>(null);

  // all department sections start expanded
  const [openDepts, setOpenDepts] = useState<Set<string>>(
    () => new Set(departmentOrder)
  );

  const toggleDept = (dept: string) => {
    setOpenDepts((prev) => {
      const next = new Set(prev);
      if (next.has(dept)) {
        next.delete(dept);
      } else {
        next.add(dept);
      }
      return next;
    });
  };

  const handleChange = (value: string) => {
    const nextIndex = tenureOrder.indexOf(value);
    const currentIndex = tenureOrder.indexOf(active);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActive(value);
  };

  const tenureMembers = useMemo(
    () => fullTeam.filter((m) => m.tenure === active),
    [active]
  );

  const captains = useMemo(
    () => tenureMembers.filter((m) => m.section === "Captain"),
    [tenureMembers]
  );

  const coreTeam = useMemo(
    () => tenureMembers.filter((m) => m.section === "Core Team"),
    [tenureMembers]
  );

  const coLeads = useMemo(() => coreTeam.filter((m) => m.isCoLead), [coreTeam]);

  const departmentGroups = useMemo(() => {
    return departmentOrder
      .map((dept) => ({
        dept,
        members: coreTeam.filter((m) => !m.isCoLead && m.department === dept),
      }))
      .filter((g) => g.members.length > 0);
  }, [coreTeam]);

  // Fallback for tenures that don't use department grouping (e.g. older placeholder tenures)
  const flatCore = useMemo(
    () => coreTeam.filter((m) => !m.isCoLead && !m.department),
    [coreTeam]
  );

  const hasBelowCaptain =
    coLeads.length > 0 || departmentGroups.length > 0 || flatCore.length > 0;

  return (
    <section className="section relative overflow-hidden bg-white">
      {/* Layered, mostly-white background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.06),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.05),transparent_30%)]
        "
      />

      <Container className="relative">
        <TeamFilterTabs
          categories={tenureFilters}
          active={active}
          onChange={handleChange}
        />

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {captains.length > 0 && (
              <div className="mb-4">
                <SectionEyebrow eyebrow="Leadership" title="Leading This Tenure" />

                <div className="flex flex-col gap-6">
                  {captains.map((member) => (
                    <TeamCaptainCard
                      key={member.id}
                      member={member}
                      onOpenDetails={setSelected}
                    />
                  ))}
                </div>
              </div>
            )}

            {captains.length > 0 && hasBelowCaptain && (
              <div className="mx-auto mb-4 flex w-fit flex-col items-center gap-1.5">
                <span className="h-8 w-px bg-gradient-to-b from-brand-400/60 to-brand-300/20" />
                <span className="rounded-full border border-brand-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-600 shadow-sm">
                  supported by
                </span>
                <span className="h-8 w-px bg-gradient-to-b from-brand-300/20 to-transparent" />
              </div>
            )}

            {coLeads.length > 0 && (
              <div className="mb-12 sm:mb-16">
                <SectionEyebrow
                  eyebrow="Co-Leadership"
                  title="Standing Beside the Leader"
                />

                {/* always side-by-side, even on mobile — slightly distinct treatment via ring */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-8">
                  {coLeads.map((member) => (
                    <div
                      key={member.id}
                      className="min-w-0 rounded-[28px] bg-gradient-to-br  "
                    >
                      <div className="h-full rounded-[26.5px] ">
                        <TeamMemberCard
                          member={member}
                          onOpenDetails={setSelected}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {departmentGroups.map(({ dept, members }) => {
              const isOpen = openDepts.has(dept);
              const accent = departmentAccent[dept];

              return (
                <div key={dept} className="mb-6">
                  <button
                    onClick={() => toggleDept(dept)}
                    aria-expanded={isOpen}
                    className={`
                      group relative mb-6 flex w-full items-center justify-between
                      overflow-hidden rounded-[18px] border px-4 py-3 text-left
                      transition-all duration-300 sm:rounded-[24px] sm:px-6 sm:py-5
                      ${
                        isOpen
                          ? `border-gray-100 bg-gradient-to-r ${accent.headerGradient} shadow-sm`
                          : "border-gray-100 bg-white shadow-sm hover:-translate-y-0.5 hover:shadow-md"
                      }
                    `}
                  >
                    {/* Soft background glow, department-tinted */}
                    <div
                      className={`
                        pointer-events-none absolute -right-16 -top-16
                        h-32 w-32 rounded-full blur-3xl
                        transition-opacity duration-500
                        ${accent.glow}
                        ${isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-70"}
                      `}
                    />

                    {/* Left side */}
                    <div className="relative flex min-w-0 items-center gap-3 sm:gap-4">
                      {/* Department icon — larger, department-tinted */}
                      <motion.div
                        animate={{
                          scale: isOpen ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.25 }}
                        className={`
                          flex h-10 w-10 shrink-0 items-center justify-center
                          rounded-xl transition-all duration-300
                          sm:h-14 sm:w-14 sm:rounded-2xl
                          ${isOpen ? `${accent.iconBg} ${accent.iconText}` : "bg-gray-50 text-gray-400"}
                        `}
                      >
                        <Users className="h-4.5 w-4.5 sm:h-6 sm:w-6" />
                      </motion.div>

                      {/* Department information */}
                      <div className="min-w-0">
                        <div className="mb-0.5 flex items-center gap-2 sm:mb-1">
                          <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-gray-400 sm:text-[10px] sm:tracking-[0.15em]">
                            Department
                          </span>

                          {isOpen && (
                            <motion.span
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className={`h-1.5 w-1.5 rounded-full ${accent.dot}`}
                            />
                          )}
                        </div>

                        <h3 className="truncate text-base font-bold tracking-tight text-heading sm:text-xl">
                          {dept}
                        </h3>
                      </div>
                    </div>

                    {/* Right side */}
                    <div className="relative flex shrink-0 items-center gap-2.5 sm:gap-4">
                      {/* Member count */}
                      <span className="hidden text-xs font-medium text-gray-400 sm:inline">
                        {members.length}{" "}
                        {members.length === 1 ? "member" : "members"}
                      </span>

                      {/* Mobile count */}
                      <span className="text-xs font-semibold text-heading/40 sm:hidden">
                        {members.length}
                      </span>

                      {/* Chevron */}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className={`
                          flex h-7 w-7 items-center justify-center
                          rounded-lg transition-colors duration-300
                          sm:h-9 sm:w-9 sm:rounded-xl
                          ${
                            isOpen
                              ? `${accent.chevronBg} text-white shadow-sm`
                              : "bg-gray-50 text-gray-400 group-hover:bg-gray-100"
                          }
                        `}
                      >
                        <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-wrap justify-center gap-4 pb-2 sm:gap-6 lg:gap-8">
                          {members.map((member) => (
                            <div
                              key={member.id}
                              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.34rem)]"
                            >
                              <TeamMemberCard
                                member={member}
                                onOpenDetails={setSelected}
                              />
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {flatCore.length > 0 && (
              <div>
                <SectionEyebrow
                  eyebrow="Core Team"
                  title="Building Behind the Scenes"
                />

                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
                  {flatCore.map((member) => (
                    <div
                      key={member.id}
                      className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.34rem)]"
                    >
                      <TeamMemberCard member={member} onOpenDetails={setSelected} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tenureMembers.length === 0 && (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <Users className="h-8 w-8 text-slate-300" />
                <p className="text-muted">No records for this tenure yet.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>

      <TeamMemberModal member={selected} onClose={() => setSelected(null)} />
    </section>
  );
}