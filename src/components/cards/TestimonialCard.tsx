import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Props {
  name: string;
  role: string;
  image: string;
  quote: string;
  index?: number;
}

export default function TestimonialCard({
  name,
  role,
  image,
  quote,
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
        relative
        overflow-hidden
        rounded-3xl
        border
        border-line
        bg-white
        p-8
        shadow-md
        transition-shadow
        duration-300
        hover:shadow-[0_25px_60px_rgba(107,70,193,.16)]
      "
    >
      <Quote
        size={72}
        strokeWidth={0}
        fill="currentColor"
        className="pointer-events-none absolute -right-3 -top-3 text-brand-100"
      />

      <div className="relative">
        <div className="mb-6 flex gap-1 text-brand-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>

        <p className="mb-8 leading-7 text-body italic">
          &ldquo;{quote}&rdquo;
        </p>

        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="h-14 w-14 rounded-full border-2 border-brand-100 object-cover"
          />

          <div>
            <h4 className="font-semibold text-heading">{name}</h4>
            <p className="text-sm text-body">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}