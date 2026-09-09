/* Portfolio content for Trisna Nur Arief. */

export const persona = {
  name: "Trisna Nur Arief",
  firstName: "Trisna",
  role: "Android and Flutter Developer",
  location: "South Tangerang, Indonesia",
  email: "trisna.na@gmail.com",
  whatsapp: "+62 878-7551-9249",
  whatsappLink: "https://wa.me/6287875519249",
  portfolioLink: "https://bit.ly/3Zr3t03",
  cvLink: "/cv/CV_Trisna_Nur_Arief_Mobile_Developer.pdf",
};

export const bootLines = [
  "ANDROID + FLUTTER",
  "FLEET OPERATIONS",
  "LOCATION-AWARE PRODUCTS",
  "PRODUCTION DELIVERY",
  "MAHIRKA / INDEPENDENT PRODUCT",
  "PORTFOLIO READY",
];

export const heroWords = [
  "ANDROID APPS",
  "FLUTTER APPS",
  "MOBILE SYSTEMS",
  "INDIE PRODUCTS",
];

export const heroTagline =
  "Android and Flutter developer shipping fleet operations software, location-aware apps, and an independent learning product.";

export const manifesto =
  "I build mobile software for real operations. My work covers fleet maintenance, inventory, service reporting, location tracking, Firebase, and Play Store delivery.";

export const manifestoStats = [
  { value: "2+", label: "Years in mobile development" },
  { value: "5,000+", label: "Ayo Lari participants" },
  { value: "30%", label: "Reliability improvement" },
  { value: "100%", label: "On-time Play Store updates" },
];

export interface StackLayer {
  id: string;
  title: string;
  role: string;
  nodes: string[];
}

export const stackLayers: StackLayer[] = [
  {
    id: "interface",
    title: "Mobile interface",
    role: "What people use",
    nodes: ["Flutter", "Android Studio", "Java", "Responsive flows"],
  },
  {
    id: "product",
    title: "Product logic",
    role: "What the software does",
    nodes: ["Fleet maintenance", "Inventory control", "Service reporting"],
  },
  {
    id: "services",
    title: "Services",
    role: "How systems connect",
    nodes: ["REST APIs", "Firebase Auth", "Push Notifications", "Analytics", "Crashlytics"],
  },
  {
    id: "data",
    title: "Data",
    role: "What stays synchronized",
    nodes: ["SQL Server", "Backend Sync", "Service History", "Item Usage"],
  },
  {
    id: "delivery",
    title: "Delivery",
    role: "How work reaches users",
    nodes: ["Git", "Play Store", "Production Deployment", "Release Coordination"],
  },
];

export const stackFootnote =
  "The interface is only one part of the job. Data flow, reliability, and release discipline matter just as much.";

export interface ProcessStep {
  id: string;
  title: string;
  line: string;
  detail: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "clarify",
    title: "Clarify",
    line: "Turn product goals into an implementation that can be tested.",
    detail:
      "I align technical specifications with developers and stakeholders before committing to a mobile flow or service contract.",
  },
  {
    id: "build",
    title: "Build",
    line: "Choose Flutter or native Android for the product context.",
    detail:
      "My production work spans Flutter applications and Android development in Java, from user-facing flows to data-heavy operational modules.",
  },
  {
    id: "integrate",
    title: "Integrate",
    line: "Connect the interface to the systems behind it.",
    detail:
      "I work with REST APIs, Firebase services, service history, item usage, and backend dashboard synchronization.",
  },
  {
    id: "release",
    title: "Release",
    line: "Carry the work from development into production.",
    detail:
      "At PT Indonesia Satu Tujuh, I led development-to-production delivery and maintained 100% on-time Play Store updates.",
  },
  {
    id: "improve",
    title: "Improve",
    line: "Use operational evidence to make the next release better.",
    detail:
      "Crashlytics and analytics informed reliability work, while large-list and data-entry optimization improved day-to-day use.",
  },
];

export type WorkContext = "Professional work" | "Independent product";

export interface WorkItem {
  index: string;
  title: string;
  kind: "Flutter" | "Android" | "PWA";
  context: WorkContext;
  year: string;
  summary: string;
  tags: string[];
  metric: string;
  metricLabel: string;
  href?: string;
}

export const workItems: WorkItem[] = [
  {
    index: "01",
    title: "Ayo Lari",
    kind: "Flutter",
    context: "Professional work",
    year: "2024",
    summary:
      "Fitness tracking app for Telkomsel's Cooltura Run 5K 2024, used by 5,000+ participants with real-time location tracking, REST APIs, and Firebase services.",
    tags: ["Flutter", "Location Tracking", "Firebase", "REST APIs"],
    metric: "5,000+",
    metricLabel: "event participants",
  },
  {
    index: "02",
    title: "Fleet Maintenance",
    kind: "Android",
    context: "Professional work",
    year: "2025",
    summary:
      "Android modules for vehicle maintenance workflows inside Fleetify's IoT-enabled FMS, including service history, item usage, and backend dashboard synchronization.",
    tags: ["Android", "Java", "REST APIs", "Fleet Operations"],
    metric: "FMS",
    metricLabel: "vehicle operations software",
  },
  {
    index: "03",
    title: "Stocking and Inventory",
    kind: "Android",
    context: "Professional work",
    year: "2025",
    summary:
      "A Fleetify module for spare-parts and asset inventory, designed for accurate data entry and synchronization with the backend dashboard.",
    tags: ["Android", "Inventory", "Data Entry", "Backend Sync"],
    metric: "Assets",
    metricLabel: "spare parts and inventory records",
  },
  {
    index: "04",
    title: "Digital Service Logs",
    kind: "Android",
    context: "Professional work",
    year: "2025",
    summary:
      "A mobile reporting flow that replaces manual routine-service records and connects service history and item usage through REST APIs.",
    tags: ["Android", "Reporting", "REST APIs", "Service History"],
    metric: "Mobile",
    metricLabel: "routine service reporting",
  },
  {
    index: "05",
    title: "Mahirka",
    kind: "PWA",
    context: "Independent product",
    year: "2026",
    summary:
      "My largest independent project so far: a Next.js learning product for Indonesian students, combining AI-assisted study tools with deterministic practice, review, and progress logic.",
    tags: ["Next.js", "PWA", "Learning Systems", "Independent"],
    metric: "Indie",
    metricLabel: "largest independent build",
    href: "https://mahirka.com",
  },
];

