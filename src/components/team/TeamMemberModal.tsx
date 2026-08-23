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
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const contentItem = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function TeamMemberModal({ member, onClose }: Props) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!member) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [member, onClose]);

  useEffect(() => {
    if (!member) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [member]);

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

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      // Clipboard unavailable
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
        {/* =====================================================
            BACKDROP
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="
            fixed
            inset-0
            bg-zinc-950/80
            backdrop-blur-md
          "
        />

        {/* =====================================================
            MODAL
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.96,
            y: 20,
          }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 300,
          }}
          className="
            relative
            z-10
            flex
            max-h-[96vh]
            w-full
            max-w-3xl
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-950
            text-zinc-100
            shadow-2xl

            sm:max-h-[92vh]
            sm:rounded-3xl
          "
        >
          {/* =====================================================
              HEADER
          ====================================================== */}

          <div
            className="
              relative
              shrink-0
              overflow-hidden
              border-b
              border-zinc-800
              bg-gradient-to-r
              from-violet-950
              via-zinc-900
              to-indigo-950
              px-4
              py-4

              sm:px-6
              sm:py-5

              md:p-6
            "
          >
            {/* Decorative glows */}

            <div
              className="
                pointer-events-none
                absolute
                -right-10
                -top-16
                h-32
                w-32
                rounded-full
                bg-violet-600/20
                blur-3xl

                sm:h-40
                sm:w-40
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-16
                -left-10
                h-28
                w-28
                rounded-full
                bg-indigo-600/20
                blur-3xl

                sm:h-32
                sm:w-32
              "
            />

            <div
              className="
                relative
                flex
                items-start
                justify-between
                gap-3
              "
            >
              {/* Role + period */}

              <div
                className="
                  flex
                  min-w-0
                  flex-wrap
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    rounded-full
                    bg-brand-700
                    px-2.5
                    py-1
                    text-[10px]
                    font-bold
                    text-white

                    sm:px-3
                    sm:text-xs
                  "
                >
                  {role}
                </span>

                {period && (
                  <span
                    className="
                      flex
                      items-center
                      gap-1
                      text-[10px]
                      font-medium
                      text-zinc-400

                      sm:text-xs
                    "
                  >
                    <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    {period}
                  </span>
                )}
              </div>

              {/* Close button */}

              <button
                onClick={onClose}
                aria-label="Close profile"
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  bg-zinc-800/80
                  text-zinc-400
                  transition-colors
                  hover:bg-zinc-700
                  hover:text-white

                  sm:h-9
                  sm:w-9
                "
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>

          {/* =====================================================
              SCROLLABLE CONTENT
          ====================================================== */}

          <motion.div
            variants={contentContainer}
            initial="hidden"
            animate="show"
            className="
              min-h-0
              flex-1
              space-y-6
              overflow-y-auto
              overscroll-contain
              p-4

              sm:space-y-8
              sm:p-6

              md:p-8
            "
          >
            {/* =================================================
                PROFILE
            ================================================== */}

            <motion.div
              variants={contentItem}
              className="
                flex
                flex-col
                items-center
                gap-5

                sm:flex-row
                sm:items-start
                sm:gap-6
              "
            >
              {/* Profile image */}

              <div
                className="
                  relative
                  h-28
                  w-28
                  shrink-0
                  overflow-hidden
                  rounded-2xl
                  border-2
                  border-brand-500/30
                  shadow-xl

                  sm:h-36
                  sm:w-36

                  md:h-40
                  md:w-40
                "
              >
                <img
                  src={image}
                  alt={name}
                  referrerPolicy="no-referrer"
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>

              {/* Profile information */}

              <div
                className="
                  min-w-0
                  flex-1
                  space-y-2
                  text-center

                  sm:text-left
                "
              >
                <h2
                  className="
                    break-words
                    text-2xl
                    font-extrabold
                    tracking-tight
                    !text-white

                    sm:text-3xl

                    md:text-4xl
                  "
                >
                  {name}
                </h2>

                <p
                  className="
                    text-sm
                    font-semibold
                    text-brand-500

                    sm:text-base
                  "
                >
                  {title || role}
                  {period ? ` (${period})` : ""}
                </p>

                <p
                  className="
                    text-sm
                    leading-relaxed
                    text-zinc-300

                    sm:text-[15px]
                  "
                >
                  {bio}
                </p>

                {/* Social buttons */}

                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    justify-center
                    gap-2
                    pt-2

                    sm:justify-start
                    sm:gap-3
                  "
                >
                  {mailHref && (
                    <a
                      href={mailHref}
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-xl
                        bg-zinc-800
                        text-zinc-300
                        transition-all
                        hover:bg-brand-700
                        hover:text-white

                        sm:h-10
                        sm:w-10
                      "
                      title="Send Email"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}

                  {email && (
                    <button
                      onClick={handleCopyEmail}
                      title="Copy email"
                      className="
                        flex
                        h-9
                        w-9
                        cursor-pointer
                        items-center
                        justify-center
                        rounded-xl
                        bg-zinc-800
                        text-zinc-300
                        transition-all
                        hover:bg-brand-700
                        hover:text-white

                        sm:h-10
                        sm:w-10
                      "
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
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-xl
                        bg-zinc-800
                        text-zinc-300
                        transition-all
                        hover:bg-brand-700
                        hover:text-white

                        sm:h-10
                        sm:w-10
                      "
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
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-xl
                        bg-zinc-800
                        text-zinc-300
                        transition-all
                        hover:bg-brand-700
                        hover:text-white

                        sm:h-10
                        sm:w-10
                      "
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
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-xl
                        bg-zinc-800
                        text-zinc-300
                        transition-all
                        hover:bg-brand-700
                        hover:text-white

                        sm:h-10
                        sm:w-10
                      "
                      title="Instagram Profile"
                    >
                      <FaInstagram className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* =================================================
                QUOTE
            ================================================== */}

            {quote && (
              <motion.div
                variants={contentItem}
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-brand-500/20
                  bg-gradient-to-r
                  from-violet-900/30
                  via-zinc-800/50
                  to-indigo-900/30
                  p-4

                  sm:p-5

                  md:p-6
                "
              >
                <Quote
                  className="
                    pointer-events-none
                    absolute
                    left-3
                    top-3
                    h-7
                    w-7
                    text-brand-500/20

                    sm:left-4
                    sm:top-4
                    sm:h-8
                    sm:w-8
                  "
                />

                <div className="relative z-10 space-y-3">
                  <span
                    className="
                      flex
                      items-center
                      gap-1.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-brand-500

                      sm:text-xs
                    "
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    In Their Words
                  </span>

                  <p
                    className="
                      pl-1
                      text-sm
                      font-medium
                      italic
                      leading-relaxed
                      text-zinc-100

                      sm:pl-2
                      sm:text-base

                      md:text-lg
                    "
                  >
                    "{quote}"
                  </p>
                </div>
              </motion.div>
            )}

            {/* =================================================
                STATS
            ================================================== */}

            {stats && stats.length > 0 && (
              <motion.div variants={contentItem}>
                <h3
                  className="
                    mb-3
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-zinc-400

                    sm:text-sm
                  "
                >
                  <BarChart3 className="h-4 w-4 text-brand-500" />
                  Key Tenure Metrics
                </h3>

                <div
                  className="
                    grid
                    grid-cols-2
                    gap-2

                    sm:grid-cols-2
                    sm:gap-3

                    md:grid-cols-4
                  "
                >
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{
                        y: -3,
                      }}
                      className="
                        rounded-xl
                        border
                        border-zinc-700/60
                        bg-zinc-800/60
                        p-3
                        text-center
                        transition-colors
                        hover:border-brand-500/40

                        sm:p-4
                      "
                    >
                      <div
                        className="
                          text-xl
                          font-extrabold
                          text-brand-300

                          sm:text-2xl
                        "
                      >
                        {stat.value}
                      </div>

                      <div
                        className="
                          mt-1
                          text-[10px]
                          font-medium
                          leading-tight
                          text-zinc-400

                          sm:text-xs
                        "
                      >
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* =================================================
                ACHIEVEMENTS
            ================================================== */}

            {achievements && achievements.length > 0 && (
              <motion.div variants={contentItem}>
                <h3
                  className="
                    mb-3
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-zinc-400

                    sm:text-sm
                  "
                >
                  <Award className="h-4 w-4 text-brand-500" />
                  Key Accomplishments
                </h3>

                <ul className="space-y-2">
                  {achievements.map((item, i) => (
                    <li
                      key={i}
                      className="
                        flex
                        items-start
                        gap-2.5
                        rounded-xl
                        border
                        border-zinc-800
                        bg-zinc-800/40
                        p-3

                        sm:gap-3
                        sm:p-3.5
                      "
                    >
                      <CheckCircle2
                        className="
                          mt-0.5
                          h-4
                          w-4
                          shrink-0
                          text-emerald-400

                          sm:h-5
                          sm:w-5
                        "
                      />

                      <span
                        className="
                          min-w-0
                          text-xs
                          leading-relaxed
                          text-zinc-200

                          sm:text-sm
                        "
                      >
                        {item}
                      </span>
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