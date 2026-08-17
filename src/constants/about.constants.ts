import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Hammer,
  Users,
  Flag,
  GraduationCap,
  Rocket,
  Award,
  Cloud,
  Presentation,
  Trophy,
  FolderKanban,
  Coffee,
  Compass,
  Sparkles,
  Share2,
  Heart,
  Target,
} from "lucide-react";

/* ==========================================================
   CORE VALUES — Learn / Build / Connect / Lead
========================================================== */

export interface CoreValue {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const coreValues: CoreValue[] = [
  {
    number: "01",
    title: "Learn",
    description:
      "Build strong technical foundations through workshops, sessions and official AWS learning resources.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Build",
    description:
      "Turn ideas into real projects, prototypes and hands-on cloud solutions.",
    icon: Hammer,
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Meet students, mentors and industry professionals who share your passion for technology.",
    icon: Users,
  },
  {
    number: "04",
    title: "Lead",
    description:
      "Grow leadership, collaboration and communication skills by driving community initiatives.",
    icon: Flag,
  },
];

/* ==========================================================
   MISSION PILLARS
========================================================== */

export interface MissionPillar {
  number: string;
  title: string;
  description: string;
}

export const missionPillars: MissionPillar[] = [
  {
    number: "01",
    title: "Learn",
    description:
      "Build strong technical foundations through workshops, sessions and AWS learning resources.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Turn ideas into projects, experiments and real-world solutions.",
  },
  {
    number: "03",
    title: "Lead",
    description:
      "Develop communication, leadership, collaboration and professional skills.",
  },
];

/* ==========================================================
   WHAT WE DO
========================================================== */

export interface AboutService {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const aboutServices: AboutService[] = [
  {
    title: "Cloud Workshops",
    description:
      "Hands-on sessions covering AWS core services, architecture and best practices.",
    icon: Cloud,
  },
  {
    title: "AWS Certifications",
    description:
      "Structured guidance and study resources to help members earn official AWS certifications.",
    icon: Award,
  },
  {
    title: "Technical Sessions",
    description:
      "Talks and deep-dives led by peers, alumni and industry professionals.",
    icon: Presentation,
  },
  {
    title: "Hackathons",
    description:
      "Competitive, fast-paced events where teams build and ship real solutions.",
    icon: Trophy,
  },
  {
    title: "Project Building",
    description:
      "Collaborative, portfolio-ready projects that apply cloud skills to real problems.",
    icon: FolderKanban,
  },
  {
    title: "Community Meetups",
    description:
      "Casual, recurring gatherings to network, share knowledge and grow together.",
    icon: Coffee,
  },
];

/* ==========================================================
   IMPACT — qualitative (no fabricated numbers)
========================================================== */

export interface AboutImpactStat {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export const aboutImpactStats: AboutImpactStat[] = [
  {
    title: "Community",
    value: "Growing",
    description: "An expanding network of students across MUET.",
    icon: Users,
  },
  {
    title: "Learning",
    value: "Hands-On",
    description: "Practical, workshop-driven cloud education.",
    icon: GraduationCap,
  },
  {
    title: "Innovation",
    value: "Student-Led",
    description: "Every initiative is planned and run by students.",
    icon: Rocket,
  },
  {
    title: "Activities",
    value: "Multiple",
    description: "Workshops, hackathons and sessions held regularly.",
    icon: Sparkles,
  },
];

/* ==========================================================
   COMMUNITY VALUES — What We Believe
========================================================== */

export interface BeliefItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const beliefs: BeliefItem[] = [
  {
    title: "Learn Continuously",
    description:
      "Curiosity drives everything we do — there's always something new to explore in the cloud.",
    icon: BookOpen,
  },
  {
    title: "Build Fearlessly",
    description:
      "We encourage experimentation, iteration and learning through building.",
    icon: Hammer,
  },
  {
    title: "Share Knowledge",
    description:
      "What one member learns, the whole community benefits from.",
    icon: Share2,
  },
  {
    title: "Grow Together",
    description:
      "Every member's growth strengthens the community as a whole.",
    icon: Heart,
  },
  {
    title: "Lead With Purpose",
    description:
      "Leadership here means service — organizing, mentoring and showing up for others.",
    icon: Target,
  },
  {
  title: "Community First",
  description:
    "We believe students grow faster when they learn, build and support one another.",
  icon: Users,
},
];

/* ==========================================================
   STUDENT EXPERIENCE — 4-step journey
========================================================== */

export interface ExperienceStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const experienceSteps: ExperienceStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Find your community and see what cloud computing can offer.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Learn",
    description: "Attend workshops and build a strong AWS foundation.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Build",
    description: "Apply what you've learned to real, hands-on projects.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Lead",
    description: "Take initiative, mentor others and shape the community.",
    icon: Flag,
  },
];