import type { BaseEntity } from "./common";

export type GalleryCategory =
  | "Events"
  | "Workshops"
  | "Community"
  | "Team"
  | "Other";

export interface GalleryImage extends BaseEntity {
  title: string;
  image: string;
  category: GalleryCategory;
  event?: string;
}