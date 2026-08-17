import { motion } from "framer-motion";
import { Cloud, Trophy, Award, Boxes } from "lucide-react";
// import {Github} from "lucide-react"

const badges = [
  { icon: Cloud, text: "AWS" },
  // { icon: GitHub, text: "GitHub" },
  { icon: Boxes, text: "Cloud Labs" },
  { icon: Trophy, text: "Hackathons" },
  { icon: Award, text: "Certifications" },
];

export default function HeroTrustBadges() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.08, delayChildren: 0.9 },
        },
      }}
      className="mt-8 flex flex-wrap gap-3"
    >
      {badges.map(({ icon: Icon, text }) => (
        <motion.div
          key={text}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          whileHover={{ y: -6, scale: 1.05 }}
          transition={{ duration: 0.25 }}
          className="group relative overflow-hidden rounded-full border border-white/50 bg-white/60 px-4 py-2.5 backdrop-blur-xl shadow-md hover:shadow-[0_15px_35px_rgba(124,58,237,.18)] transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-500/0 via-brand-400/10 to-brand-600/0 opacity-0 group-hover:opacity-100 transition" />
          <div className="relative flex items-center gap-2">
            <Icon size={16} className="text-brand-600 group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-semibold text-body">{text}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}