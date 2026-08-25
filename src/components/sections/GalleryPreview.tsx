
import { motion } from "framer-motion";

import Container from "../layout/Container";
import GalleryCard from "../cards/GalleryCard";
import { galleryImages } from "../../constants/home.constants";

export default function GalleryPreview() {
  return (
    <section className="section bg-white">
      <Container>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl px-2 text-center sm:mb-16 sm:px-0"
        >
          <span className="inline-flex rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-700 sm:px-5 sm:py-2 sm:text-sm">
            Gallery
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight sm:mt-6 sm:text-5xl">
            Moments That Inspire
          </h2>

          <p className="mt-4 text-sm leading-6 text-body sm:mt-6 sm:text-lg sm:leading-7">
            Every workshop, meetup and hackathon strengthens
            our community and creates future cloud leaders.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div
          className="
            grid
            grid-cols-2
            auto-rows-[150px]
            gap-3
            sm:auto-rows-[200px]
            sm:gap-4
            md:grid-cols-2
            md:auto-rows-[250px]
            md:gap-5
            lg:grid-cols-4
          "
        >
          {galleryImages.map((image, index) => (
            <GalleryCard
              key={image.id}
              index={index}
              {...image}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}
