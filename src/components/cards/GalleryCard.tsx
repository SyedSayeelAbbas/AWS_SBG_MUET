import { motion } from "framer-motion";

interface GalleryCardProps {
  image: string;
  title: string;
  className?: string;
  index?: number;
  /** Fallback aspect ratio used only if the parent/className doesn't
   *  already give this card a definite height (e.g. no h-*, no
   *  aspect-*, no grid row-span). Explicit height/aspect classes
   *  passed via `className` always win over this. */
  aspectRatio?: string;
}

export default function GalleryCard({
  image,
  title,
  className = "",
  index = 0,
  aspectRatio = "4 / 5",
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
      style={{ aspectRatio }}
      className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl ${className}`}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          duration-700
          group-hover:scale-110
        "
      />

      {/*
        Gradient overlay:
        visible by default (mobile / touch has no hover state to
        reveal it), fades out on larger pointer-driven screens and
        reappears on hover there.
      */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-black/20
          to-transparent
          opacity-100
          transition-opacity
          duration-300
          sm:opacity-0
          sm:group-hover:opacity-100
        "
      />

      {/*
        Caption:
        shown by default on mobile, hover-reveal from sm: up.
      */}
      <div
        className="
          absolute
          bottom-3
          left-3
          right-3
          opacity-100
          transition-all
          duration-300
          sm:bottom-5
          sm:left-5
          sm:right-5
          sm:translate-y-5
          sm:opacity-0
          sm:group-hover:translate-y-0
          sm:group-hover:opacity-100
        "
      >
        <h3 className="text-base font-bold text-white sm:text-lg">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}