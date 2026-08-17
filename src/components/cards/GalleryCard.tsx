import { motion } from "framer-motion";

interface GalleryCardProps {
  image: string;
  title: string;
  className?: string;
  index?: number;
}

export default function GalleryCard({
  image,
  title,
  className = "",
  index = 0,
}: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay: (index % 5) * 0.08 },
      }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={`group relative overflow-hidden rounded-3xl ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="
          h-full
          w-full
          object-cover
          duration-700
          group-hover:scale-110
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-black/20
          to-transparent
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      <div
        className="
          absolute
          bottom-5
          left-5
          translate-y-5
          opacity-0
          transition-all
          duration-300
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <h3 className="text-lg font-bold text-white">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}