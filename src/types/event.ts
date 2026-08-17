export interface EventData {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  description: string;
  attendees: string;
  featured?: boolean;
  highlights: string[];
  experience?: string[];
}

