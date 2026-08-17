import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Sparkles,
  CheckCircle2,
  Mail,
  Quote,
  Calendar,
  Award,
  BarChart3,
  Copy,
  Check,
} from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import type { TeamMember } from "../../types/team";

interface Props {
  member: TeamMember | null;
  onClose: () => void;
}

const contentContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const contentItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TeamMemberModal({ member, onClose }: Props) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!member) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [member, onClose]);

  if (!member) return null;

  const {
    name,
    role,
    title,
    period,
    image,
    bio,
    quote,
    email,
    linkedin,
    github,
    instagram,
    stats,
    achievements,
  } = member;

  const mailHref = email
    ? email.startsWith("mailto:")
      ? email
      : `mailto:${email}`
    : undefined;

  const handleCopyEmail = async () => {
    if (!email) return;
    const clean = email.replace("mailto:", "");
    try {
      await navigator.clipboard.writeText(clean);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — silently ignore
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 text-zinc-100 shadow-2xl"
        >
          <div className="relative overflow-hidden border-b border-zinc-800 bg-gradient-to-r from-violet-950 via-zinc-900 to-indigo-950 p-6">
            <div className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-32 w-32 rounded-full bg-indigo-600/20 blur-3xl" />

            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-brand-700 px-3 py-1 text-xs font-bold text-white">
                  {role}
                </span>
                {period && (
                  <span className="flex items-center gap-1 text-xs font-medium text-zinc-400">
                    <Calendar className="h-3.5 w-3.5" />
                    {period}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                aria-label="Close profile"
                className="cursor-pointer rounded-full bg-zinc-800/80 p-2 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <motion.div
            variants={contentContainer}
            initial="hidden"
            animate="show"
            className="space-y-8 overflow-y-auto p-6 sm:p-8"
          >
            <motion.div
              variants={contentItem}
              className="flex flex-col items-center gap-6 sm:flex-row sm:items-start"
            >
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border-2 border-brand-500/30 shadow-xl sm:h-40 sm:w-40">
                <img
                  src={image}
                  alt={name}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex-1 space-y-2 text-center sm:text-left">
                <h2 className="text-3xl font-extrabold tracking-tight !text-white sm:text-4xl">
                  {name}
                </h2>
                <p className="text-base font-semibold text-brand-500">
                  {title || role}
                  {period ? ` (${period})` : ""}
                </p>
                <p className="text-sm leading-relaxed text-zinc-300">{bio}</p>

                <div className="flex items-center justify-center gap-3 pt-2 sm:justify-start">
                  {mailHref && (
                    <a
                      href={mailHref}
                      className="rounded-xl bg-zinc-800 p-2 text-zinc-300 transition-all hover:bg-brand-700 hover:text-white"
                      title="Send Email"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                  {email && (
                    <button
                      onClick={handleCopyEmail}
                      title="Copy email"
                      className="rounded-xl bg-zinc-800 p-2 text-zinc-300 transition-all hover:bg-brand-700 hover:text-white"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  )}
                  {linkedin && (
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-zinc-800 p-2 text-zinc-300 transition-all hover:bg-brand-700 hover:text-white"
                      title="LinkedIn Profile"
                    >
                      <FaLinkedin className="h-4 w-4" />
                    </a>
                  )}
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-zinc-800 p-2 text-zinc-300 transition-all hover:bg-brand-700 hover:text-white"
                      title="GitHub Profile"
                    >
                      <FaGithub className="h-4 w-4" />
                    </a>
                  )}
                  {instagram && (
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-zinc-800 p-2 text-zinc-300 transition-all hover:bg-brand-700 hover:text-white"
                      title="Instagram Profile"
                    >
                      <FaInstagram className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            {quote && (
              <motion.div
                variants={contentItem}
                className="relative rounded-2xl border border-brand-500/20 bg-gradient-to-r from-violet-900/30 via-zinc-800/50 to-indigo-900/30 p-5 sm:p-6"
              >
                <Quote className="pointer-events-none absolute left-4 top-4 h-8 w-8 text-brand-500/20" />
                <div className="relative z-10 space-y-3">
                  <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-500">
                    <Sparkles className="h-3.5 w-3.5" />
                    In Their Words
                  </span>
                  <p className="pl-2 text-base font-medium italic leading-relaxed text-zinc-100 sm:text-lg">
                    "{quote}"
                  </p>
                </div>
              </motion.div>
            )}

            {stats && stats.length > 0 && (
              <motion.div variants={contentItem}>
                <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-zinc-400">
                  <BarChart3 className="h-4 w-4 text-brand-500" />
                  Key Tenure Metrics
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3 }}
                      className="rounded-xl border border-zinc-700/60 bg-zinc-800/60 p-4 text-center transition-colors hover:border-brand-500/40"
                    >
                      <div className="text-2xl font-extrabold text-brand-300">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-xs font-medium text-zinc-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {achievements && achievements.length > 0 && (
              <motion.div variants={contentItem}>
                <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-zinc-400">
                  <Award className="h-4 w-4 text-brand-500" />
                  Key Accomplishments
                </h3>
                <ul className="space-y-2.5">
                  {achievements.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-800/40 p-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                      <span className="text-sm text-zinc-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}