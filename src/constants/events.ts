import type { EventData } from "../types/event";

/* =========================================================
   EVENT FILTERS
   ========================================================= */

export const EVENT_FILTERS = [
  "All",
  "Workshop",
  "Technical",
  "Seminar",
  "Competition",
  "Community",
  "Certification",
] as const;

export type EventFilter = (typeof EVENT_FILTERS)[number];

/* =========================================================
   EVENTS
   ========================================================= */

export const events: EventData[] = [
  {
    id: "aws-cloud-workshop",
    title: "AWS Cloud Workshop",
    category: "Workshop",
    date: "Coming Soon",
    time: "To Be Announced",
    location: "MUET",
    description:
      "A hands-on workshop designed to introduce students to AWS cloud services, cloud computing concepts, and practical AWS technologies.",
    attendees: "Students",
    featured: true,

    highlights: [
      "Introduction to AWS cloud services",
      "Hands-on cloud learning",
      "Explore AWS core services",
      "Learn practical cloud concepts",
    ],

    experience: [
      "Hands-on AWS learning",
      "Practical cloud demonstrations",
      "Interactive student activities",
      "Guidance from experienced builders",
    ],
  },

  {
    id: "aws-certification-session",
    title: "AWS Certification Session",
    category: "Certification",
    date: "Coming Soon",
    time: "To Be Announced",
    location: "MUET",
    description:
      "Learn how to prepare for AWS certifications and understand which certification path fits your career goals.",
    attendees: "Students",
    featured: false,

    highlights: [
      "Understand the AWS certification roadmap",
      "Learn certification preparation strategies",
      "Explore AWS learning resources",
      "Get career guidance",
    ],

    experience: [
      "Certification roadmap discussion",
      "AWS learning resources",
      "Career guidance",
      "Preparation strategies",
    ],
  },

  {
    id: "cloud-computing-session",
    title: "Cloud Computing Session",
    category: "Technical",
    date: "Coming Soon",
    time: "To Be Announced",
    location: "MUET",
    description:
      "An interactive session focused on cloud computing concepts, modern technologies, and how cloud platforms are shaping the future of software development.",
    attendees: "Students",
    featured: false,

    highlights: [
      "Understand cloud computing fundamentals",
      "Explore modern cloud technologies",
      "Learn about cloud career opportunities",
      "Interactive technical discussion",
    ],

    experience: [
      "Cloud computing fundamentals",
      "Technical demonstrations",
      "Modern cloud technologies",
      "Interactive discussions",
    ],
  },

  {
    id: "aws-community-meetup",
    title: "AWS Community Meetup",
    category: "Community",
    date: "Coming Soon",
    time: "To Be Announced",
    location: "MUET",
    description:
      "A community meetup where students can connect, exchange ideas, discuss technology, and learn more about the AWS Student Builder Club.",
    attendees: "AWS Student Builder Club Community",
    featured: false,

    highlights: [
      "Meet fellow student builders",
      "Share technical ideas",
      "Discuss AWS technologies",
      "Build meaningful connections",
    ],

    experience: [
      "Community networking",
      "Student discussions",
      "Technology conversations",
      "Collaborative activities",
    ],
  },

  {
    id: "student-builder-session",
    title: "Student Builder Session",
    category: "Community",
    date: "Coming Soon",
    time: "To Be Announced",
    location: "MUET",
    description:
      "A collaborative session focused on helping students turn ideas into practical projects while developing technical and problem-solving skills.",
    attendees: "Students",
    featured: false,

    highlights: [
      "Turn ideas into projects",
      "Collaborative problem solving",
      "Learn from fellow builders",
      "Develop practical skills",
    ],

    experience: [
      "Idea generation",
      "Project discussions",
      "Collaborative problem solving",
      "Practical development guidance",
    ],
  },
];

/* =========================================================
   BACKWARD COMPATIBILITY
   ========================================================= */

/*
 * EventPage.tsx currently imports EVENTS,
 * so keep this alias instead of changing the whole page.
 */
export const EVENTS = events;

/* =========================================================
   HELPER FUNCTIONS
   ========================================================= */

/**
 * Find an event by its ID.
 */
export const getEventById = (
  id: string
): EventData | undefined => {
  return events.find((event) => event.id === id);
};

/**
 * Get only featured events.
 */
export const getFeaturedEvents = (): EventData[] => {
  return events.filter((event) => event.featured);
};

/**
 * Filter events by category.
 */
export const getEventsByCategory = (
  category: EventFilter
): EventData[] => {
  if (category === "All") {
    return events;
  }

  return events.filter(
    (event) => event.category === category
  );
};