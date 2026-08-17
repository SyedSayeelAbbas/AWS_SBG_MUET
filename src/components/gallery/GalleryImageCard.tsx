import { motion } from "framer-motion";
import { ImageIcon, Expand } from "lucide-react";

import type { GalleryItem } from "../../constants/gallery";

interface GalleryImageCardProps {
  item: GalleryItem;
  index: number;
  onOpen: (item: GalleryItem) => void;
}

export default function GalleryImageCard({
  item,
  index,
  onOpen,
}: GalleryImageCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      whileHover={{ y: -6 }}
      onClick={() => onOpen(item)}
      role="button"
      tabIndex={0}
      aria-label={`View photo: ${item.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(item);
        }
      }}
      className={`
        group
        relative
        cursor-pointer
        overflow-hidden
        rounded-[28px]
        border
        border-line
        bg-white
        shadow-[0_12px_40px_rgba(0,0,0,0.05)]
        outline-none
        transition-shadow
        duration-300
        hover:shadow-[0_25px_65px_rgba(140,82,255,.18)]
        focus-visible:ring-4
        focus-visible:ring-brand-200
        ${
          item.featured
            ? "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2"
            : ""
        }
      `}
    >
      {/* Featured badge */}
      {item.featured && (
        <span
          className="
            absolute
            left-4
            top-4
            z-10
            rounded-full
            border
            border-white/40
            bg-[linear-gradient(135deg,#6B46C1,#8C52FF)]
            px-3
            py-1.5
            text-xs
            font-bold
            uppercase
            tracking-widest
            text-white
            shadow-md
          "
        >
          Featured
        </span>
      )}

      <div
        className={`relative w-full overflow-hidden ${
          item.featured
            ? "aspect-[4/3] sm:h-full sm:aspect-auto"
            : "aspect-[4/3]"
        }`}
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-[1.07]
          "
          onError={(event) => {
            event.currentTarget.style.display = "none";
            const placeholder =
              event.currentTarget.nextElementSibling;
            if (placeholder instanceof HTMLElement) {
              placeholder.style.display = "flex";
            }
          }}
        />

        {/* Premium placeholder (shown only if the image fails) */}
        <div
          className="
            absolute
            inset-0
            hidden
            flex-col
            items-center
            justify-center
            gap-2
            bg-[linear-gradient(135deg,#F3E8FF,#FAF9FF)]
            text-brand-400
          "
        >
          <ImageIcon size={item.featured ? 48 : 36} />
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-500/70">
            Image coming soon
          </span>
        </div>

        {/* Gradient overlay */}
        <div
          className={`
            absolute inset-0 bg-gradient-to-t
            ${
              item.featured
                ? "from-black/80 via-black/20"
                : "from-black/75 via-black/10"
            }
            to-transparent
            opacity-70
            transition-opacity
            duration-300
            group-hover:opacity-90
          `}
        />

        {/* Category badge */}
        <span
          className="
            absolute
            left-4
            top-4
            rounded-full
            border
            border-white/60
            bg-white/75
            px-3
            py-1.5
            text-xs
            font-semibold
            text-brand-700
            backdrop-blur-xl
          "
          style={item.featured ? { left: "auto", right: "1rem" } : undefined}
        >
          {item.category}
        </span>

        {/* View indicator */}
        <div
          className="
            absolute
            right-4
            top-4
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/50
            bg-white/20
            text-white
            opacity-0
            backdrop-blur-xl
            transition-all
            duration-300
            group-hover:opacity-100
          "
          style={item.featured ? { right: "auto", left: "1rem", top: "3.5rem" } : undefined}
        >
          <Expand size={16} />
        </div>

        {/* Title / description */}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white transition-transform duration-300 group-hover:-translate-y-1">
          <h3 className={`font-bold ${item.featured ? "text-2xl" : "text-lg"}`}>
            {item.title}
          </h3>

          {item.description && (
            <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-white/75">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
}