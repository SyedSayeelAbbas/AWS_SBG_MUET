import { motion } from "framer-motion";
import {
  Star,
  Users,
  ShieldCheck,
} from "lucide-react";

export default function HeroCommunityCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1.2,
        duration: 0.8,
      }}
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      className="
        group
        relative
        mt-10
        overflow-hidden
        rounded-3xl
        border
        border-white/50
        bg-white/65
        p-6
        backdrop-blur-2xl
        shadow-xl
      "
    >
      {/* Animated Border */}

      <div
        className="
          absolute
          inset-0
          rounded-3xl
          bg-gradient-to-r
          from-brand-500/20
          via-brand-500/20
          to-brand-600/20
          opacity-0
          blur-xl
          transition
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative">

        {/* Rating */}

        <div className="flex items-center gap-1">

          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            >
              <Star
                size={18}
                className="fill-brand-500 text-brand-500"
              />
            </motion.div>
          ))}

          <span className="ml-3 font-semibold text-body">
            5.0 Student Rating
          </span>

        </div>

        {/* Heading */}

        <h3
          className="
            mt-4
            text-xl
            font-bold
            text-heading
          "
        >
          Trusted by Students Across Pakistan
        </h3>

        <p
          className="
            mt-2
            text-sm
            leading-7
            text-body
          "
        >
          Join hundreds of students learning cloud
          computing through AWS workshops,
          hackathons, certifications and real-world
          engineering projects.
        </p>

        {/* Bottom */}

        <div
          className="
            mt-6
            flex
            items-center
            justify-between
          "
        >
          {/* Avatars */}

          <div className="flex -space-x-3">

            {[
              "#8C52FF",
              "#7C3AED",
              "#6B46C1",
              "#8C52FF",
              "#7C3AED",
            ].map((color, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                }}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-white
                  text-sm
                  font-bold
                  text-white
                "
                style={{
                  background: color,
                }}
              >
                {index + 1}
              </motion.div>
            ))}

          </div>

          {/* Member Count */}

          <div className="text-right">

            <div
              className="
                flex
                items-center
                justify-end
                gap-2
              "
            >
              <Users
                size={18}
                className="text-brand-600"
              />

              <span
                className="
                  text-xl
                  font-bold
                  text-heading
                "
              >
                500+
              </span>
            </div>

            <span className="text-sm text-body">
              Active Members
            </span>

          </div>

        </div>

        {/* Trust */}

        <div
          className="
            mt-6
            flex
            items-center
            gap-2
            text-sm
            font-medium
            text-brand-600
          "
        >
          <ShieldCheck size={18} />

          Official AWS Student Builder Club
        </div>

      </div>
    </motion.div>
  );
}