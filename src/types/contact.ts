export interface ContactInfo {
  id: string;
  title: string;
  value: string;
  description?: string;
  href?: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}