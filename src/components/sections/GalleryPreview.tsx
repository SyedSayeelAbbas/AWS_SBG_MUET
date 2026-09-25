import { motion } from "framer-motion";

import Container from "../layout/Container";
import GalleryCard from "../cards/GalleryCard";
import { galleryImages } from "../../constants/home.constants";

export default function GalleryPreview() {
  const largeImage = galleryImages[0];
  const middleTop = galleryImages[1];
  const middleBottom = galleryImages[2];
  const rightTop = galleryImages[3];
  const rightBottom = galleryImages[4];

  return (
    <section className="section bg-white">
      <Container>
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="
            mx-auto
            mb-10
            max-w-3xl
            px-2
            text-center
            sm:mb-16
            sm:px-0
          "
        >
          <span
            className="
              inline-flex
              rounded-full
              bg-brand-100
              px-4
              py-1.5
              text-xs
              font-semibold
              text-brand-700
              sm:px-5
              sm:py-2
              sm:text-sm
            "
          >
            Gallery
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              leading-tight
              text-heading
              sm:mt-6
              sm:text-5xl
            "
          >
            Moments That Inspire
          </h2>

          <p
            className="
              mt-4
              text-sm
              leading-6
              text-body
              sm:mt-6
              sm:text-lg
              sm:leading-7
            "
          >
            Every workshop, meetup and hackathon strengthens
            our community and creates future cloud leaders.
          </p>
        </motion.div>

        {/* =====================================================
            DESKTOP / TABLET GALLERY
        ====================================================== */}

        <div
          className="
            hidden
            h-[500px]
            grid-cols-12
            gap-4
            md:grid
            lg:h-[560px]
            lg:gap-5
          "
        >
          {/* =================================================
              LARGE LEFT IMAGE
          ================================================== */}
          {largeImage && (
            <div className="col-span-6 h-full">
              <GalleryCard
                index={0}
                image={largeImage.image}
                title={largeImage.title}
                aspectRatio="auto"
                className="h-full w-full"
              />
            </div>
          )}

          {/* =================================================
              MIDDLE COLUMN
          ================================================== */}
          <div
            className="
              col-span-3
              grid
              h-full
              grid-rows-2
              gap-4
              lg:gap-5
            "
          >
            {middleTop && (
              <GalleryCard
                index={1}
                image={middleTop.image}
                title={middleTop.title}
                aspectRatio="auto"
                className="h-full w-full"
              />
            )}

            {middleBottom && (
              <GalleryCard
                index={2}
                image={middleBottom.image}
                title={middleBottom.title}
                aspectRatio="auto"
                className="h-full w-full"
              />
            )}
          </div>

          {/* =================================================
              RIGHT COLUMN
          ================================================== */}
          <div
            className="
              col-span-3
              grid
              h-full
              grid-rows-2
              gap-4
              lg:gap-5
            "
          >
            {rightTop && (
              <GalleryCard
                index={3}
                image={rightTop.image}
                title={rightTop.title}
                aspectRatio="auto"
                className="h-full w-full"
              />
            )}

            {rightBottom && (
              <GalleryCard
                index={4}
                image={rightBottom.image}
                title={rightBottom.title}
                aspectRatio="auto"
                className="h-full w-full"
              />
            )}
          </div>
        </div>

        {/* =====================================================
            MOBILE GALLERY
            Different layout so mobile stays responsive.
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-2
            gap-3
            md:hidden
          "
        >
          {/* Large mobile image */}
          {largeImage && (
            <GalleryCard
              index={0}
              image={largeImage.image}
              title={largeImage.title}
              aspectRatio="16 / 10"
              className="col-span-2"
            />
          )}

          {/* Smaller images */}
          {galleryImages.slice(1, 5).map((image, index) => (
            <GalleryCard
              key={image.id}
              index={index + 1}
              image={image.image}
              title={image.title}
              aspectRatio="1 / 1"
              className="w-full"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}