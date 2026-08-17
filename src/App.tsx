import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

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
  return (
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

        {/* Gallery */}
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

        {/* Optional fallback */}
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
  );
}