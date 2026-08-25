import { useEffect, useMemo, useState } from "react";

import {
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Maximize2,
  Sparkles,
  X,
} from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import Container from "../../components/layout/Container";
import SectionWrapper from "../../components/common/SectionWrapper";
import SectionHeading from "../../components/common/SectionHeading";
import { Button } from "../../components/ui/Button";

import {
  galleryItems,
  galleryCategories,
  type GalleryCategory,
  type GalleryItem,
} from "../../constants/gallery";

// Shared easing curve — matches AboutPage.jsx / EventsPage.jsx
const EASE = [0.22, 1, 0.36, 1];


export default function GalleryPage() {
  /* =========================================================
     STATE
  ========================================================= */

  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>("All");

  const [selectedImage, setSelectedImage] =
    useState<GalleryItem | null>(null);

  const [imageLoading, setImageLoading] =
    useState<Record<string, boolean>>({});


  /* =========================================================
     FILTERED GALLERY
  ========================================================= */

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return galleryItems;
    }

    return galleryItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);


  /* =========================================================
     CURRENT LIGHTBOX INDEX
  ========================================================= */

  const selectedIndex = useMemo(() => {
    if (!selectedImage) {
      return -1;
    }

    return filteredItems.findIndex(
      (item) => item.id === selectedImage.id
    );
  }, [selectedImage, filteredItems]);


  /* =========================================================
     NEXT IMAGE
  ========================================================= */

  const showNextImage = () => {
    if (!selectedImage || filteredItems.length === 0) {
      return;
    }

    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage.id
    );

    const nextIndex =
      (currentIndex + 1) % filteredItems.length;

    setSelectedImage(filteredItems[nextIndex]);
  };


  /* =========================================================
     PREVIOUS IMAGE
  ========================================================= */

  const showPreviousImage = () => {
    if (!selectedImage || filteredItems.length === 0) {
      return;
    }

    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage.id
    );

    const previousIndex =
      (currentIndex - 1 + filteredItems.length) %
      filteredItems.length;

    setSelectedImage(filteredItems[previousIndex]);
  };


  /* =========================================================
     KEYBOARD CONTROLS
  ========================================================= */

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";
    };
  }, [selectedImage, filteredItems]);


  /* =========================================================
     CATEGORY CHANGE
  ========================================================= */

  const handleCategoryChange = (
    category: GalleryCategory
  ) => {
    setActiveCategory(category);
    setSelectedImage(null);
  };


  /* =========================================================
     PAGE
  ========================================================= */

  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#faf9ff] pt-28 sm:pt-28 md:pt-32 lg:pt-36">

        {/* Background */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-1/2 top-[-220px] h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-brand-200/30 blur-[130px]" />

          <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-violet-200/25 blur-[110px]" />

          <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-fuchsia-200/20 blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#6d28d9 1px, transparent 1px), linear-gradient(90deg, #6d28d9 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />

        </div>


        <Container>

          {/* Hero content */}

          <div className="relative mx-auto max-w-4xl text-center">

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/80 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-600 shadow-sm backdrop-blur-xl sm:mb-6 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]"
            >
              <Camera size={14} />

              Our Gallery
            </motion.div>


            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.08,
              }}
              className="text-4xl font-black leading-[1.05] tracking-[-0.03em] text-heading sm:text-6xl sm:leading-[1.02] sm:tracking-[-0.05em] md:text-7xl"
            >
              Moments worth

              <span className="block bg-gradient-to-r from-brand-500 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                remembering.
              </span>
            </motion.h1>


            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.16,
              }}
              className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-6 text-gray-500 sm:mt-7 sm:px-0 sm:text-base sm:leading-7 md:text-lg md:leading-8"
            >
              Explore the people, workshops, events and
              experiences that continue to shape the AWS
              Student Builder Club MUET community.
            </motion.p>

          </div>


          {/* Stats */}

          <div className="relative mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-3 md:mt-14 md:gap-4">

            {[
              {
                icon: ImageIcon,
                value: `${galleryItems.length}+`,
                label: "Captured Moments",
              },
              {
                icon: Camera,
                value: "Multiple",
                label: "Experiences",
              },
              {
                icon: Sparkles,
                value: "Growing",
                label: "Community",
              },
            ].map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.25 + index * 0.1,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="group flex items-center gap-3 rounded-2xl border border-white/70 bg-white/70 p-3.5 shadow-[0_15px_45px_rgba(70,40,130,0.06)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_20px_55px_rgba(70,40,130,0.11)] sm:gap-4 sm:p-4 md:p-5"
                >

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11">
                    <Icon size={20} />
                  </div>

                  <div>
                    <p className="text-base font-black text-heading sm:text-lg md:text-xl">
                      {stat.value}
                    </p>

                    <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
                      {stat.label}
                    </p>
                  </div>

                </motion.div>
              );
            })}

          </div>

        </Container>


        <div className="h-20 md:h-24" />

      </section>


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <SectionWrapper background="white">

        <Container>

          {/* Section heading */}

          <SectionHeading
            eyebrow="Explore Our Journey"
            title="Stories captured"
            highlight="in frames."
            description="From hands-on workshops to community gatherings, explore the moments that make our journey special."
          />


          {/* =================================================
              FILTERS
          ================================================= */}

          <div className="relative mt-8">

            <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-none">

              {galleryCategories.map((category) => {
                const isActive =
                  activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      handleCategoryChange(category)
                    }
                    className={`
                      relative shrink-0
                      rounded-full
                      px-5 py-2.5
                      text-sm font-bold
                      transition-all duration-300
                      ${
                        isActive
                          ? "bg-heading text-white shadow-lg shadow-gray-900/10"
                          : "border border-gray-200 bg-white text-gray-500 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600"
                      }
                    `}
                  >
                    {category}

                    {isActive && (
                      <motion.span
                        layoutId="gallery-active-filter"
                        className="absolute inset-0 -z-10 rounded-full"
                      />
                    )}
                  </button>
                );
              })}

            </div>

          </div>


          {/* =================================================
              GALLERY GRID
          ================================================= */}

          <motion.div
            layout
            className="mt-8 grid grid-cols-2 gap-3 sm:gap-4"
          >

            <AnimatePresence mode="popLayout">

              {filteredItems.map((item, index) => {

                return (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{
                      opacity: 0,
                      y: 25,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: Math.min(
                        index * 0.04,
                        0.25
                      ),
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    onClick={() =>
                      setSelectedImage(item)
                    }
                    className={`
                      group
                      relative
                      aspect-[4/5]
                      cursor-pointer
                      overflow-hidden
                      rounded-[18px]
                      border
                      border-gray-200/70
                      bg-gray-100
                      shadow-[0_10px_35px_rgba(0,0,0,0.05)]
                      transition-all
                      duration-500
                      hover:shadow-[0_20px_55px_rgba(124,58,237,0.14)]
                      sm:rounded-[22px]
                    `}
                  >

                    {/* =================================================
                        IMAGE PLACEHOLDER
                    ================================================= */}

                    <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-violet-50 to-fuchsia-100">

                      <div className="absolute inset-0 flex items-center justify-center">

                        <ImageIcon
                          size={42}
                          className="text-brand-300/50"
                        />

                      </div>

                    </div>


                    {/* =================================================
                        IMAGE
                    ================================================= */}

                    <img
                      src={item.image}
                      alt={item.title}
                      loading={
                        index < 2
                          ? "eager"
                          : "lazy"
                      }
                      className={`
                        relative
                        h-full
                        w-full
                        object-cover
                        transition-all
                        duration-1000
                        group-hover:scale-110
                        ${
                          imageLoading[item.id] === false
                            ? "opacity-100"
                            : "opacity-0"
                        }
                      `}
                      onLoad={() =>
                        setImageLoading((prev) => ({
                          ...prev,
                          [item.id]: false,
                        }))
                      }
                      onError={(event) => {
                        event.currentTarget.style.display =
                          "none";
                      }}
                    />


                    {/* =================================================
                        IMAGE GRADIENT
                    ================================================= */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />


                    {/* =================================================
                        TOP CONTENT
                    ================================================= */}

                    <div className="absolute left-3 right-3 top-3 flex items-center justify-between sm:left-3.5 sm:right-3.5 sm:top-3.5">

                      {/* Category */}

                      <span className="rounded-full border border-white/30 bg-white/15 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-xl sm:px-3 sm:py-1.5 sm:text-[11px]">
                        {item.category}
                      </span>


                      {/* Expand */}

                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/15 text-white opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:opacity-100 sm:h-9 sm:w-9">
                        <Maximize2 size={14} />
                      </div>

                    </div>


                    {/* =================================================
                        FEATURED
                    ================================================= */}

                    {item.featured && (
                      <div className="absolute left-3 top-12 sm:left-3.5 sm:top-14">

                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-brand-600 shadow-lg">

                          <Sparkles size={10} />

                          Featured

                        </span>

                      </div>
                    )}


                    {/* =================================================
                        CARD CONTENT
                    ================================================= */}

                    <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-4">

                      <motion.div
                        initial={false}
                        className="translate-y-1 transition-transform duration-500 group-hover:translate-y-0"
                      >

                        <h3 className="text-base font-black tracking-tight text-white sm:text-lg">
                          {item.title}
                        </h3>


                        {item.description && (
                          <p className="mt-1.5 line-clamp-2 max-w-xl text-xs leading-5 text-white/70">
                            {item.description}
                          </p>
                        )}


                        <div className="mt-3 flex items-center gap-2 text-[11px] font-bold text-white/75 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                          <span>
                            View moment
                          </span>

                          <ArrowRight
                            size={13}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />

                        </div>

                      </motion.div>

                    </div>

                  </motion.article>
                );
              })}

            </AnimatePresence>

          </motion.div>


          {/* =================================================
              EMPTY STATE
          ================================================= */}

          {filteredItems.length === 0 && (

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mt-8 flex min-h-[280px] flex-col items-center justify-center rounded-[28px] border border-dashed border-brand-200 bg-brand-50/30 px-6 text-center"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                <ImageIcon size={25} />
              </div>

              <h3 className="mt-4 text-xl font-black text-heading">
                No moments here yet
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
                We're preparing more moments from the AWS
                Student Builder Club MUET community.
              </p>

            </motion.div>

          )}

        </Container>

      </SectionWrapper>


      {/* =====================================================
          CTA — rebuilt to match EventsPage / AboutPage CTA
      ===================================================== */}

      <SectionWrapper background="gradient" className="pt-0">

        <Container>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="
              relative
              overflow-hidden
              rounded-[26px]
              border
              border-white/10
              bg-brand-700
              px-5
              py-10
              text-center
              shadow-[0_30px_80px_rgba(76,29,149,0.35)]
              sm:rounded-[36px]
              sm:px-7
              sm:py-14
              md:px-14
              md:py-16
            "
          >

            {/* Glow layers — matches EventsPage CTA */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-72
                w-72
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/10
                blur-[100px]
              "
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-fuchsia-400/20 blur-[90px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-brand-400/20 blur-[90px]"
            />

            {/* Subtle grid texture for depth */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.07]
                [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)]
                [background-size:32px_32px]
              "
            />

            {/* Floating particles — same pattern as EventsPage / AboutPage */}
            {[...Array(6)].map((_, index) => (
              <motion.span
                key={index}
                aria-hidden="true"
                animate={{
                  y: [0, -18, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  delay: index * 0.35,
                }}
                className="
                  pointer-events-none
                  absolute
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-white
                "
                style={{
                  left: `${10 + index * 16}%`,
                  top: `${18 + (index % 3) * 25}%`,
                }}
              />
            ))}

            <div className="relative">

              {/* Icon badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
                className="
                  mx-auto
                  mb-6
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  shadow-lg
                  backdrop-blur-md
                "
              >
                <Camera size={24} />
              </motion.div>

              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
                className="text-sm font-semibold uppercase tracking-[0.2em] text-white"
              >
                Join the Story
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
                className="mx-auto mt-4 max-w-3xl text-2xl font-black leading-tight text-white sm:text-4xl md:text-5xl"
              >
                Your next moment could be{" "}
                <span className="block text-white">
                  part of our story.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.28, ease: EASE }}
                className="mx-auto mt-5 max-w-xl text-base leading-7 text-white"
              >
                Join the AWS Student Builder Club MUET community,
                participate in our activities and create memories
                worth sharing.
              </motion.p>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.36, ease: EASE }}
                className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <Link to="/join" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    showArrow
                    className="
                      w-full
                      !border-0
                      !bg-white
                      
                      shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                      hover:!bg-white
                      sm:w-auto
                    "
                  >
                    Join Community
                  </Button>
                </Link>

                <Link to="/events" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    showArrow
                    className="
                      w-full
                      !border
                      !border-white/30
                      !bg-white/10
                      !shadow-none
                      hover:!bg-white/20
                      sm:w-auto
                    "
                  >
                    Explore Events
                  </Button>
                </Link>
              </motion.div>

            </div>

          </motion.div>

        </Container>

      </SectionWrapper>


      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-2 backdrop-blur-xl sm:p-6 md:p-10"
            onClick={() =>
              setSelectedImage(null)
            }
          >

            {/* Close */}

            <button
              type="button"
              aria-label="Close image viewer"
              onClick={() =>
                setSelectedImage(null)
              }
              className="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/20 sm:right-7 sm:top-7 sm:h-11 sm:w-11"
            >
              <X size={19} className="sm:hidden" />
              <X size={21} className="hidden sm:block" />
            </button>


            {/* Previous */}

            {filteredItems.length > 1 && (

              <button
                type="button"
                aria-label="Previous image"
                onClick={(event) => {
                  event.stopPropagation();
                  showPreviousImage();
                }}
                className="absolute left-2 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/20 sm:left-6 sm:h-11 sm:w-11 md:left-8"
              >
                <ChevronLeft size={19} className="sm:hidden" />
                <ChevronLeft size={22} className="hidden sm:block" />
              </button>

            )}


            {/* Next */}

            {filteredItems.length > 1 && (

              <button
                type="button"
                aria-label="Next image"
                onClick={(event) => {
                  event.stopPropagation();
                  showNextImage();
                }}
                className="absolute right-2 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/20 sm:right-6 sm:h-11 sm:w-11 md:right-8"
              >
                <ChevronRight size={19} className="sm:hidden" />
                <ChevronRight size={22} className="hidden sm:block" />
              </button>

            )}


            {/* Image */}

            <motion.div
              key={selectedImage.id}
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 15,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="relative flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-[16px] border border-white/10 bg-black/50 shadow-2xl backdrop-blur-xl sm:rounded-[24px]"
            >

              <div className="flex max-h-[55vh] items-center justify-center bg-black/30 sm:max-h-[75vh]">

                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[55vh] w-auto max-w-full object-contain sm:max-h-[75vh]"
                />

              </div>


              {/* Image information */}

              <div className="border-t border-white/10 bg-black/65 px-4 py-3.5 backdrop-blur-xl sm:px-5 sm:py-4 md:px-7 md:py-5">

                <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">

                  <div className="min-w-0">

                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">

                      <span className="rounded-full bg-brand-600 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white sm:px-3 sm:text-[11px]">
                        {selectedImage.category}
                      </span>

                      {selectedImage.featured && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-violet-200">

                          <Sparkles size={12} />

                          Featured

                        </span>
                      )}

                    </div>


                    <h3 className="mt-2 text-base font-black text-white sm:text-xl">
                      {selectedImage.title}
                    </h3>


                    {selectedImage.description && (
                      <p className="mt-1.5 line-clamp-2 max-w-2xl text-xs leading-5 text-white/60 sm:line-clamp-none sm:text-sm sm:leading-6">
                        {selectedImage.description}
                      </p>
                    )}

                  </div>


                  {/* Counter */}

                  <div className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-bold text-white/60 sm:px-3 sm:py-1.5 sm:text-xs">
                    {selectedIndex + 1} / {filteredItems.length}
                  </div>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </main>
  );
}