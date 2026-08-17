import { Sparkles, Clock3, Flag } from "lucide-react";
import type { EventItem } from "../types/home";

/* ==========================================================
   TENURES (club leadership terms)
========================================================== */

export const tenures = [
  { id: "2026-27", label: "2026 – 2027", sub: "Current Tenure", isCurrent: true, icon: Sparkles },
  { id: "2025-26", label: "2025 – 2026", sub: "Past Tenure", isCurrent: false, icon: Clock3 },
  { id: "2024-25", label: "2024 – 2025", sub: "Past Tenure", isCurrent: false, icon: Clock3 },
  { id: "2023-24", label: "2023 – 2024", sub: "Founding Tenure", isCurrent: false, icon: Flag },
] as const;

export type TenureId = (typeof tenures)[number]["id"];

/* ==========================================================
   EVENT CATEGORIES
========================================================== */

export const eventCategories = [
  "All",
  "Workshop",
  "Hackathon",
  "Bootcamp",
  "Networking",
  "Seminar",
] as const;

export type EventCategory = (typeof eventCategories)[number];

/* ==========================================================
   EXTENDED EVENT TYPE
========================================================== */

export interface EventListItem extends EventItem {
  category: Exclude<EventCategory, "All">;
  tenure: TenureId;
  /** Gallery of event photos — falls back to [image] if omitted */
  images?: string[];
}

/* ==========================================================
   ALL EVENTS — grouped by tenure
========================================================== */

