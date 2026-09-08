import {
  Flame,
  Cloud,
  GitBranch,
  Smartphone,
  Globe,
  Palette,
  Film,
  Network,
  Database,
  Wrench,
  Users,
  Handshake,
  Boxes,
  Rocket,
  Code2,
  Zap,
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

export type ProjectCategory = "all" | "flutter" | "android";

export interface Project {
  title: string;
  category: Exclude<ProjectCategory, "all">;
  description: string;
  tags: string[];
  gradient: string;
  icon: "run" | "truck" | "box" | "log";
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
  "Mobile App Developer",
  "Flutter Developer",
  "Android Developer",
  "Tech & Design Enthusiast",
];

export const heroStats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "K+", label: "App Users" },
  { value: 30, suffix: "%", label: "Crash Reduction" },
];

export const marqueeTech = [
  "Flutter", "Dart", "Android", "Java", "Kotlin", "Firebase",
  "REST APIs", "Git", "SQL Server", "HTML", "CSS", "JavaScript",
  "PHP", "Mikrotik", "Premiere Pro", "CapCut",
];

/* ---------------------------------- about --------------------------------- */

export const aboutParagraphs = [
  "I'm a mobile developer from South Tangerang, Indonesia, with a solid foundation in software engineering from my Informatics Management degree at Politeknik LP3I Jakarta. Currently, I work as an Android Mobile Developer at Fleetify.id, a fast-growing Fleet Management System (FMS) provider integrating IoT and logistics solutions.",
  "Before that, I built cross-platform apps with Flutter at PT Indonesia Satu Tujuh (INA17) — including the \"Ayo Lari\" fitness tracking app powering Telkomsel's Cooltura Run 5K 2024, used by more than 5,000 participants. I integrated real-time location tracking, REST APIs, and the full Firebase suite, while keeping releases 100% on time on the Play Store.",
  "My journey started in IT support at JHL Solitaire, a luxury 5-star hotel, where I learned networking, servers, and Mikrotik infrastructure the hands-on way. Outside of code, I'm into design and videography — editing with Adobe Premiere Pro, Illustrator, and CapCut — plus singing and sports.",
];

export const aboutHighlights = [
  { title: "Flutter & Cross-Platform", text: "Flutter/Dart apps with real-time tracking, Firebase services & smooth Play Store releases." },
  { title: "Native Android", text: "Android Studio (Java/Kotlin), RESTful API integration & data-heavy fleet modules." },
  { title: "Design & Infra", text: "SQL Server, Mikrotik networking, Adobe Premiere Pro, Illustrator & CapCut." },
];

/* ---------------------------------- skills -------------------------------- */

export const skillGroups: SkillGroup[] = [
  {
    id: "mobile",
    title: "Mobile Development",
    subtitle: "Shipping production apps to real users",
    skills: [
      { name: "Flutter / Dart", level: 90, icon: Zap, color: "text-cyan-300" },
      { name: "Firebase Suite", level: 88, icon: Flame, color: "text-amber-300" },
      { name: "REST API Integration", level: 90, icon: Network, color: "text-emerald-300" },
      { name: "Android Studio (Java)", level: 84, icon: Smartphone, color: "text-lime-300" },
      { name: "Kotlin", level: 75, icon: Code2, color: "text-violet-300" },
      { name: "Play Store Deployment", level: 92, icon: Rocket, color: "text-teal-300" },
      { name: "Git Version Control", level: 86, icon: GitBranch, color: "text-rose-300" },
      { name: "SQL Server", level: 80, icon: Database, color: "text-orange-300" },
    ],
  },
  {
    id: "web-design",
    title: "Web, Design & Video",
    subtitle: "The supporting toolkit behind my projects",
    skills: [
      { name: "HTML / CSS / JS", level: 84, icon: Globe, color: "text-teal-300" },
      { name: "PHP Framework", level: 76, icon: Wrench, color: "text-violet-200" },
      { name: "Adobe Premiere Pro", level: 82, icon: Film, color: "text-rose-300" },
      { name: "Adobe Photoshop", level: 78, icon: Palette, color: "text-amber-300" },
      { name: "Adobe Illustrator", level: 74, icon: Palette, color: "text-lime-300" },
      { name: "CapCut Editing", level: 85, icon: Film, color: "text-cyan-200" },
      { name: "Mikrotik Networking", level: 72, icon: Network, color: "text-emerald-300" },
      { name: "Microsoft Office", level: 88, icon: Database, color: "text-orange-300" },
    ],
  },
];

export const otherTools = [
  { name: "Crashlytics Debugging", icon: Flame },
  { name: "Cloud & Hosting Basics", icon: Cloud },
  { name: "ERP Systems", icon: Boxes },
  { name: "System Design Analysis", icon: Boxes },
  { name: "Agile Teamwork", icon: Handshake },
  { name: "Leadership (BEM LP3I)", icon: Users },
];

/* --------------------------------- projects ------------------------------- */

export const projectFilters: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "flutter", label: "Flutter" },
  { value: "android", label: "Android" },
];

