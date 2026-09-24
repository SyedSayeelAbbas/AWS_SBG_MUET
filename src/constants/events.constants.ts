import { Sparkles, Clock3, Flag } from "lucide-react";
import type { EventItem } from "../types/home";

const tenureOneEventOneImages = [
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%201/EVENT%201/1st%20Event%20(8).webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%201/EVENT%201/1st%20Event%20(2).webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%201/EVENT%201/1st%20Event%20(3).webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%201/EVENT%201/1st%20Event%20(4).webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%201/EVENT%201/1st%20Event%20(5).webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%201/EVENT%201/1st%20Event%20(6).webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%201/EVENT%201/1st%20Event%20(7).webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%201/EVENT%201/1st%20Event%20(1).webp",
];

const tenureOneEventTwoImages = [
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%201/EVENT%202/2nd%20Event%20(1).webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%201/EVENT%202/2nd%20Event%20(2).webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%201/EVENT%202/2nd%20Event%20(3).webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%201/EVENT%202/2nd%20Event%20(4).webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%201/EVENT%202/2nd%20Event%20(5).webp",
];

const tenureOneEventThreeImages = [
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%201/EVENT%203/3rd%20Event%20(1).webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%201/EVENT%203/3rd%20Event%20(2).webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%201/EVENT%203/3rd%20Event%20(3).webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%201/EVENT%203/3rd%20Event%20(4).webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%201/EVENT%203/3rd%20Event%20(5).webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%201/EVENT%203/3rd%20Event%20(6).webp",
];

const tenureTwoEventOneImages = [
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%201/Screenshot%201.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%201/Screenshot%202.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%201/Screenshot%203.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%201/Screenshot%204.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%201/Screenshot%205.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%201/Screenshot%206.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%201/Screenshot%207.webp",
];

const tenureTwoEventTwoImages = [
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%202/session.jpg",
];
/* ==========================================================
   TENURES (club leadership terms)
========================================================== */
const tenureTwoEventThreeImages = [
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%203/IMG_1651.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%203/IMG_1652.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%203/IMG_1653.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%203/IMG_1654.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%203/IMG_1655.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%203/IMG_1656.webp",
];


const tenureTwoEventFourImages = [
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%204/IMG_4207.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%204/IMG_4209.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%204/IMG_4211.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%204/IMG_4212.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%204/IMG_4214.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%204/IMG_4219.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%204/Artboard%201.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%204/Artboard%201%20copy.webp",
];

const tenureTwoEventFiveImages = [
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%205/IMG_0426.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%205/IMG_0491.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%205/IMG_0568.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%205/IMG_0617.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%205/IMG_0703.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%205/IMG_0727.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%202/Event%205/IMG_0897.webp",
];

const tenureThreeEventOneImages = [
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%201/Screenshot(30).png",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%201/Screenshot(29).png",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%201/Screenshot(33).png",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%201/Screenshot(28).png",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%201/Screenshot(27).png",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%201/Screenshot(22).png",
];


const tenureThreeEventTwoImages = [
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%202/pic6.png",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%202/pic4.png",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%202/pic5.png",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%202/pic1.png",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%202/pic3.png",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%202/pic2.png",
];

const tenureThreeEventThreeImages = [
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%203/DSC02438.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%203/DSC02512.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%203/DSC02467.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%203/DSC02527.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%203/DSC02450.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%203/DSC02547.webp",

];

const tenureThreeEventFourImages = [
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%204/IMG_1441.webp",
    "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%204/11.png",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%204/22.png",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%204/33.png",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%204/44.png",

];

const tenureThreeEventFiveImages = [
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%205/DSC00054.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%205/DSC00102.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%205/DSC00025.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%205/DSC00034.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%205/DSC00024.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%205/DSC00022.webp",
  "https://ik.imagekit.io/st2pn8py0c/AWSX/Tenure%203/Event%205/25%20batch%20poster.png",
];

const tenureThreeSCDImages = [
 "/events/SCD/8.JPG",
  "/events/SCD/2.JPG",
  "/events/SCD/3.JPG",
  "/events/SCD/5.JPG",
  "/events/SCD/6.JPG",
   "/events/SCD/7.JPG",
];

const tenureThreeHacktoberFestImages = [
  "/events/Hacktober/1.JPG",
  "/events/Hacktober/2.JPG",
  "/events/Hacktober/3.JPG",
  "/events/Hacktober/3.png",
  "/events/Hacktober/2.png",
  "/events/Hacktober/1.png",
];

