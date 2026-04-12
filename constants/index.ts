import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  postgresql,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Core Member",
    company_name: "COPs (Competitive Programming Society)",
    icon: "/experience/COPs new.png",
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Regularly participate in programming contests such as Codeforces, AtCoder and CodeChef improving algorithmic thinking and problem-solving speed.",
      "Contributed to organizing BitCode, the campus hackathon, coordinating technical challenges and participant engagement.",
      "Collaborate with team members to promote competitive programming culture on campus.",
    ],
  },
  {
    title: "Core Member",
    company_name: "GDGC (Google Developer Groups on Campus)",
    icon: "/experience/gdg_logo.svg.svg",
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Contribute to the creation of technical content for event promotion, collaborating with design and marketing teams.",
      "Develop web assets for society events, including websites and promotional designs.",
      "Ensure brand consistency and clarity across all digital touchpoints.",
      "Support technical workshops and community building initiatives.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Workout Tracking Backend System",
    description:
      "Full REST API for workout tracking with sessions, exercises, and set logging. Built with PostgreSQL, Prisma, JWT authentication, and Zod validation.",
    impact: "Deployed on Railway • Optimized relational queries for sub-100ms response times",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/gymapp.png",
    source_code_link: "https://github.com/Am730-byte/Light",
    live_link: "https://light-eta-henna.vercel.app/",
  },
  {
    name: "2D Metaverse – Real Time Multiplayer",
    description:
      "Real-time multi-user virtual workspace with WebSockets for synchronized player movement. Integrated WebRTC voice communication with STUN/TURN fallback.",
    impact: "Built scalable WebSocket architecture • Handles real-time sync for multiple concurrent users",
    tags: [
      {
        name: "websockets",
        color: "blue-text-gradient",
      },
      {
        name: "webrtc",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/metaverse.png",
    source_code_link: "https://github.com/Am730-byte/2D-Metaverse-",
    live_link: "https://2-d-metaverse-iota.vercel.app/",
  },
  {
    name: "Praxis 2.0 – AI/ML Hackathon Website",
    description:
      "Responsive event landing page built with Next.js and Tailwind CSS. Implemented performance-aware UI rendering based on device capability.",
    impact: "Optimized for 90+ Lighthouse score • Adaptive rendering for optimal UX",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/praxis.png",
    source_code_link: null,
    live_link: "https://praxis-25.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };