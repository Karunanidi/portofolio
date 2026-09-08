import {
  Atom,
  Zap,
  FileCode2,
  Server,
  Database,
  Network,
  Container,
  Wind,
  GitBranch,
  Braces,
  Code2,
  Coffee,
  LayoutDashboard,
  Smartphone,
  Flame,
  Archive,
  ArrowLeftRight,
  Cloud,
  Globe,
  AppWindow,
  Palette,
  type LucideIcon,
} from "lucide-react";

/* ---------------------------------- nav ----------------------------------- */

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

/* ---------------------------------- types --------------------------------- */

export type ProjectCategory = "all" | "fullstack" | "android";

export interface Project {
  title: string;
  category: Exclude<ProjectCategory, "all">;
  description: string;
  tags: string[];
  gradient: string;
  icon: "globe" | "wallet" | "chart" | "map" | "chat" | "food";
  highlight: string;
  year: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
  color: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  current?: boolean;
}

/* ---------------------------------- hero ---------------------------------- */

export const roles = [
  "Full-Stack Developer",
  "Android Developer",
  "UI/UX Enthusiast",
  "Open Source Contributor",
];

export const heroStats = [
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 40, suffix: "+", label: "Projects Shipped" },
  { value: 500, suffix: "K+", label: "App Downloads" },
];

export const marqueeTech = [
  "React", "Next.js", "TypeScript", "Node.js", "Kotlin", "Jetpack Compose",
  "PostgreSQL", "MongoDB", "GraphQL", "Docker", "Firebase", "Redis",
  "Tailwind CSS", "Prisma", "Android SDK", "tRPC",
];

/* ---------------------------------- about --------------------------------- */

export const aboutParagraphs = [
  "I'm a passionate software engineer with 6+ years of experience building products end-to-end — from pixel-perfect, responsive web interfaces to robust backend systems and polished Android apps used by hundreds of thousands of people.",
  "On the web side, I specialize in the React / Next.js ecosystem with TypeScript, designing scalable APIs and data models that stay fast under real-world load. On mobile, I craft native Android experiences with Kotlin and Jetpack Compose, following modern architecture patterns like MVVM and clean architecture.",
  "I care deeply about code quality, developer experience, and shipping products that feel effortless. When I'm not coding, I contribute to open source, write technical articles, and mentor junior developers.",
];

export const aboutHighlights = [
  { title: "Web & Backend", text: "React, Next.js, Node.js, PostgreSQL, GraphQL, REST & real-time systems." },
  { title: "Native Android", text: "Kotlin, Jetpack Compose, Room, Hilt, Coroutines & Material 3." },
  { title: "DevOps & Cloud", text: "Docker, CI/CD pipelines, Firebase, AWS & observability." },
];

/* ---------------------------------- skills -------------------------------- */

export const skillGroups: SkillGroup[] = [
  {
    id: "fullstack",
    title: "Full-Stack Engineering",
    subtitle: "Web apps, APIs & everything in between",
    skills: [
      { name: "React / Next.js", level: 95, icon: Atom, color: "text-cyan-300" },
      { name: "TypeScript", level: 92, icon: FileCode2, color: "text-sky-300" },
      { name: "Node.js", level: 90, icon: Server, color: "text-emerald-300" },
      { name: "PostgreSQL / Prisma", level: 88, icon: Database, color: "text-amber-300" },
      { name: "MongoDB", level: 85, icon: Braces, color: "text-lime-300" },
      { name: "GraphQL / tRPC", level: 84, icon: Network, color: "text-rose-300" },
      { name: "Docker / CI-CD", level: 80, icon: Container, color: "text-teal-300" },
      { name: "Tailwind CSS", level: 93, icon: Wind, color: "text-cyan-200" },
    ],
  },
  {
    id: "android",
    title: "Android Development",
    subtitle: "Native mobile apps with Kotlin at heart",
    skills: [
      { name: "Kotlin", level: 94, icon: Code2, color: "text-violet-300" },
      { name: "Jetpack Compose", level: 91, icon: LayoutDashboard, color: "text-emerald-300" },
      { name: "Java", level: 86, icon: Coffee, color: "text-orange-300" },
      { name: "Android SDK", level: 90, icon: Smartphone, color: "text-lime-300" },
      { name: "Firebase", level: 88, icon: Flame, color: "text-amber-300" },
      { name: "Room / SQLDelight", level: 85, icon: Archive, color: "text-rose-300" },
      { name: "Retrofit / Ktor", level: 87, icon: ArrowLeftRight, color: "text-teal-300" },
      { name: "Material 3 Design", level: 89, icon: Palette, color: "text-violet-200" },
    ],
  },
];

export const otherTools = [
  { name: "Git & GitHub Actions", icon: GitBranch },
  { name: "Firebase Suite", icon: Flame },
  { name: "AWS / GCP", icon: Cloud },
  { name: "Web Performance", icon: Zap },
  { name: "PWA", icon: Globe },
  { name: "Play Store Release", icon: AppWindow },
];

/* --------------------------------- projects ------------------------------- */

export const projectFilters: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "fullstack", label: "Full-Stack" },
  { value: "android", label: "Android" },
];

