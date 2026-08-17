import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`
        relative
        max-w-3xl
        ${isCenter ? "mx-auto text-center" : "text-left"}
      `}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className={`
            mb-4
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-brand-200/70
            bg-white/60
            px-4
            py-2
            text-sm
            font-semibold
            text-brand-700
            shadow-sm
            backdrop-blur-xl
          `}
        >
          <span className="h-2 w-2 rounded-full bg-brand-600 animate-pulse" />

          {eyebrow}
        </motion.div>
      )}

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          text-4xl
          font-black
          leading-tight
          tracking-tight
          text-heading
          md:text-5xl
          lg:text-6xl
        "
      >
        {title}

        {highlight && (
          <>
            {" "}
            <span className="animated-gradient">
              {highlight}
            </span>
          </>
        )}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="
            mt-5
            text-base
            leading-7
            text-muted
            md:text-lg
            md:leading-8
          "
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}