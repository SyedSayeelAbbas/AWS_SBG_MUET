import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: ReactNode;

  className?: string;

  id?: string;

  background?: "white" | "soft" | "gradient";

  animate?: boolean;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  background = "white",
  animate = true,
}: SectionWrapperProps) {
  const backgrounds = {
    white: "bg-white",
    soft: "bg-[#FAF7FF]",
    gradient:
      "bg-gradient-to-b from-white via-brand-50/40 to-white",
  };

  const content = (
    <section
      id={id}
      className={`
        relative
        overflow-hidden
        py-14
        sm:py-20
        md:py-24
        lg:py-28
        ${backgrounds[background]}
        ${className}
      `}
    >
      {/* Subtle background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-24
          top-14
          h-48
          w-48
          sm:-left-40
          sm:top-20
          sm:h-72
          sm:w-72
          rounded-full
          bg-brand-500/5
          blur-[60px]
          sm:blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          bottom-0
          h-52
          w-52
          sm:-right-40
          sm:h-80
          sm:w-80
          rounded-full
          bg-brand-500/5
          blur-[70px]
          sm:blur-[110px]
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );

  if (!animate) {
    return content;
  }

  return (
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
        margin: "-80px",
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {content}
    </motion.div>
  );
}