export const projects: Project[] = [
  {
    title: "NovaCommerce Platform",
    category: "fullstack",
    description:
      "A full-featured e-commerce platform with real-time inventory, Stripe payments, admin analytics and a headless CMS. Handles 50K monthly visitors.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    gradient: "from-emerald-500/25 via-teal-500/15 to-transparent",
    icon: "globe",
    highlight: "50K monthly visitors",
    year: "2024",
  },
  {
    title: "FinTrack — Expense Manager",
    category: "android",
    description:
      "A beautiful offline-first expense tracking app with budgeting insights, biometric lock, recurring transactions and cloud sync.",
    tags: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Firebase"],
    gradient: "from-violet-500/25 via-fuchsia-500/10 to-transparent",
    icon: "wallet",
    highlight: "200K+ downloads",
    year: "2024",
  },
  {
    title: "Pulse Analytics Dashboard",
    category: "fullstack",
    description:
      "A real-time SaaS analytics dashboard with live WebSocket charts, role-based access, scheduled reports and export pipelines.",
    tags: ["React", "TypeScript", "tRPC", "Recharts", "ClickHouse"],
    gradient: "from-amber-500/25 via-orange-500/10 to-transparent",
    icon: "chart",
    highlight: "Real-time WebSocket data",
    year: "2023",
  },
  {
    title: "TravelMate Trip Planner",
    category: "android",
    description:
      "A travel companion app with itinerary builder, offline maps, currency converter and collaborative trip planning in real time.",
    tags: ["Kotlin", "MVVM", "Retrofit", "Google Maps", "Coroutines"],
    gradient: "from-teal-500/25 via-cyan-500/10 to-transparent",
    icon: "map",
    highlight: "4.8★ on Play Store",
    year: "2023",
  },
  {
    title: "WaveChat — Realtime Messaging",
    category: "fullstack",
    description:
      "End-to-end encrypted chat platform with channels, presence indicators, file sharing and push notifications across devices.",
    tags: ["Socket.io", "Node.js", "React", "MongoDB", "WebRTC"],
    gradient: "from-rose-500/25 via-pink-500/10 to-transparent",
    icon: "chat",
    highlight: "E2E encryption",
    year: "2022",
  },
  {
    title: "Foodly Delivery App",
    category: "android",
    description:
      "On-demand food delivery app with live order tracking, dynamic search, promo engine and seamless payment integrations.",
    tags: ["Kotlin", "Compose", "FCM", "Retrofit", "Play Billing"],
    gradient: "from-lime-500/25 via-emerald-500/10 to-transparent",
    icon: "food",
    highlight: "Live order tracking",
    year: "2022",
  },
];

/* -------------------------------- experience ------------------------------ */

export const experiences: ExperienceItem[] = [
  {
    role: "Senior Full-Stack Developer",
    company: "TechNova Labs",
    period: "2023 — Present",
    description:
      "Leading a team of 5 engineers building a multi-tenant SaaS platform serving 200+ enterprise clients.",
    achievements: [
      "Cut page load times by 45% through code-splitting, edge caching and query optimization",
      "Designed a event-driven microservice architecture processing 2M+ events per day",
      "Established testing culture raising coverage from 31% to 85%",
    ],
    current: true,
  },
  {
    role: "Android Developer",
    company: "AppHive Studio",
    period: "2021 — 2023",
    description:
      "Owned the Android codebase for a fintech app with 500K+ installs, migrating legacy Java screens to Jetpack Compose.",
    achievements: [
      "Shipped the Compose migration 2 months early with zero critical regressions",
      "Reduced app crash rate from 2.4% to 0.3% via strict Kotlin coroutines patterns",
      "Introduced modularization cutting build times from 9 to 3 minutes",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "PixelForge Digital",
    period: "2019 — 2021",
    description:
      "Built 15+ client products ranging from marketing sites to complex booking platforms and internal dashboards.",
    achievements: [
      "Delivered a hotel booking platform processing $1.2M in yearly reservations",
      "Built reusable component library adopted across all agency projects",
      "Automated deployments with Docker + GitHub Actions, saving 10+ hours weekly",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "StartupLab Incubator",
    period: "2018 — 2019",
    description:
      "First engineering hire at a startup incubator, turning MVP ideas into working products for early-stage founders.",
    achievements: [
      "Shipped 8 MVPs in 12 months, 3 of which raised seed funding",
      "Learned the full product lifecycle: scoping, building, measuring, iterating",
    ],
  },
];

/* --------------------------------- contact -------------------------------- */

export const socials = [
  { name: "GitHub", href: "https://github.com", label: "GitHub profile" },
  { name: "LinkedIn", href: "https://linkedin.com", label: "LinkedIn profile" },
  { name: "Twitter", href: "https://twitter.com", label: "Twitter profile" },
  { name: "Dribbble", href: "https://dribbble.com", label: "Dribbble profile" },
];

export const contactInfo = [
  { label: "Email", value: "alex.carter@dev.io", icon: "mail" },
  { label: "Phone", value: "+1 (555) 010-2846", icon: "phone" },
  { label: "Location", value: "San Francisco, CA · Remote friendly", icon: "pin" },
];
