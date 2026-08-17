import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from "lucide-react";

interface EventCardProps {
  title: string;
  image: string;
  images?: string[];
  date: string;
  location: string;
  description: string;
  status: "Upcoming" | "Completed" | "Live";
}

const FALLBACK_COVER = "https://picsum.photos/seed/event-fallback/1000/700";
const FALLBACK_LIGHTBOX = "https://picsum.photos/seed/event-fallback/1200/800";

export default function EventCard({
  title,
  image,
  images,
  date,
  location,
  description,
  status,
}: EventCardProps) {
  const gallery = images && images.length > 0 ? images : [image];

  const [showImage, setShowImage] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [coverLoaded, setCoverLoaded] = useState(false);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const openLightbox = () => {
    setActiveIndex(0);
    setDirection(0);
    setShowImage(true);
  };

  const goTo = (index: number, dir: number) => {
    setDirection(dir);
    setActiveIndex(index);
  };

  const next = () => goTo((activeIndex + 1) % gallery.length, 1);
  const prev = () =>
    goTo((activeIndex - 1 + gallery.length) % gallery.length, -1);

  /* Lock body scroll + keyboard nav while lightbox is open */
  useEffect(() => {
    if (!showImage) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowImage(false);
      if (e.key === "ArrowRight" && gallery.length > 1) next();
      if (e.key === "ArrowLeft" && gallery.length > 1) prev();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showImage, activeIndex, gallery.length]);

  /* Preload neighboring images so nav feels instant */
  useEffect(() => {
    if (!showImage || gallery.length < 2) return;
    const preload = (src: string) => {
      const img = new Image();
      img.src = src;
    };
    preload(gallery[(activeIndex + 1) % gallery.length]);
    preload(gallery[(activeIndex - 1 + gallery.length) % gallery.length]);
  }, [showImage, activeIndex, gallery]);

  /* Keep active thumbnail in view */
  useEffect(() => {
    thumbRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex]);

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir >= 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir >= 0 ? -60 : 60 }),
  };

  return (
    <>
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="
          group
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-[24px]
          border
          border-brand-100
          bg-white
          shadow-sm
          transition-shadow
          duration-300
          hover:shadow-xl
        "
      >
        {/* Image */}
        <div className="relative overflow-hidden bg-brand-50">
          {/* Blur-up placeholder */}
          {!coverLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-brand-100 via-violet-50 to-fuchsia-100" />
          )}

          <img
            src={gallery[0]}
            alt={title}
            onLoad={() => setCoverLoaded(true)}
            onError={(e) => {
              e.currentTarget.src = FALLBACK_COVER;
              setCoverLoaded(true);
            }}
            className={`
              h-56
              w-full
              object-cover
              duration-500
              group-hover:scale-105
              ${coverLoaded ? "opacity-100" : "opacity-0"}
              transition-opacity
            `}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

          {/* Hover zoom hint */}
          <button
            onClick={openLightbox}
            aria-label="View pictures"
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
          >
            <span
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/40
                bg-white/20
                text-white
                backdrop-blur-md
                transition-transform
                duration-300
                group-hover:scale-110
              "
            >
              <ZoomIn size={20} />
            </span>
          </button>

          <span
            className="
              absolute
              left-4
              top-4
              rounded-full
              border
              border-white/30
              bg-white/15
              px-3.5
              py-1.5
              text-xs
              font-semibold
              tracking-wide
              text-white
              backdrop-blur-md
            "
          >
            {status}
          </span>

          {gallery.length > 1 && (
            <span
              className="
                absolute
                right-4
                top-4
                rounded-full
                border
                border-white/30
                bg-white/15
                px-3
                py-1.5
                text-xs
                font-semibold
                text-white
                backdrop-blur-md
              "
            >
              {gallery.length} Photos
            </span>
          )}

          {/* View picture button */}
          <button
            onClick={openLightbox}
            className="
              absolute
              bottom-4
              right-4
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/30
              bg-white/15
              px-4
              py-2
              text-xs
              font-semibold
              text-white
              backdrop-blur-md
              transition-colors
              duration-200
              hover:bg-white/25
            "
          >
            <Eye size={14} />
            View Pictures
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-bold leading-snug text-heading">
            {title}
          </h3>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            <div className="flex items-center gap-2">
              <Calendar size={15} className="text-brand-600" />
              {date}
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-brand-600" />
              {location}
            </div>
          </div>

          <p className="mt-4 line-clamp-3 text-sm leading-6 text-muted">
            {description}
          </p>
        </div>
      </motion.article>

      {/* Lightbox / Gallery */}
      <AnimatePresence>
        {showImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowImage(false)}
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-black/85
              p-6
              backdrop-blur-sm
            "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl"
            >
              {/* Close */}
              <button
                onClick={() => setShowImage(false)}
                aria-label="Close"
                className="
                  absolute
                  -top-12
                  right-0
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  backdrop-blur-md
                  transition-colors
                  duration-200
                  hover:bg-white/20
                "
              >
                <X size={18} />
              </button>

              {/* Counter badge */}
              {gallery.length > 1 && (
                <span
                  className="
                    absolute
                    -top-12
                    left-0
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-white
                    backdrop-blur-md
                  "
                >
                  {activeIndex + 1} / {gallery.length}
                </span>
              )}

              <div className="relative overflow-hidden rounded-2xl bg-black/20">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.img
                    key={activeIndex}
                    src={gallery[activeIndex]}
                    alt={`${title} photo ${activeIndex + 1}`}
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_LIGHTBOX;
                    }}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    drag={gallery.length > 1 ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.6}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -80) next();
                      else if (info.offset.x > 80) prev();
                    }}
                    onClick={(e) => {
                      if (gallery.length < 2) return;
                      const { left, width } =
                        e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - left;
                      clickX > width / 2 ? next() : prev();
                    }}
                    className="max-h-[75vh] w-full cursor-grab object-contain shadow-2xl active:cursor-grabbing"
                  />
                </AnimatePresence>

                {gallery.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      aria-label="Previous photo"
                      className="
                        absolute
                        left-3
                        top-1/2
                        flex
                        h-10
                        w-10
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-white/15
                        text-white
                        backdrop-blur-md
                        transition-all
                        duration-200
                        hover:scale-110
                        hover:bg-white/25
                      "
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <button
                      onClick={next}
                      aria-label="Next photo"
                      className="
                        absolute
                        right-3
                        top-1/2
                        flex
                        h-10
                        w-10
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-white/15
                        text-white
                        backdrop-blur-md
                        transition-all
                        duration-200
                        hover:scale-110
                        hover:bg-white/25
                      "
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {gallery.length > 1 && (
                <div className="mt-4 flex items-center justify-center gap-2 overflow-x-auto px-1 py-1">
                  {gallery.map((thumb, index) => (
                    <button
                      key={thumb}
                      ref={(el) => {
                        thumbRefs.current[index] = el;
                      }}
                      onClick={() => goTo(index, index > activeIndex ? 1 : -1)}
                      className={`
                        h-14
                        w-20
                        shrink-0
                        overflow-hidden
                        rounded-lg
                        border-2
                        transition-all
                        duration-200
                        ${
                          index === activeIndex
                            ? "scale-105 border-white opacity-100"
                            : "border-transparent opacity-45 hover:opacity-80"
                        }
                      `}
                    >
                      <img
                        src={thumb}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="mt-4 text-center">
                <p className="text-lg font-semibold text-white">{title}</p>
                <p className="mt-1 text-sm text-white/60">
                  {date} · {location}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}