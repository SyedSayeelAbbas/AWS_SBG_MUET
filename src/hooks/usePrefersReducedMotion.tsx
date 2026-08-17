import { useEffect, useState } from "react";

/**
 * Returns true if the user has requested reduced motion at the OS level.
 * Used to scale back or skip continuous decorative animations in the
 * hero section for both accessibility and performance.
 */
export default function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  return reduced;
}