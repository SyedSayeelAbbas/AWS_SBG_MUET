import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export const footerLinks = [
  {
    title: "Club",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },

  {
    title: "Events",
    links: [
      { label: "Upcoming Events", href: "/events" },
      { label: "Hackathons", href: "/events" },
      { label: "Workshops", href: "/events" },
      { label: "Blogs", href: "/blogs" },
    ],
  },

  {
    title: "Resources",
    links: [
      {
        label: "AWS Skill Builder",
        href: "https://skillbuilder.aws/",
      },
      {
        label: "AWS Certifications",
        href: "https://aws.amazon.com/certification/",
      },
      {
        label: "Learning Paths",
        href: "https://aws.amazon.com/training/",
      },
      {
        label: "Join Community",
        href: "/join",
      },
    ],
  },
];

export const socials = [
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/awssbgmuet",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/awssbgmuet/",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/aws-cloud-club-mehran-uet/",
  },
];