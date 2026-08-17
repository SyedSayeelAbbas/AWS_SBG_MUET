export type Tenure =
  | "Current Tenure"
  | "3rd Tenure"
  | "2nd Tenure"
  | "1st Tenure";

export type TeamSection = "Captain" | "Core Team";

export type TeamDepartment =
  | "Operations & Technical"
  | "Designing Team"
  | "Content Management"
  | "Outreach & Marketing"
  | "Visual Production";

export interface TeamStat {
  label: string;
  value: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  section: TeamSection;
  tenure: Tenure;
  image: string;
  bio: string;

  /** Groups Core Team members into department sections (used for Current Tenure) */
  department?: TeamDepartment;
  /** Marks this member as the head of their department — shows a "Head" badge */
  isHead?: boolean;
  /** Marks this member as a Co-Lead — rendered just below the Leader/Captain */
  isCoLead?: boolean;

  /** Optional extras used by the card / modal */
  title?: string;
  tagline?: string;
  quote?: string;
  period?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  email?: string;
  stats?: TeamStat[];
  achievements?: string[];
}