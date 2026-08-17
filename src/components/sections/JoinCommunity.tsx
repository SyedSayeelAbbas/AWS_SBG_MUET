import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

import Container from "../layout/Container";
import { Button } from "../../components/ui/Button";
import { Input } from "../ui/Input";
import { joinBenefits } from "../../constants/home.constants";

export default function JoinCommunity() {
  return (
    <section className="section relative overflow-hidden">
      {/* Atmospheric brand glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#FAF7FF] to-white" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-500/15 blur-[160px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-line
            bg-[linear-gradient(135deg,#7C3AED,#8C52FF_45%,#6B46C1)]
            p-12
            text-center
            shadow-[0_35px_90px_rgba(107,70,193,.35)]
            sm:p-16
          "
        >
          {/* Decorative noise + radial sheen */}
          <div className="premium-noise" />
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-xl">
              <Sparkles size={16} />
              Join the Movement
            </span>

            <h2 className="mx-auto mt-6 max-w-2xl text-4xl font-bold text-white sm:text-5xl">
              Ready to Join Our Community?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Discover cloud computing, learn from experts, build real
              projects, connect with a growing community &mdash; and grow
              into the engineer you want to become.
            </p>

            <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
              <Input
                placeholder="Enter your email"
                className="border-white/30 bg-white/90 backdrop-blur-xl"
              />

              <Button
                variant="secondary"
                className="!bg-white !text-brand-700 shrink-0"
                showArrow
              >
                Join Now
              </Button>
            </div>

            <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {joinBenefits.slice(0, 4).map((benefit) => (
                <span
                  key={benefit.id}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/85"
                >
                  <ArrowRight size={14} className="text-white/70" />
                  {benefit.text}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}