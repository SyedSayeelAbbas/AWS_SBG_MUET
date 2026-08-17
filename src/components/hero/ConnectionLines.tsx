import { motion } from "framer-motion";

export default function ConnectionLines() {
  return (
    <motion.svg
      className="absolute inset-0 h-full w-full pointer-events-none"
      viewBox="0 0 700 700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <defs>
        <linearGradient id="lineGradient">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0" />
          <stop offset="50%" stopColor="#7C3AED" stopOpacity=".45" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Top-Left to Center (Animated Pulse) */}
      <motion.line
        x1="185" y1="180" x2="350" y2="330"
        stroke="url(#lineGradient)" strokeWidth="2"
        strokeDasharray="100"
        animate={{ strokeDashoffset: [100, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Top-Right to Center */}
      <motion.line
        x1="520" y1="170" x2="350" y2="330"
        stroke="url(#lineGradient)" strokeWidth="2"
        strokeDasharray="100"
        animate={{ strokeDashoffset: [100, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Bottom-Left to Center */}
      <motion.line
        x1="170" y1="520" x2="350" y2="330"
        stroke="url(#lineGradient)" strokeWidth="2"
        strokeDasharray="100"
        animate={{ strokeDashoffset: [100, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Bottom-Right to Center */}
      <motion.line
        x1="540" y1="500" x2="350" y2="330"
        stroke="url(#lineGradient)" strokeWidth="2"
        strokeDasharray="100"
        animate={{ strokeDashoffset: [100, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
    </motion.svg>
  );
}