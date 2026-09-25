import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cloud, Code2, Rocket, Sparkles } from "lucide-react";

import societyLogo from "../../assets/aws-sbg-logo.png";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

interface SplashScreenProps {
  onComplete: () => void;
  /** Total time the splash stays on screen, in ms. */
  duration?: number;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SplashScreen({
  onComplete,
  duration = 2200,
}: SplashScreenProps) {
  const reducedMotion = usePrefersReducedMotion();
  // Users who've asked for reduced motion shouldn't be stuck staring
  // at a decorative loader any longer than necessary.
  const activeDuration = reducedMotion ? Math.min(duration, 900) : duration;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Drive the visible "0% -> 100%" counter off the same clock as the
    // exit timer so the number always finishes exactly when the splash does.
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const pct = Math.min(100, ((now - start) / activeDuration) * 100);
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);

    const timer = window.setTimeout(onComplete, activeDuration);

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
    };
  }, [onComplete, activeDuration]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex min-h-[100svh] items-center justify-center overflow-hidden bg-white px-6"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.015,
        filter: "blur(8px)",
      }}
      transition={{ duration: 0.55, ease: EASE }}
      role="status"
      aria-live="polite"
      aria-label="Loading AWS Student Builder Society MUET"
    >
      {/* Base wash so the panel matches the site's light/dark theme
          instead of a flat white/near-black square. */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white" />

      {/* Faint grid texture, same device used on hero/CTA sections
          for a bit of premium texture instead of a totally flat panel. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:32px_32px]"
      />

      {/* Soft background glows */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-brand-200/55 blur-3xl sm:h-[28rem] sm:w-[28rem]"
        animate={
          reducedMotion
            ? undefined
            : { scale: [1, 1.12, 1], opacity: [0.45, 0.75, 0.45] }
        }
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -right-32 h-80 w-80 rounded-full bg-violet/15 blur-3xl sm:h-[30rem] sm:w-[30rem]"
        animate={
          reducedMotion
            ? undefined
            : { scale: [1.1, 1, 1.1], opacity: [0.35, 0.65, 0.35] }
        }
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* A scattered field of drifting dots + twinkling sparkles —
          matches the pattern used on EventsHero but denser, so the
          splash feels alive instead of an empty panel with a logo
          floating in the middle. */}
      {!reducedMotion && (
        <>
          {[
            { top: "14%", left: "10%", size: 5, delay: 0, duration: 5 },
            { top: "76%", left: "8%", size: 4, delay: 0.6, duration: 6 },
            { top: "22%", left: "90%", size: 4, delay: 1.1, duration: 5.5 },
            { top: "82%", left: "88%", size: 6, delay: 0.3, duration: 6.5 },
            { top: "45%", left: "5%", size: 3, delay: 1.6, duration: 4.5 },
            { top: "58%", left: "94%", size: 3, delay: 0.9, duration: 5 },
            { top: "8%", left: "45%", size: 3, delay: 1.3, duration: 5.5 },
            { top: "92%", left: "48%", size: 4, delay: 0.4, duration: 6 },
            { top: "34%", left: "20%", size: 2, delay: 2, duration: 4.5 },
            { top: "66%", left: "78%", size: 2, delay: 1.8, duration: 5 },
          ].map((p, i) => (
            <motion.span
              key={`dot-${i}`}
              aria-hidden="true"
              animate={{ y: [0, -18, 0], opacity: [0.15, 0.55, 0.15] }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
              }}
              className="pointer-events-none absolute rounded-full bg-brand-400"
            />
          ))}

          {/* Bigger, slower twinkling sparkles for a bit of sparkle-dust depth */}
          {[
            { top: "30%", left: "16%", delay: 0, size: 14 },
            { top: "68%", left: "84%", delay: 1, size: 16 },
            { top: "16%", left: "80%", delay: 2, size: 12 },
          ].map((s, i) => (
            <motion.span
              key={`sparkle-${i}`}
              aria-hidden="true"
              animate={{
                opacity: [0, 0.9, 0],
                scale: [0.4, 1, 0.4],
                rotate: [0, 45],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: s.delay,
              }}
              style={{ top: s.top, left: s.left }}
              className="pointer-events-none absolute hidden text-brand-300 sm:block"
            >
              <Sparkles size={s.size} className="fill-current" />
            </motion.span>
          ))}
        </>
      )}

      {/* Main splash content */}
      <div className="relative z-10 flex w-full max-w-xl flex-col items-center text-center">
        {/* Logo mark, with a slow rotating gradient ring standing in
            for a spinner — reads as "loading" without a generic spinner. */}
        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.78 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32"
        >
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 rounded-[2rem] bg-brand-400/25 blur-2xl"
            animate={
              reducedMotion
                ? undefined
                : { scale: [0.9, 1.18, 0.9], opacity: [0.3, 0.65, 0.3] }
            }
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />

          {!reducedMotion && (
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 rounded-[2rem] p-[3px]"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0%, var(--brand-500) 65%, transparent 100%)",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
            />
          )}

          <div className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] border border-brand-200 bg-white shadow-[0_22px_70px_rgba(124,58,237,0.18)] sm:h-28 sm:w-28">
            <img
              src={societyLogo}
              alt=""
              className="h-16 w-16 object-contain sm:h-[4.75rem] sm:w-[4.75rem]"
            />
          </div>

          {/* Orbiting glass icon chips — same "glass" treatment used by
              OrbitIcon on the hero, so the logo feels surrounded by the
              things the club is actually about instead of sitting alone. */}
          {[
            { Icon: Cloud, className: "-left-14 -top-6 sm:-left-16 sm:-top-8", delay: 0 },
            { Icon: Code2, className: "-right-14 -top-2 sm:-right-16 sm:-top-3", delay: 0.9 },
            { Icon: Rocket, className: "-left-10 bottom-0 sm:-left-12", delay: 1.5 },
            { Icon: Sparkles, className: "-right-10 bottom-2 sm:-right-12 sm:bottom-3", delay: 0.5 },
          ].map(({ Icon, className, delay }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={
                reducedMotion
                  ? { opacity: 1, scale: 1 }
                  : {
                      opacity: 1,
                      scale: 1,
                      y: [0, -8, 0],
                      rotate: [0, 6, 0, -6, 0],
                    }
              }
              transition={
                reducedMotion
                  ? { duration: 0.5, delay: 0.9 + i * 0.1 }
                  : {
                      opacity: { duration: 0.5, delay: 0.9 + i * 0.1 },
                      scale: { duration: 0.5, delay: 0.9 + i * 0.1 },
                      y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
                      rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
                    }
              }
              className={`glass absolute hidden rounded-2xl border border-white/40 bg-white/70 p-2 shadow-lg sm:block ${className}`}
            >
              <Icon size={18} className="text-brand-600" />
            </motion.div>
          ))}
        </motion.div>

        {/* Brand name */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.65, ease: EASE }}
          className="mt-7 sm:mt-8"
        >
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-600 sm:text-sm">
            AWS
          </p>

          <h1 className="gradient-text mt-2 text-2xl font-black tracking-[-0.035em] sm:text-4xl">
            Student Builder Society
          </h1>

          <p className="mt-2 text-sm font-semibold text-body sm:text-base">
            MUET Jamshoro
          </p>
        </motion.div>

        {/* Animated loading line + live percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.4 }}
          className="mt-8 w-full max-w-[210px] sm:mt-10 sm:max-w-[250px]"
        >
          <div className="h-1 overflow-hidden rounded-full bg-brand-100">
            <motion.div
              className="h-full origin-left rounded-full bg-gradient-to-r from-brand-500 via-violet to-brand-600"
              style={{ scaleX: progress / 100 }}
            />
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] font-medium tracking-wide text-muted sm:text-xs">
            <span>Build • Learn • Innovate</span>
            <span className="tabular-nums text-brand-600">
              {Math.round(progress)}%
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}