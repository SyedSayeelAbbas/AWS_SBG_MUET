import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "./components/layout/Layout";
import SplashScreen from "./components/common/SplashScreen";

import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import EventsPage from "./pages/Events/EventPage";
import EventDetailPage from "./pages/Events/EventDetailPage";
import GalleryPage from "./pages/Gallery/GalleryPage";
import TeamPage from "./pages/Team/TeamPage";
import BlogPage from "./pages/Blog/BlogPage";
import ContactPage from "./pages/Contact/ContactPage";
import JoinPage from "./pages/Join/JoinPage";

import { ROUTES } from "./constants/routes";

export default function App() {
  const { pathname } = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  // Keep the existing route-change scroll fix.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  const closeSplash = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen
            key="site-splash"
            onComplete={closeSplash}
          />
        )}
      </AnimatePresence>

      <Layout>
        <Routes>
          {/* Home */}
          <Route
            path={ROUTES.HOME}
            element={<HomePage />}
          />

          {/* About */}
          <Route
            path={ROUTES.ABOUT}
            element={<AboutPage />}
          />

          {/* Events */}
          <Route
            path={ROUTES.EVENTS}
            element={<EventsPage />}
          />

          <Route
            path={ROUTES.EVENT_DETAIL}
            element={<EventDetailPage />}
          />

          {/* Gallery route is kept even if Gallery is hidden from the navbar */}
          <Route
            path={ROUTES.GALLERY}
            element={<GalleryPage />}
          />

          {/* Team */}
          <Route
            path={ROUTES.TEAM}
            element={<TeamPage />}
          />

          {/* Blog */}
          <Route
            path={ROUTES.BLOGS}
            element={<BlogPage />}
          />

          {/* Contact */}
          <Route
            path={ROUTES.CONTACT}
            element={<ContactPage />}
          />

          {/* Join Community */}
          <Route
            path={ROUTES.JOIN}
            element={<JoinPage />}
          />

          {/* Fallback */}
          <Route
            path={ROUTES.NOT_FOUND}
            element={
              <div className="flex min-h-[60vh] items-center justify-center">
                <h1 className="text-3xl font-bold">
                  Page Not Found
                </h1>
              </div>
            }
          />
        </Routes>
      </Layout>
    </>
  );
}
