import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Props {
  name: string;
  role: string;
  image?: string;
  quote: string;
  index?: number;
}

export default function TestimonialCard({
  name,
  role,
  image = "",
  quote,
  index = 0,
}: Props) {
  const initials = name
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
      }}
      whileHover={{
        y: -4,
      }}
      className="
        group
        relative
        flex
        h-full
        min-h-[340px]
        w-full
        flex-col
        overflow-hidden
        rounded-[1.5rem]
        border
        border-brand-100
        bg-white
        p-6
        shadow-[0_10px_35px_rgba(71,45,128,0.07)]
        transition-all
        duration-300

        hover:border-brand-200
        hover:shadow-[0_20px_50px_rgba(71,45,128,0.12)]

        sm:min-h-[360px]
        sm:rounded-[1.75rem]
        sm:p-7
      "
    >
      {/* Background glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-brand-500/10
          blur-3xl
        "
      />

      {/* Quote icon */}

      <div
        className="
          relative
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-brand-100
          text-brand-600

          sm:h-11
          sm:w-11
        "
      >
        <Quote
          size={19}
          fill="currentColor"
        />
      </div>

      {/* Review */}

      <blockquote
        className="
          relative
          mt-5
          flex-1
          text-sm
          leading-7
          text-body

          sm:text-[15px]
          sm:leading-7
        "
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}

      <div
        className="
          relative
          mt-6
          flex
          min-h-[72px]
          shrink-0
          items-center
          gap-4
          border-t
          border-brand-100
          pt-5
        "
      >
        {/* Profile Picture / Initial Avatar */}

        {image ? (
          <img
            src={image}
            alt={name}
            className="
              h-12
              w-12
              shrink-0
              rounded-full
              border-2
              border-brand-100
              object-cover

              sm:h-14
              sm:w-14
            "
          />
        ) : (
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-brand-600
              to-brand-500
              text-sm
              font-bold
              text-white
              shadow-[0_8px_20px_rgba(107,70,193,0.20)]

              sm:h-14
              sm:w-14
              sm:text-base
            "
          >
            {initials}
          </div>
        )}

        {/* Author Details */}

        <div className="min-w-0 flex-1">
          <h4
            className="
              text-sm
              font-bold
              leading-5
              text-heading

              sm:text-base
            "
          >
            {name}
          </h4>

          <p
            className="
              mt-1
              text-xs
              leading-5
              text-body

              sm:text-sm
            "
          >
            {role}
          </p>
        </div>
      </div>
    </motion.article>
  );
}