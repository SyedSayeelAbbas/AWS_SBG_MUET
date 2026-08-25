import {
  Users,
  CalendarDays,
  GraduationCap,
  Cloud,
  Rocket,
  Flag,
  Award,
  Trophy,
  Mic,
  Handshake,
  BookOpen,
  Lightbulb,
  Code2,
} from "lucide-react";

import type {
  HeroData,
  AboutPreviewData,
  ServiceItem,
  TimelineItem,
  EventItem,
  GalleryImage,
  ImpactStat,
  TeamMember,
  Testimonial,
  Partner,
  JoinBenefit,
} from "../types/home";

/* ==========================================================
   HERO
========================================================== */

export const heroData: HeroData = {
  badge: "Official AWS Student Builder Club - MUET",
  title: "Build the Future with AWS Cloud",
  subtitle:
    "Empowering students through cloud computing, workshops, hackathons, certifications and innovation.",
  primaryButton: "Join Community",
  secondaryButton: "Explore Events",
  image: "/hero/hero.webp",
};

/* ==========================================================
   COMMUNITY STATS
========================================================== */

export const communityStats = [
  {
    id: 1,
    title: "Learning Hours",
    value: 1000,
    suffix: "+",
    description: "Hours of technical learning and practice.",
    icon: GraduationCap,
  },
  {
    id: 2,
    title: "Workshops",
    value: 25,
    suffix: "+",
    description: "Hands-on technical sessions.",
    icon: CalendarDays,
  },
  {
    id: 3,
    title: "Student Leaders",
    value: 15,
    suffix: "+",
    description: "Students leading community initiatives.",
    icon: Users,
  },
  {
    id: 4,
    title: "Cloud Labs",
    value: 10,
    suffix: "+",
    description: "Practical environments for cloud learning.",
    icon: Cloud,
  },
    {
  id: 5,
  title: "Learning Sessions",
  value: 25,
  suffix: "+",
  description: "Workshops & learning sessions.",
  icon: BookOpen,
},
];



/* ==========================================================
   ABOUT PREVIEW
========================================================== */

export const aboutPreview: AboutPreviewData = {
  badge: "About Us",
  title: "Creating Future Cloud Leaders",
  description:
    "AWS Student Builder Club MUET empowers students through technical workshops, collaborative projects, leadership opportunities and real-world cloud learning.",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80&auto=format&fit=crop",
  highlights: [
    { icon: Cloud, text: "Hands-on AWS workshops" },
    { icon: Users, text: "500+ member community" },
    { icon: Rocket, text: "Real-world student projects" },
    { icon: Award, text: "Industry-recognized certifications" },
  ],
};

/* ==========================================================
   SERVICES
========================================================== */

export const services: ServiceItem[] = [
  {
    id: 1,
    title: "AWS Workshops",
    description: "Hands-on cloud workshops.",
    icon: Cloud,
  },
  {
    id: 2,
    title: "Hacktober Fest",
    description: "Innovation competitions.",
    icon: Rocket,
  },
  {
    id: 3,
    title: "Learning Resources",
    description: "Guides and study material.",
    icon: BookOpen,
  },
  {
    id: 4,
    title: "Student Projects",
    description: "Build portfolio-ready apps.",
    icon: Code2,
  },
  {
    id: 5,
    title: "Leadership",
    description: "Develop teamwork skills.",
    icon: Users,
  },
  {
    id: 6,
    title: "Innovation",
    description: "Turn ideas into products.",
    icon: Lightbulb,
  },
];

/* ==========================================================
   TIMELINE
========================================================== */

export const timeline: TimelineItem[] = [
  {
    id: 1,
    year: "2023",
    title: "Club Founded",
    description: "AWS Cloud Club MUET established.",
    icon: Flag,
  },
  {
    id: 2,
    year: "2024",
    title: "Cloud Workshops",
    description: "Started practical AWS sessions.",
    icon: Cloud,
  },
  {
    id: 3,
    year: "2025",
    title: "Community Growth",
    description: "Expanded through hackathons.",
    icon: Users,
  },
  {
    id: 4,
    year: "2026",
    title: "Student Builder Club",
    description: "Official AWS Student Builder Club.",
    icon: Rocket,
  },
];

