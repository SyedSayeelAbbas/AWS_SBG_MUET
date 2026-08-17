import HeroSection from "../../components/sections/HeroSection";
import CommunityStats from "../../components/sections/CommunityStats";
import AboutPreview from "../../components/sections/AboutPreview";
import WhatWeDo from "../../components/sections/WhatWeDo";
import JourneyTimeline from "../../components/sections/JourneyTimeline";
import FeaturedEvents from "../../components/sections/FeaturedEvents";
import GalleryPreview from "../../components/sections/GalleryPreview";
import CommunityImpact from "../../components/sections/CommunityImpact";
import TeamPreview from "../../components/sections/TeamPreview";
import Testimonials from "../../components/sections/Testimonials";
import Partners from "../../components/sections/Partners";
import JoinCommunity from "../../components/sections/JoinCommunity";
import WebsiteTeam from "../../components/sections/WebsiteTeam";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CommunityStats />
      <AboutPreview />
      <WhatWeDo />
      <JourneyTimeline />
      <FeaturedEvents />
      <GalleryPreview />
      <CommunityImpact />
      <TeamPreview />
      <Testimonials />
      <Partners />
      <JoinCommunity />
      <WebsiteTeam />
    </>
  );
}