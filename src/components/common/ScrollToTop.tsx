import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls the window to the top every time the route (pathname) changes.
 * React Router does NOT do this automatically — without this component,
 * navigating to a new page keeps the scroll position from the previous
 * page, which is why clicking a navbar link lands you in the middle of
 * the new page instead of at the top.
 *
 * Mount this once, inside <BrowserRouter>, above/around your <Routes>.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "instant" avoids a visible smooth-scroll animation on every navigation
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}