/* ==========================================================
   EVENTS
========================================================== */

export const featuredEvents: EventItem[] = [
  {
    id: 1,
    title: "AWS Cloud Bootcamp",
    description: "Hands-on cloud workshop.",
    date: "24 August 2026",
    location: "MUET Auditorium",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80&auto=format&fit=crop",
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Hackathon 2026",
    description: "Innovation challenge.",
    date: "10 September 2026",
    location: "Innovation Lab",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80&auto=format&fit=crop",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Career Connect",
    description: "Meet AWS professionals.",
    date: "18 September 2026",
    location: "Software Department",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=80&auto=format&fit=crop",
    status: "Upcoming",
  },
];

/* ==========================================================
   GALLERY
========================================================== */

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Workshop",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1000&q=80&auto=format&fit=crop",
    className: "col-span-2 row-span-2",
  },
  {
    id: 2,
    title: "Hackathon",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Seminar",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Community",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Orientation",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80&auto=format&fit=crop",
  },
];

/* ==========================================================
   COMMUNITY IMPACT
========================================================== */

export const impactStats: ImpactStat[] = [
  {
    id: 1,
    title: "Awards",
    value: "18",
    description: "Competition achievements.",
    icon: Award,
  },
  {
    id: 2,
    title: "Hackathons",
    value: "20+",
    description: "Organized events.",
    icon: Trophy,
  },
  {
    id: 3,
    title: "Guest Speakers",
    value: "30+",
    description: "Industry experts.",
    icon: Mic,
  },
  {
    id: 4,
    title: "Collaborations",
    value: "15+",
    description: "Industry partnerships.",
    icon: Handshake,
  },
];

/* ==========================================================
   TEAM
========================================================== */

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Muhammad Ali",
    role: "President",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Ayesha Khan",
    role: "Vice President",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Ahmed Raza",
    role: "General Secretary",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&q=80&auto=format&fit=crop",
  },
];

/* ==========================================================
   TESTIMONIALS
========================================================== */

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Student One",
    role: "AWS Learner",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop",
    quote:
      "The AWS Student Builder Club completely transformed my cloud learning journey.",
  },
  {
    id: 2,
    name: "Student Two",
    role: "Software Engineering",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop",
    quote:
      "The workshops and mentorship helped me gain confidence in AWS services.",
  },
  {
    id: 3,
    name: "Student Three",
    role: "Cloud Computing Student",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80&auto=format&fit=crop",
    quote:
      "Being part of the community gave me practical experience that I could apply to my own projects.",
  },
  {
    id: 4,
    name: "Student Four",
    role: "Software Engineering Student",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80&auto=format&fit=crop",
    quote:
      "The events, collaboration and learning opportunities made cloud computing much easier to understand.",
  },
];

/* ==========================================================
   PARTNERS
========================================================== */

export const partners: Partner[] = [
  {
    id: 1,
    name: "Amazon Web Services",
    logo: "/aws.svg",
  },
  {
    id: 2,
    name: "MUET",
    logo: "/muet.svg",
  },
  {
    id: 3,
    name: "GitHub Education",
    logo: "/github.svg",
  },
  {
    id: 4,
    name: "Google Cloud",
    logo: "/google-cloud.svg",
  },
];

/* ==========================================================
   JOIN BENEFITS
========================================================== */

export const joinBenefits: JoinBenefit[] = [
  {
    id: 1,
    text: "Free Community Membership",
  },
  {
    id: 2,
    text: "Hands-on AWS Workshops",
  },
  {
    id: 3,
    text: "Certification Guidance",
  },
  {
    id: 4,
    text: "Hackathons & Competitions",
  },
  {
    id: 5,
    text: "Networking Opportunities",
  },
  {
    id: 6,
    text: "Leadership Experience",
  },
];