export const allEvents: EventListItem[] = [
  /* ---------------- 2026–27 (Current) ---------------- */
  {
    id: 1,
    title: "AWS Cloud Bootcamp",
    description:
      "A hands-on, weekend-long bootcamp covering EC2, S3 and IAM fundamentals for first-time cloud builders.",
    date: "24 August 2026",
    location: "MUET Auditorium",
    image: "https://picsum.photos/seed/event-1-cover/1000/700",
    images: [
      "https://picsum.photos/seed/event-1-a/1200/800",
      "https://picsum.photos/seed/event-1-b/1200/800",
      "https://picsum.photos/seed/event-1-c/1200/800",
      "https://picsum.photos/seed/event-1-d/1200/800",
    ],
    status: "Upcoming",
    category: "Bootcamp",
    tenure: "2026-27",
  },
  {
    id: 2,
    title: "Hackathon 2026",
    description:
      "48 hours of building, mentorship and pitching as teams race to ship a working AWS-powered product.",
    date: "10 September 2026",
    location: "Innovation Lab",
    image: "https://picsum.photos/seed/event-2-cover/1000/700",
    images: [
      "https://picsum.photos/seed/event-2-a/1200/800",
      "https://picsum.photos/seed/event-2-b/1200/800",
      "https://picsum.photos/seed/event-2-c/1200/800",
    ],
    status: "Upcoming",
    category: "Hackathon",
    tenure: "2026-27",
  },
  {
    id: 3,
    title: "Career Connect",
    description:
      "Meet AWS professionals and alumni for real talk on cloud careers, interviews and certification paths.",
    date: "18 September 2026",
    location: "Software Department",
    image: "https://picsum.photos/seed/event-3-cover/1000/700",
    images: [
      "https://picsum.photos/seed/event-3-a/1200/800",
      "https://picsum.photos/seed/event-3-b/1200/800",
      "https://picsum.photos/seed/event-3-c/1200/800",
    ],
    status: "Upcoming",
    category: "Networking",
    tenure: "2026-27",
  },
  {
    id: 4,
    title: "Intro to Serverless",
    description:
      "A beginner-friendly workshop building your first API with Lambda, API Gateway and DynamoDB.",
    date: "2 October 2026",
    location: "CS Lab 2",
    image: "https://picsum.photos/seed/event-4-cover/1000/700",
    images: [
      "https://picsum.photos/seed/event-4-a/1200/800",
      "https://picsum.photos/seed/event-4-b/1200/800",
      "https://picsum.photos/seed/event-4-c/1200/800",
    ],
    status: "Upcoming",
    category: "Workshop",
    tenure: "2026-27",
  },
  {
    id: 5,
    title: "Cloud Practitioner Study Jam",
    description:
      "A guided group study session to help members prepare for the AWS Certified Cloud Practitioner exam.",
    date: "15 October 2026",
    location: "Library Seminar Hall",
    image: "https://picsum.photos/seed/event-5-cover/1000/700",
    images: [
      "https://picsum.photos/seed/event-5-a/1200/800",
      "https://picsum.photos/seed/event-5-b/1200/800",
      "https://picsum.photos/seed/event-5-c/1200/800",
    ],
    status: "Upcoming",
    category: "Seminar",
    tenure: "2026-27",
  },

  /* ---------------- 2025–26 ---------------- */
  {
    id: 6,
    title: "Hackathon 2025",
    description:
      "Our flagship hackathon, bringing together 40+ teams to build cloud-native solutions in 48 hours.",
    date: "20 March 2025",
    location: "Innovation Lab",
    image: "https://picsum.photos/seed/event-6-cover/1000/700",
    images: [
      "https://picsum.photos/seed/event-6-a/1200/800",
      "https://picsum.photos/seed/event-6-b/1200/800",
      "https://picsum.photos/seed/event-6-c/1200/800",
    ],
    status: "Completed",
    category: "Hackathon",
    tenure: "2025-26",
  },
  {
    id: 7,
    title: "AWS Fundamentals Workshop",
    description:
      "A foundational session covering core AWS services, pricing and the shared responsibility model.",
    date: "8 May 2025",
    location: "Software Department",
    image: "https://picsum.photos/seed/event-7-cover/1000/700",
    images: [
      "https://picsum.photos/seed/event-7-a/1200/800",
      "https://picsum.photos/seed/event-7-b/1200/800",
      "https://picsum.photos/seed/event-7-c/1200/800",
    ],
    status: "Completed",
    category: "Workshop",
    tenure: "2025-26",
  },
  {
    id: 8,
    title: "Cloud Career Meetup",
    description:
      "An evening networking session connecting students with AWS-certified alumni working in the industry.",
    date: "22 June 2025",
    location: "MUET Auditorium",
    image: "https://picsum.photos/seed/event-8-cover/1000/700",
    images: [
      "https://picsum.photos/seed/event-8-a/1200/800",
      "https://picsum.photos/seed/event-8-b/1200/800",
      "https://picsum.photos/seed/event-8-c/1200/800",
    ],
    status: "Completed",
    category: "Networking",
    tenure: "2025-26",
  },

  /* ---------------- 2024–25 ---------------- */
  {
    id: 9,
    title: "Orientation 2024",
    description:
      "Our welcome session introducing new members to the club, its mission and the year's roadmap.",
    date: "14 January 2024",
    location: "MUET Auditorium",
    image: "https://picsum.photos/seed/event-9-cover/1000/700",
    images: [
      "https://picsum.photos/seed/event-9-a/1200/800",
      "https://picsum.photos/seed/event-9-b/1200/800",
      "https://picsum.photos/seed/event-9-c/1200/800",
    ],
    status: "Completed",
    category: "Seminar",
    tenure: "2024-25",
  },
  {
    id: 10,
    title: "Intro to Cloud Computing Bootcamp",
    description:
      "A two-day bootcamp introducing core cloud computing concepts and the AWS ecosystem to new members.",
    date: "9 March 2024",
    location: "CS Lab 2",
    image: "https://picsum.photos/seed/event-10-cover/1000/700",
    images: [
      "https://picsum.photos/seed/event-10-a/1200/800",
      "https://picsum.photos/seed/event-10-b/1200/800",
      "https://picsum.photos/seed/event-10-c/1200/800",
    ],
    status: "Completed",
    category: "Bootcamp",
    tenure: "2024-25",
  },
  {
    id: 11,
    title: "Mini Hackathon: Build for Good",
    description:
      "A one-day hackathon challenging students to build cloud solutions for local community problems.",
    date: "27 April 2024",
    location: "Innovation Lab",
    image: "https://picsum.photos/seed/event-11-cover/1000/700",
    images: [
      "https://picsum.photos/seed/event-11-a/1200/800",
      "https://picsum.photos/seed/event-11-b/1200/800",
      "https://picsum.photos/seed/event-11-c/1200/800",
    ],
    status: "Completed",
    category: "Hackathon",
    tenure: "2024-25",
  },

  /* ---------------- 2023–24 (Founding Tenure) ---------------- */
  {
    id: 12,
    title: "Club Launch Ceremony",
    description:
      "The official founding event introducing AWS Cloud Club MUET to the student community.",
    date: "5 October 2023",
    location: "MUET Auditorium",
    image: "https://picsum.photos/seed/event-12-cover/1000/700",
    images: [
      "https://picsum.photos/seed/event-12-a/1200/800",
      "https://picsum.photos/seed/event-12-b/1200/800",
      "https://picsum.photos/seed/event-12-c/1200/800",
    ],
    status: "Completed",
    category: "Seminar",
    tenure: "2023-24",
  },
  {
    id: 13,
    title: "First AWS Workshop",
    description:
      "The club's very first hands-on session, walking members through the AWS Free Tier and core services.",
    date: "18 November 2023",
    location: "Software Department",
    image: "https://picsum.photos/seed/event-13-cover/1000/700",
    images: [
      "https://picsum.photos/seed/event-13-a/1200/800",
      "https://picsum.photos/seed/event-13-b/1200/800",
      "https://picsum.photos/seed/event-13-c/1200/800",
    ],
    status: "Completed",
    category: "Workshop",
    tenure: "2023-24",
  },
];

/* ==========================================================
   EVENTS PAGE HERO STATS
========================================================== */

export const eventsHeroStats = [
  { id: 1, label: "Events Hosted", value: "35+" },
  { id: 2, label: "Students Reached", value: "500+" },
  { id: 3, label: "Categories", value: "5" },
];