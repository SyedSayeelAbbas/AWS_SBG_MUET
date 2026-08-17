export interface GalleryItem {
  id: string;
  title: string;
  category:
    | "Events"
    | "Workshops"
    | "Community"
    | "Team"
    | "Other";
  image: string;
  description?: string;
  featured?: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "aws-cloud-workshop",
    title: "AWS Cloud Workshop",
    category: "Workshops",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80&auto=format&fit=crop",
    description:
      "Students exploring AWS cloud services through practical learning and hands-on activities.",
    featured: true,
  },

  {
    id: "cloud-computing-session",
    title: "Cloud Computing Session",
    category: "Events",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&q=80&auto=format&fit=crop",
    description:
      "An interactive session focused on cloud computing concepts and modern technologies.",
    featured: false,
  },

  {
    id: "student-builders",
    title: "Student Builders",
    category: "Community",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80&auto=format&fit=crop",
    description:
      "Students collaborating, sharing ideas and building solutions together.",
    featured: false,
  },

  {
    id: "aws-community-meetup",
    title: "AWS Community Meetup",
    category: "Community",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80&auto=format&fit=crop",
    description:
      "A community gathering bringing together students interested in cloud and technology.",
    featured: false,
  },

  {
    id: "technical-workshop",
    title: "Technical Workshop",
    category: "Workshops",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=80&auto=format&fit=crop",
    description:
      "Students learning through practical technical activities and collaborative exercises.",
    featured: false,
  },

  {
    id: "builder-community",
    title: "Builder Community",
    category: "Community",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80&auto=format&fit=crop",
    description:
      "A space for students to connect, collaborate and exchange technical ideas.",
    featured: false,
  },
];

export const galleryCategories = [
  "All",
  "Events",
  "Workshops",
  "Community",
  "Team",
  "Other",
] as const;

export type GalleryCategory =
  (typeof galleryCategories)[number];