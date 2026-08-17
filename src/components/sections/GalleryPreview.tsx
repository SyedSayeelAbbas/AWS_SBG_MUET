import { motion } from "framer-motion";

import Container from "../layout/Container";
import GalleryCard from "../cards/GalleryCard";
import { galleryImages } from "../../constants/home.constants";

export default function GalleryPreview() {
  return (
    <section className="section bg-white">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >

          <span className="rounded-full bg-brand-100 px-5 py-2 text-brand-700">
            Gallery
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Moments That Inspire
          </h2>

          <p className="mt-6 text-lg text-body">
            Every workshop, meetup and hackathon strengthens
            our community and creates future cloud leaders.
          </p>

        </motion.div>

        <div className="grid auto-rows-[250px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

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