import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureItem({
  icon: Icon,
  title,
  description,
}: FeatureItemProps) {
  return (
    <motion.div
      whileHover={{
        x: 6,
      }}
      className="group flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-brand-50"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg transition-transform duration-300 group-hover:rotate-6">
        <Icon size={22} />
      </div>

      <div>
        <h4 className="text-lg font-semibold text-heading">
          {title}
        </h4>

        <p className="mt-1 text-sm text-muted">
          {description}
        </p>
      </div>
    </motion.div>
  );
}