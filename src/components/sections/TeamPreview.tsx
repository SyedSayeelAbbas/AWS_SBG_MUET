import { motion } from "framer-motion";

import Container from "../layout/Container";
import TeamPreviewCard from "../cards/TeamPreviewCard";
import { Button } from "../../components/ui/Button";

import { teamMembers } from "../../constants/home.constants";

export default function TeamPreview() {
  return (
    <section className="section bg-brand-50/40">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >

          <span className="rounded-full bg-brand-100 px-5 py-2 text-brand-700">
            Executive Team
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Meet Our Leadership
          </h2>

          <p className="mt-6 text-lg text-body">
            Students leading innovation,
            collaboration and cloud learning at MUET.
          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {teamMembers.map((member, index) => (

            <TeamPreviewCard
              key={member.id}
              index={index}
              {...member}
            />

          ))}

        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >

          <Button>
            View Full Team
          </Button>

        </motion.div>

      </Container>

    </section>
  );
}