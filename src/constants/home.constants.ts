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
    value: 40,
    suffix: "+",
    description: "Hours of technical learning and practice.",
    icon: GraduationCap,
  },
  {
    id: 2,
    title: "Workshops",
    value: 17,
    suffix: "+",
    description: "Hands-on technical sessions.",
    icon: CalendarDays,
  },
  {
    id: 3,
    title: "Student Leaders",
    value: 4,
    suffix: "+",
    description: "Students leading community initiatives.",
    icon: Users,
  },
  {
    id: 4,
    title: "Cloud Labs",
    value: 7,
    suffix: "+",
    description: "Practical environments for cloud learning.",
    icon: Cloud,
  },
    {
  id: 5,
  title: "Learning Sessions",
  value: 17,
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
  image: "/events/4th Tenure/Event 2.jpeg",
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
    image: "/events/SCD/8.JPG",
    className: "col-span-2 row-span-2",
  },
  {
    id: 2,
    title: "Hackathon",
    image: "/events/Hacktober/1.JPG",
  },
  {
    id: 3,
    title: "Seminar",
    image: "/events/SCD/5.JPG",
  },
  {
    id: 4,
    title: "Community",
    image: "/events/Hacktober/2.JPG",
  },
  {
    id: 5,
    title: "Orientation",
    image: "/events/4th Tenure/Event 2.jpeg",
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
    value: "4+",
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
    name: "Rania Sadia Shah",
    role: "Leader",
    image: "public/team/current_tenure/rania.webp",
  },
  {
    id: 2,
    name: "Jahanzeb Ansari",
    role: "Co-Lead",
 image: "public/team/current_tenure/jahanzaib.webp",
     },
  {
    id: 3,
    name: "Humera Soomro",
    role: "Co-Lead",
    image: "public/team/current_tenure/humera.webp",
    },
];

/* ==========================================================
   TESTIMONIALS
========================================================== */

/* ==========================================================
   TESTIMONIALS
========================================================== */

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Wajahat Kareem",
    role: "Google Developer Expert — Android",
    image: "",
    quote:
      "I truly enjoyed participating in the Hacktoberfest Hackathon organized by AWS Cloud Club MUET, as I've always been a big fan of open source. I strongly encourage students to actively take part in such activities, as they open doors to collaboration, learning, and growth.",
  },

  {
    id: 2,
    name: "Qasim Hassan",
    role: "DevOps Engineer at Pakistan Single Window (PSW)",
    image: "",
    quote:
      "The enthusiasm of the students was amazing! I gave a talk on how to get started with cloud computing, and it turned out to be a fantastic session. The AWS Cloud Club MUET put a lot of effort into organizing the event, and it truly showed.",
  },

  {
    id: 3,
    name: "Zaid Soomro",
    role: "Software Engineer at Webperts",
    image: "",
    quote:
      "Good to see such an active community focused on cloud computing. The workshops were very informative and well-organized.",
  },

  {
    id: 4,
    name: "Rashid Wassan",
    role: "DevOps Engineer at Pakistan Single Window (PSW)",
    image: "",
    quote:
      "I'm happy to see hackathons being organized at Mehran University. I truly enjoyed delivering a talk, and being part of the review panel.",
  },

  {
    id: 5,
    name: "Arayan",
    role: "AWS Certified Solutions Architect",
    image: "",
    quote:
      "The AWS Cloud Club provided me with the resources and mentorship I needed to pass my AWS certification exams.",
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