import type { BaseEntity } from "./common";

export interface Blog extends BaseEntity {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishedAt: string;
  tags: string[];
}