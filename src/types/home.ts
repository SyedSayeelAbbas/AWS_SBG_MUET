import type { LucideIcon } from "lucide-react";

export interface HeroData {
  badge: string;
  title: string;
  subtitle: string;
  primaryButton: string;
  secondaryButton: string;
  image: string;
}

export interface CommunityStat {
  id:number;
  title:string;
  value:number;
  suffix?:string;
  description:string;
  icon:LucideIcon;
}

export interface AboutPreviewData {
  badge: string;
  title: string;
  description: string;
  image: string;
  highlights: {
    icon: LucideIcon;
    text: string;
  }[];
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface EventItem {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  status: "Upcoming" | "Completed";
}

export interface GalleryImage {
  id: number;
  title: string;
  image: string;
  className?: string;
}

export interface ImpactStat{
    id:number;
    title:string;
    value:string;
    description:string;
    icon:LucideIcon;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
}

export interface JoinBenefit {
  id: number;
  text: string;
}