export interface CaseStudy {
  id: string;
  context: WorkContext;
  kicker: string;
  title: string;
  subtitle: string;
  body: string;
  stats: { value: string; label: string }[];
  outcomes: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "ayolari",
    context: "Professional work",
    kicker: "Event application",
    title: "Ayo Lari for 5,000+ participants",
    subtitle: "PT Indonesia Satu Tujuh / Telkomsel Cooltura Run 5K 2024",
    body: "I worked on Ayo Lari in Flutter for Telkomsel's Cooltura Run 5K 2024. The application combined real-time location tracking, REST APIs, Firebase Authentication, push notifications, analytics, and Crashlytics. I also led its development-to-production delivery.",
    stats: [
      { value: "5,000+", label: "participants" },
      { value: "30%", label: "reliability improvement" },
      { value: "100%", label: "on-time Play Store updates" },
    ],
    outcomes: [
      "Implemented real-time location tracking for the event application",
      "Integrated REST APIs and the Firebase service suite",
      "Improved reliability and reduced crash incidents",
    ],
  },
  {
    id: "fleetify",
    context: "Professional work",
    kicker: "Fleet operations",
    title: "Android tools for fleet operations",
    subtitle: "Fleetify.id / Android Mobile Developer",
    body: "At Fleetify, I develop Android modules for vehicle maintenance and inventory control within an IoT-enabled fleet management system. The work includes digital service reporting, spare-parts and asset records, complex REST API integration, backend dashboard synchronization, and optimization for large lists and data entry.",
    stats: [
      { value: "REST", label: "service and item APIs" },
      { value: "FMS", label: "fleet operations context" },
      { value: "Sync", label: "backend dashboard data" },
    ],
    outcomes: [
      "Vehicle maintenance and digital service reporting modules",
      "Stocking and inventory workflows for spare parts and assets",
      "Large-list and data-entry optimization for operational use",
    ],
  },
  {
    id: "mahirka",
    context: "Independent product",
    kicker: "Learning product",
    title: "Building Mahirka end to end",
    subtitle: "Mahirka.com / Next.js learning product",
    body: "Mahirka is my largest independent project so far. I designed and built the product across its interface, application logic, Firebase-backed data, AI-assisted generation, and release workflows. Its learning system keeps scoring, evidence, review state, and recommendations deterministic and server-owned instead of presenting AI output as certainty.",
    stats: [
      { value: "Next.js", label: "full-stack product" },
      { value: "Firebase", label: "browser and server boundaries" },
      { value: "Deterministic", label: "practice and review logic" },
    ],
    outcomes: [
      "Study tools, practice flows, flashcards, gamification, and leaderboard",
      "Deterministic practice, review, and recommendation logic",
      "Explicit security, quota, and release boundaries",
    ],
  },
];

export interface Chapter {
  period: string;
  place: string;
  role: string;
  story: string;
  marks: string[];
  current?: boolean;
}

export const chapters: Chapter[] = [
  {
    period: "Nov 2025 - Now",
    place: "Fleetify.id",
    role: "Android Mobile Developer",
    story: "Developing vehicle maintenance, stocking and inventory, and digital service-reporting modules for an IoT-enabled fleet management system.",
    marks: ["Android", "Java", "REST APIs"],
    current: true,
  },
  {
    period: "Feb 2024 - Oct 2025",
    place: "PT Indonesia Satu Tujuh",
    role: "Mobile Developer, Flutter",
    story: "Built Flutter products including Ayo Lari, integrated Firebase and REST APIs, collaborated with five or more developers and stakeholders, and led Play Store delivery.",
    marks: ["Flutter", "Firebase", "Ayo Lari"],
  },
  {
    period: "Aug 2023 - Jan 2024",
    place: "JHL Solitaire",
    role: "IT Support Intern",
    story: "Supported more than 50 staff and worked on server, storage, Mikrotik, and access-point migration and configuration, improving network uptime by 20%.",
    marks: ["Mikrotik", "Infrastructure", "Technical Support"],
  },
  {
    period: "Sep 2020 - Jul 2025",
    place: "Politeknik LP3I Jakarta",
    role: "Informatics Management",
    story: "Studied web and mobile programming, SQL Server database administration, system design, and Android development in Java.",
    marks: ["SQL Server", "Web Development", "Android Java"],
  },
];

export const contactTitle = ["GET IN", "TOUCH"];

export const marqueeWords = [
  "ANDROID",
  "FLUTTER",
  "JAVA",
  "REST APIs",
  "FIREBASE",
  "PLAY STORE",
  "SQL SERVER",
  "GIT",
];

export const footerNote = "Designed and built by Trisna Nur Arief.";
