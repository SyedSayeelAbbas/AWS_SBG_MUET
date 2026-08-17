import { useEffect } from "react";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";

interface ParallaxValue {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

/**
 * Tracks normalized mouse position (-1 to 1) as Framer Motion values.
 *
 * IMPORTANT: this intentionally avoids React state (`useState`).
 * Motion values update the DOM directly on the animation frame,
 * bypassing React re-renders entirely. The previous implementation
 * called `setState` on every `mousemove` event (up to ~100x/sec),
 * which re-rendered the whole hero illustration tree every time and
 * was the main source of hero-section jank/lag.
 */
export default function useMouseParallax(): ParallaxValue {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Smooth the raw pointer input so consumers don't each need their
  // own spring (previously every floating card ran its own spring).
  const x = useSpring(rawX, { stiffness: 55, damping: 20, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 55, damping: 20, mass: 0.4 });

  useEffect(() => {
    // Respect reduced-motion preference: skip the listener entirely.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;

    const handleMove = (e: MouseEvent) => {
      // Coalesce rapid mousemove events to one update per animation
      // frame instead of processing every single event.
      if (frame) return;

      frame = requestAnimationFrame(() => {
        rawX.set((e.clientX / window.innerWidth - 0.5) * 2);
        rawY.set((e.clientY / window.innerHeight - 0.5) * 2);
        frame = 0;
      });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [rawX, rawY]);

  return { x, y };
}