const tenure4 = [[  "/events/4th Tenure/Event 1.jpeg"],[ "/events/4th Tenure/Event 2.jpeg"]];
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
    title: "Understanding Cloud Computing and Role of AI",
    description:
      "A workshop exploring the fundamentals of cloud computing, its applications, and the role of artificial intelligence in modern technology.",
    date: "24 August 2026",
    location: "MUET Auditorium",
    image: tenure4[0][0],
    images: tenure4[0],
    status: "Completed",
    category: "Seminar",
    tenure: "2026-27",
  },
  {
    id: 2,
    title: "AWS Powered Data Engineering Workshop",
    description:
      "A hands-on workshop focused on data engineering concepts, tools, and best practices using AWS services.",
    date: "10 September 2026",
    location: "Innovation Lab",
    image: tenure4[1][0],
    images: tenure4[1],
    status: "Completed",
    category: "Workshop",
    tenure: "2026-27",
  },
  // {
  //   id: 3,
  //   title: "Career Connect",
  //   description:
  //     "Meet AWS professionals and alumni for real talk on cloud careers, interviews and certification paths.",
  //   date: "18 September 2026",
  //   location: "Software Department",
  //   image: "https://picsum.photos/seed/event-3-cover/1000/700",
  //   images: [
  //     "https://picsum.photos/seed/event-3-a/1200/800",
  //     "https://picsum.photos/seed/event-3-b/1200/800",
  //     "https://picsum.photos/seed/event-3-c/1200/800",
  //   ],
  //   status: "Upcoming",
  //   category: "Networking",
  //   tenure: "2026-27",
  // },
  // {
  //   id: 4,
  //   title: "Intro to Serverless",
  //   description:
  //     "A beginner-friendly workshop building your first API with Lambda, API Gateway and DynamoDB.",
  //   date: "2 October 2026",
  //   location: "CS Lab 2",
  //   image: "https://picsum.photos/seed/event-4-cover/1000/700",
  //   images: [
  //     "https://picsum.photos/seed/event-4-a/1200/800",
  //     "https://picsum.photos/seed/event-4-b/1200/800",
  //     "https://picsum.photos/seed/event-4-c/1200/800",
  //   ],
  //   status: "Upcoming",
  //   category: "Workshop",
  //   tenure: "2026-27",
  // },
  // {
  //   id: 5,
  //   title: "Cloud Practitioner Study Jam",
  //   description:
  //     "A guided group study session to help members prepare for the AWS Certified Cloud Practitioner exam.",
  //   date: "15 October 2026",
  //   location: "Library Seminar Hall",
  //   image: "https://picsum.photos/seed/event-5-cover/1000/700",
  //   images: [
  //     "https://picsum.photos/seed/event-5-a/1200/800",
  //     "https://picsum.photos/seed/event-5-b/1200/800",
  //     "https://picsum.photos/seed/event-5-c/1200/800",
  //   ],
  //   status: "Upcoming",
  //   category: "Seminar",
  //   tenure: "2026-27",
  // },

  /* ---------------- 2025–26 ---------------- */
  {
    id: 17,
    title: "Introduction to Cloud Computing",
    description:
      "A comprehensive introduction to the fundamentals of cloud computing and the AWS platform.",
    date: "14 January 2025",
    location: "Online",
    image: tenureThreeEventOneImages[0],
    images: tenureThreeEventOneImages,
    status: "Completed",
    category: "Seminar",
    tenure: "2025-26",
  },
  {
    id: 18,
    title: "AWS Workshop",
    description:
      "A hands-on learning session that introduced members to practical AWS concepts and cloud-native tools.",
    date: "9 March 2025",
    location: "Online",
    image: tenureThreeEventTwoImages[0],
    images: tenureThreeEventTwoImages,
    status: "Completed",
    category: "Workshop",
    tenure: "2025-26",
  },
  {
    id: 19,
    title: "Product Market Fit Workshop",
    description:
      "A workshop focused on understanding product-market fit, customer discovery and building solutions that meet real-world needs.",
    date: "22 June 2025",
    location: "SW Dept",
    image: tenureThreeEventThreeImages[0],
    images: tenureThreeEventThreeImages,
    status: "Completed",
    category: "Workshop",
    tenure: "2025-26",
  },
  {
    id: 20,
    title: "AWS Cloud Club MUET Workshop",
    description:
      "A focused club event bringing members together for another practical cloud learning experience.",
    date: "12 July 2025",
    location: "MUET",
    image: tenureThreeEventFourImages[3],
    images: tenureThreeEventFourImages,
    status: "Completed",
    category: "Workshop",
    tenure: "2025-26",
  },
  {
    id: 21,
    title: "Exploring World of Software Engineering with AWS",
    description:
      "A workshop exploring the intersection of software engineering and cloud computing, with a focus on AWS services and best practices.",
    date: "16 August 2025",
    location: "SW Dept",
    image: tenureThreeEventFiveImages[6],
    images: tenureThreeEventFiveImages,
    status: "Completed",
    category: "Workshop",
    tenure: "2025-26",
  },
  {
    id: 22,
    title: "Student Community Day",
    description:
      "A community-focused gathering celebrating student collaboration, learning and shared AWS experiences.",
    date: "27 September 2025",
    location: "MUET Auditorium",
    image: tenureThreeSCDImages[0],
    images: tenureThreeSCDImages,
    status: "Completed",
    category: "Networking",
    tenure: "2025-26",
  },
  {
    id: 23,
    title: "Hacktober Fest",
    description:
      "A community event celebrating open source participation, collaboration and hands-on learning.",
    date: "24 October 2025",
    location: "MUET Auditorium",
    image: tenureThreeHacktoberFestImages[0],
    images: tenureThreeHacktoberFestImages,
    status: "Completed",
    category: "Hackathon",
    tenure: "2025-26",
  },

  /* ---------------- 2024–25 ---------------- */
  {
    id: 9,
    title: "Introduction to Cloud Computing",
    description:
      "A comprehensive introduction to the fundamentals of cloud computing and the AWS platform.",
    date: "14 January 2024",
    location: "SW Dept",
    image: tenureTwoEventOneImages[0],
    images: tenureTwoEventOneImages,
    status: "Completed",
    category: "Seminar",
    tenure: "2024-25",
  },
  {
    id: 10,
    title: "Exploring AWS Sagemaker",
    description:
      "A hands-on workshop exploring AWS Sagemaker for building and deploying machine learning models.",
    date: "9 March 2024",
    location: "SW Dept",
    image: tenureTwoEventTwoImages[0],
    images: tenureTwoEventTwoImages,
    status: "Completed",
    category: "Bootcamp",
    tenure: "2024-25",
  },
  {
    id: 11,
    title: "From Code to Cloud :AWS Web App Hosting",
    description:
      "A practical workshop guiding participants through the process of hosting a web application on AWS, from development to deployment.",
    date: "27 April 2024",
    location: "SW Dept",
    image: tenureTwoEventThreeImages[5],
    images: tenureTwoEventThreeImages,
    status: "Completed",
    category: "Workshop",
    tenure: "2024-25",
  },
  {
    id: 15,
    title: "Navigation the IT Landscape with AWS",
    description:
      "A workshop providing insights into navigating the IT landscape using AWS services and solutions.",
    date: "Event archive",
    location: "SW Dept",
    image: tenureTwoEventFourImages[6],
    images: tenureTwoEventFourImages,
    status: "Completed",
    category: "Workshop",
    tenure: "2024-25",
  },
  {
    id: 16,
    title: "Mega Event : AWS Cloud Club MUET",
    description:
      "A Tenure 2 event from the AWS Cloud Club MUET archive.",
    date: "Event archive",
    location: "USPCAS Auditorium",
    image: tenureTwoEventFiveImages[0],
    images: tenureTwoEventFiveImages,
    status: "Completed",
    category: "Networking",
    tenure: "2024-25",
  },

  /* ---------------- 2023–24   (Founding Tenure) ---------------- */
  {
    id: 12,
    title: "Cloud Computing 101",
    description:
      "The official founding event introducing AWS Cloud Club MUET to the student community.",
    date: "5 October 2023",
    location: "Online",
    image: tenureOneEventOneImages[8],
    images: tenureOneEventOneImages,
    status: "Completed",
    category: "Seminar",
    tenure: "2023-24",
  },
  {
    id: 13,
    title: "Startup Recipe",
    description:
      "How to start a startup with AWS: a workshop on cloud-based tools and services for entrepreneurs and innovators.",
    date: "18 November 2023",
    location: "Software Department",
    image: tenureOneEventTwoImages[0],
    images: tenureOneEventTwoImages,
    status: "Completed",
    category: "Workshop",
    tenure: "2023-24",
  },
  {
    id: 14,
    title: "AWS Virtual Event",
    description:
      "Final event of the founding tenure : delivered isights on Cloud Computing, AWS services and career opportunities in the cloud domain.",
    date: "Event archive",
    location: "Online",
    image: tenureOneEventThreeImages[0],
    images: tenureOneEventThreeImages,
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