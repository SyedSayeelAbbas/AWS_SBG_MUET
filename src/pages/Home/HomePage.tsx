import HeroSection from "../../components/sections/HeroSection";
import CommunityStats from "../../components/sections/CommunityStats";
import AboutPreview from "../../components/sections/AboutPreview";
import FeaturedEvents from "../../components/sections/FeaturedEvents";
import GalleryPreview from "../../components/sections/GalleryPreview";
import TeamPreview from "../../components/sections/TeamPreview";
import Testimonials from "../../components/sections/Testimonials";
import Partners from "../../components/sections/Partners";
// import WebsiteTeam from "../../components/sections/WebsiteTeam";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CommunityStats />
      <AboutPreview />
      <FeaturedEvents />
      <GalleryPreview />
      <TeamPreview />
      <Testimonials />
      <Partners />
      {/* <WebsiteTeam /> i added this on the about section page */}
    </>
  );
}