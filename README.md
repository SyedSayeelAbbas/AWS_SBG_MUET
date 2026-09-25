# AWS Student Builder Society — MUET

Official website of the **AWS Student Builder Society at Mehran University of Engineering & Technology (MUET), Jamshoro**.

The website serves as the digital platform for the society, showcasing our community, events, leadership team, learning opportunities, blogs, achievements, and activities related to cloud computing and AWS technologies.

---

## About the Society

The **AWS Student Builder Society MUET** is a student-led technology community focused on helping students learn, build, collaborate, and grow through cloud computing and modern technologies.

Our goal is to create opportunities for students to gain practical experience through:

- AWS and cloud computing workshops
- Technical sessions
- Hackathons
- Community events
- Student projects
- Career and certification guidance
- Networking opportunities
- Leadership development

---

## Website Features

### Home

A modern landing page introducing the society and highlighting its community, events, activities, achievements, and impact.

### About

Information about the society, its purpose, mission, community, and journey.

### Events

A dedicated events system showcasing activities from different tenures.

Features include:

- Event filtering
- Event categories
- Tenure-based event timeline
- Event images
- Event descriptions
- Previous and upcoming activities

### Team

Displays the leadership team and society members from different tenures.

### Blogs

A section for technical articles, community updates, AWS learning content, and society announcements.

### Contact

Allows visitors and students to learn how to connect with the society.

### Join Community

A dedicated page explaining the benefits of joining the AWS Student Builder Society and how students can become part of the community.

### Moments That Inspire

A visual gallery featuring real photographs from society events, workshops, hackathons, and community activities.

### Splash Screen

A lightweight animated splash screen introduces the AWS Student Builder Society branding when the website is first loaded.

---

## Responsive Design

The website is designed to work across different screen sizes including:

- Desktop
- Laptop
- Tablet
- Mobile

Layouts, navigation, event cards, galleries, typography, and interactive components adapt automatically based on the device.

---

## Technology Stack

The project is built using modern frontend technologies.

### Core

- React
- TypeScript
- Vite

### Styling

- Tailwind CSS
- Responsive CSS utilities

### Animation

- Framer Motion

### Routing

- React Router

### Icons

- Lucide React

---

## Project Structure

```text
AWS_SBG_MUET/
│
├── public/
│   ├── events/
│   ├── team/
│   └── other static assets
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── cards/
│   │   ├── common/
│   │   ├── hero/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── team/
│   │   └── ui/
│   │
│   ├── constants/
│   │
│   ├── pages/
│   │   ├── About/
│   │   ├── Blog/
│   │   ├── Contact/
│   │   ├── Events/
│   │   ├── Gallery/
│   │   ├── Join/
│   │   └── Team/
│   │
│   ├── types/
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SyedSayeelAbbas/AWS_SBG_MUET.git
```

Move into the project directory:

```bash
cd AWS_SBG_MUET
```

### 2. Install Dependencies

Make sure you have **Node.js** and **npm** installed.

Then run:

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

Open it in your browser.

---

## Production Build

To create an optimized production build:

```bash
npm run build
```

The generated production files will be available inside:

```text
dist/
```

---

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

---

## Linting

Run ESLint using:

```bash
npm run lint
```

This helps identify code-quality and formatting problems before deployment.

---

## Navigation

The primary navigation currently includes:

```text
Home
About
Events
Team
Blogs
Contact
Join Community
```

React Router is used for page navigation.

The website also automatically scrolls to the top when navigating between different pages.

---

## Event Media

Real society event photographs are stored locally in:

```text
public/events/
```

Using local event images helps avoid unnecessary external image requests and allows the website to represent actual AWS Student Builder Society activities.

---

## Development Guidelines

When contributing to the project:

### Pull the latest version

```bash
git pull origin main
```

### Check changes

```bash
git status
```

### Add changes

```bash
git add .
```

### Commit changes

```bash
git commit -m "describe your changes"
```

### Push changes

```bash
git push origin main
```

For larger features, using a separate feature branch is recommended.

Example:

```bash
git switch -c feature/feature-name
```

---

## Performance Considerations

The website has been designed with performance in mind.

The project avoids unnecessary heavy assets where possible and uses:

- Local event images
- Responsive layouts
- Lightweight splash-screen animations
- Reusable React components
- Optimized Vite builds
- Controlled Framer Motion animations
- Reusable constants and data structures

---

## Branding

Current organization name:

**AWS Student Builder Society MUET**

Some previous activities may still contain references to **AWS Cloud Club MUET** where the name represents the organization during an earlier tenure or historical event.

Historical event names should therefore not automatically be renamed if they refer to the original event branding.

---

## Contributors

### Syed Sayeel Abbas

GitHub: [@SyedSayeelAbbas](https://github.com/SyedSayeelAbbas)

### Muhammad Saad Abbasi

GitHub: [@MuhammadSaadAbbasi](https://github.com/MuhammadSaadAbbasi)

---

## Repository

GitHub Repository:

[SyedSayeelAbbas/AWS_SBG_MUET](https://github.com/SyedSayeelAbbas/AWS_SBG_MUET)

---

## Contributing

Contributions that improve the society website are welcome.

Before making major structural or design changes, contributors should coordinate with the website team so that the design system, responsive behavior, routing, and component structure remain consistent.

---

## Future Improvements

Possible future improvements include:

- Event registration integration
- Admin dashboard
- CMS integration
- Dynamic blog management
- Event search
- Advanced filtering
- Member profiles
- AWS learning resources
- Certification roadmaps
- Newsletter integration
- Community announcements
- Improved accessibility
- Full dark theme
- Performance monitoring
- Analytics integration

---

## Disclaimer

This project is developed for the **AWS Student Builder Society at MUET**.

AWS, Amazon Web Services, and related marks are trademarks of Amazon.com, Inc. or its affiliates.

This student community website should not be interpreted as an official Amazon corporate website unless explicitly stated by AWS.

---

## License

This repository is maintained for the AWS Student Builder Society MUET website.

Please contact the project maintainers before reusing society-specific branding, event photographs, or organizational content.

---

<p align="center">
  <strong>Build • Learn • Innovate</strong>
</p>

<p align="center">
  AWS Student Builder Society — MUET
</p>