import { Link } from "react-router-dom";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinkGroupProps {
  title: string;
  links: FooterLink[];
}

export default function FooterLinkGroup({
  title,
  links,
}: FooterLinkGroupProps) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-heading">
        {title}
      </h3>

      <ul className="mt-5 space-y-3">
        {links.map((link) => {
          const isExternal = link.href.startsWith("http");

          return (
            <li key={link.label}>
              {isExternal ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-sm
                    text-muted
                    transition-colors
                    hover:text-brand-600
                  "
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className="
                    text-sm
                    text-muted
                    transition-colors
                    hover:text-brand-600
                  "
                >
                  {link.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}