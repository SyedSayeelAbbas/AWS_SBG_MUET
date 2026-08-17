import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface Props {
  name: string;
  role: string;
  image: string;
  index?: number;
}

export default function TeamPreviewCard({
  name,
  role,
  image,
  index = 0,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-line
        bg-white
        shadow-md
        transition-shadow
        duration-300
        hover:shadow-[0_25px_60px_rgba(107,70,193,.16)]
      "
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/0 to-transparent" />

        {/* Socials — revealed on hover */}
        <div className="absolute bottom-5 right-5 flex translate-y-4 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href="#"
            aria-label={`${name} on LinkedIn`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-700 backdrop-blur-xl transition hover:bg-white"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="#"
            aria-label={`${name} on GitHub`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-700 backdrop-blur-xl transition hover:bg-white"
          >
            <FaGithub size={16} />
          </a>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
          {role}
        </p>

        <h3 className="mt-2 text-xl font-bold text-heading">
          {name}
        </h3>
      </div>
    </motion.div>
  );
}