export const projects: Project[] = [
  {
    title: "Ayo Lari — Fitness Tracking App",
    category: "flutter",
    description:
      "Flutter fitness tracking app for Telkomsel's Cooltura Run 5K 2024, used by 5,000+ participants. Features real-time location tracking, REST APIs and the full Firebase suite — auth, push notifications, analytics and Crashlytics.",
    tags: ["Flutter", "Dart", "Firebase", "REST API", "Location Tracking"],
    gradient: "from-emerald-500/25 via-teal-500/15 to-transparent",
    icon: "run",
    highlight: "5,000+ participants",
    year: "2024",
  },
  {
    title: "Fleetify.id — Fleet Management App",
    category: "android",
    description:
      "Native Android app for a fast-growing Fleet Management System (FMS) provider integrating IoT and logistics. Optimized for large data lists with smooth UX during heavy data input, synchronized with the backend dashboard.",
    tags: ["Android", "Java", "REST API", "IoT", "Fleet & Logistics"],
    gradient: "from-violet-500/25 via-fuchsia-500/10 to-transparent",
    icon: "truck",
    highlight: "IoT-powered FMS",
    year: "2025",
  },
  {
    title: "Stocking & Inventory Module",
    category: "android",
    description:
      "Fleetify.id module ensuring accurate data entry for spare parts and asset management — the backbone of vehicle inventory control, synced in real time with the company's backend dashboard.",
    tags: ["Android", "Inventory", "Asset Management", "Data Sync"],
    gradient: "from-amber-500/25 via-orange-500/10 to-transparent",
    icon: "box",
    highlight: "Inventory control",
    year: "2025",
  },
  {
    title: "Digital Service Log Reporting",
    category: "android",
    description:
      "Digital reporting feature for routine vehicle service logs, replacing manual paper processes with an efficient mobile interface. Handles detailed service history and item usage via RESTful APIs.",
    tags: ["Android", "Reporting", "RESTful API", "Service History"],
    gradient: "from-rose-500/25 via-pink-500/10 to-transparent",
    icon: "log",
    highlight: "Paperless operations",
    year: "2025",
  },
];

/* -------------------------------- experience ------------------------------ */

export const experiences: ExperienceItem[] = [
  {
    role: "Android Mobile Developer",
    company: "Fleetify.id",
    period: "Nov 2025 — Present",
    description:
      "Building fleet management modules at a fast-growing FMS provider integrating IoT and logistics solutions.",
    achievements: [
      "Focusing on FMS modules for vehicle maintenance and inventory control",
      "Developing digital reporting for routine service logs, replacing manual processes",
      "Building and maintaining the \"Stocking & Inventory\" module for spare parts and assets",
      "Integrating complex RESTful APIs and optimizing performance for large data lists",
    ],
    current: true,
  },
  {
    role: "Mobile Developer (Flutter)",
    company: "PT. Indonesia Satu Tujuh (INA17)",
    period: "Feb 2024 — Oct 2025",
    description:
      "Cross-platform mobile development at a holding company focused on mobile apps and MNO's VAS platform.",
    achievements: [
      "Shipped \"Ayo Lari\" fitness app for Telkomsel's Cooltura Run 5K 2024 — 5,000+ participants",
      "Integrated real-time location tracking, REST APIs and Firebase services (auth, FCM, analytics, Crashlytics)",
      "Improved app reliability by 30%, cutting crash incidents with Firebase Crashlytics",
      "Led deployments to production, maintaining 100% on-time Play Store updates with a 5+ dev team",
    ],
  },
  {
    role: "IT Support (Internship)",
    company: "JHL Solitaire Gading Serpong",
    period: "Aug 2023 — Jan 2024",
    description:
      "IT operations at a luxury 5-star hotel with 141 premier rooms and high-tech facilities.",
    achievements: [
      "Handled daily technical operations, supporting 50+ staff and critical IT infrastructure",
      "Documented 10+ IT infrastructure processes, aiding internal knowledge transfer",
      "Assisted migration of servers, storage, Mikrotik routers and access points — improving network uptime by 20%",
    ],
  },
  {
    role: "Informatics Management Student",
    company: "Politeknik LP3I Jakarta",
    period: "Sep 2020 — Jul 2025",
    description:
      "Studied web & mobile programming, database administration, system design and ERP — while serving in the Student Executive Board (BEM LP3I Jakarta) internal control unit.",
    achievements: [
      "Built dynamic websites with HTML, CSS, JS and PHP frameworks",
      "Administered SQL Server databases: extract, transform and load data",
      "Developed Android apps in Android Studio (Java) as mobile programming focus",
    ],
  },
];

/* --------------------------------- contact -------------------------------- */

export const socials = [
  {
    name: "Portfolio",
    href: "https://bit.ly/3Zr3t03",
    label: "Portfolio website",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6287875519249",
    label: "Chat on WhatsApp",
  },
  {
    name: "Email",
    href: "mailto:trisna.na@gmail.com",
    label: "Send an email",
  },
];

export const contactInfo = [
  { label: "Email", value: "trisna.na@gmail.com", icon: "mail" },
  { label: "WhatsApp", value: "+62 878-7551-9249", icon: "phone" },
  { label: "Location", value: "South Tangerang, Indonesia", icon: "pin" },
];

export const cvFileName = "CV_Trisna_Nur_Arief_Mobile_Developer.pdf";
export const cvLink = `/cv/${cvFileName}`;
