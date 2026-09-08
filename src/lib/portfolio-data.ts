/* ------------------------------------------------------------------ */
/*  Trisna Nur Arief — scrollytelling story data                       */
/*  Every word of the story lives here. Edit this file to edit the     */
/*  narrative; components only render what is defined below.           */
/* ------------------------------------------------------------------ */

export const persona = {
  name: "Trisna Nur Arief",
  firstName: "Trisna",
  role: "Mobile Developer",
  location: "South Tangerang, Indonesia",
  coordinates: "6.3024° S / 106.6528° E",
  email: "trisna.na@gmail.com",
  whatsapp: "+62 878-7551-9249",
  whatsappLink: "https://wa.me/6287875519249",
  portfolioLink: "https://bit.ly/3Zr3t03",
  cvLink: "/cv/CV_Trisna_Nur_Arief_Mobile_Developer.pdf",
};

/* ------------------------------ preloader -------------------------- */

export const bootLines = [
  "MOUNTING /dev/story",
  "LINKING flutter_engine … OK",
  "RESTORING SESSION 2023 → 2026",
  "CACHE HIT — 4 PROJECTS, 3 SCENES",
  "CALIBRATING SCROLL VELOCITY",
  "READY",
];

/* -------------------------------- hero ----------------------------- */

export const heroWords = [
  "MOBILE APPS",
  "FLUTTER APPS",
  "ANDROID APPS",
  "REAL PRODUCTS",
];

export const heroTagline =
  "From first commit to Play Store release — real-time tracking, Firebase, and everything that keeps five thousand runners moving.";

/* ----------------------------- manifesto --------------------------- */

export const manifesto =
  "I turn ideas into production apps. Two years in, thousands of users served, one obsession — software that survives contact with the real world.";

export const manifestoStats = [
  { value: "2+", label: "Years shipping" },
  { value: "5,000+", label: "Users served" },
  { value: "-30%", label: "Crash incidents" },
  { value: "100%", label: "On-time releases" },
];

/* ------------------------------ the stack -------------------------- */

export interface StackLayer {
  id: string;
  title: string;
  role: string;
  nodes: string[];
}

/* Ordered bottom-up: platform → cloud. The diagram assembles as you scroll. */
export const stackLayers: StackLayer[] = [
  {
    id: "ui",
    title: "UI Layer",
    role: "What the user touches",
    nodes: ["Flutter Widgets", "Material 3", "Custom Canvas", "Animations"],
  },
  {
    id: "state",
    title: "State & Logic",
    role: "How the app thinks",
    nodes: ["BLoC / Provider", "Streams", "Local Sync"],
  },
  {
    id: "services",
    title: "Services",
    role: "How the app talks",
    nodes: ["REST APIs", "Firebase Auth", "FCM Push", "Analytics", "Crashlytics"],
  },
  {
    id: "data",
    title: "Data",
    role: "Where it lives",
    nodes: ["SQLite", "SQL Server", "Realtime Sync"],
  },
  {
    id: "platform",
    title: "Platform",
    role: "Where it runs",
    nodes: ["Android SDK", "Java / Kotlin", "Location Services", "Play Store"],
  },
];

export const stackFootnote =
  "Every layer below the pixel has to hold — or the pixel doesn't matter.";

/* ------------------------------- process --------------------------- */

export interface ProcessStep {
  id: string;
  title: string;
  line: string;
  detail: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "01",
    title: "Understand",
    line: "Define the problem before writing a line.",
    detail:
      "A fitness app for a Telkomsel 5K run. A fleet system that talks to IoT sensors. The problem comes first — the stack is just the answer.",
  },
  {
    id: "02",
    title: "Design",
    line: "Shape the flow: screens, state, data, failure modes.",
    detail:
      "Offline states. Race-day traffic spikes. GPS that lies. Designing for the worst day is what makes the best day feel effortless.",
  },
  {
    id: "03",
    title: "Build",
    line: "Turn decisions into Flutter and native Android.",
    detail:
      "Cross-platform when speed matters, native when the platform demands it. Clean modules, typed APIs, no mystery code.",
  },
  {
    id: "04",
    title: "Ship",
    line: "Production is the real test.",
    detail:
      "Staged rollouts, Crashlytics on every build, Play Store releases 100% on time. Shipping isn't the end of the work — it's the start of the evidence.",
  },
  {
    id: "05",
    title: "Evolve",
    line: "Software is never finished.",
    detail:
      "Crash rates cut 30% by watching what real users do. Every release teaches the next one. The backlog is a feature, not a failure.",
  },
];

/* ------------------------------- projects -------------------------- */

export interface WorkItem {
  index: string;
  title: string;
  kind: "Flutter" | "Android" | "PWA";
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
    year: "2024",
    summary:
      "Fitness tracking app for Telkomsel's Cooltura Run 5K — real-time location tracking, live leaderboards, the full Firebase suite.",
    tags: ["Flutter", "Realtime GPS", "Firebase", "REST API"],
    metric: "5,000+",
    metricLabel: "runners on race day",
  },
  {
    index: "02",
    title: "Fleetify FMS",
    kind: "Android",
    year: "2025",
    summary:
      "Native Android app for an IoT-powered fleet management platform — thousands of data points, buttery-smooth lists.",
    tags: ["Android", "Java", "IoT", "Logistics"],
    metric: "IoT",
    metricLabel: "live vehicle telemetry",
  },
  {
    index: "03",
    title: "Stocking & Inventory",
    kind: "Android",
    year: "2025",
    summary:
      "Spare-parts and asset inventory module — the backbone of vehicle inventory control, synced live with the backend dashboard.",
    tags: ["Android", "Inventory", "Data Sync"],
    metric: "0",
    metricLabel: "lost spare parts on my watch",
  },
  {
    index: "04",
    title: "Digital Service Logs",
    kind: "Android",
    year: "2025",
    summary:
      "Paper service logs, retired. A mobile reporting flow for routine vehicle maintenance, history and item usage via REST APIs.",
    tags: ["Android", "Reporting", "RESTful API"],
    metric: "100%",
    metricLabel: "paperless service records",
  },
  {
    index: "05",
    title: "Mahirka",
    kind: "PWA",
    year: "2026",
    summary:
      "Personal build — an AI study companion for Indonesian students: chat tutor, flashcards & memory games, and PDF-to-practice pipelines. Installable as a PWA with one-time payment tiers.",
    tags: ["Next.js", "PWA", "AI SaaS", "Solo Build"],
    metric: "24/7",
    metricLabel: "AI tutor for Indonesian students",
    href: "https://mahirka.com",
  },
];

/* ----------------------------- case studies ------------------------ */

export interface CaseStudy {
  id: string;
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
    kicker: "CASE STUDY — 01",
    title: "Rebuilding race day for 5,000 runners",
    subtitle: "Ayo Lari × Telkomsel Cooltura Run 5K 2024, Bali",
    body: "When Indonesia's biggest telco threw a 5K run in Bali, the event needed an app that could track hundreds of runners moving at once — and never crash mid-race. I built it in Flutter: real-time GPS tracking, live results through REST APIs, Firebase auth, push notifications, analytics and Crashlytics wired into every release.",
    stats: [
      { value: "5,000+", label: "participants tracked" },
      { value: "100%", label: "on-time releases" },
      { value: "5K", label: "meters, accurately measured" },
    ],
    outcomes: [
      "Real-time location tracking that survived race-day load",
      "Zero missed Play Store deadlines across the season",
      "Crash incidents down 30% via Crashlytics-driven fixes",
    ],
  },
  {
    id: "fleetify",
    kicker: "CASE STUDY — 02",
    title: "Making heavy data feel weightless",
    subtitle: "Fleetify.id — IoT-powered Fleet Management System",
    body: "Fleet management means relentless data: vehicles, sensors, service records, spare parts. My modules — fleet maintenance, stocking & inventory, digital service logs — had to stay smooth while syncing everything with the backend dashboard in real time. Heavy lists, live telemetry, and an interface drivers actually use.",
    stats: [
      { value: "3", label: "production modules shipped" },
      { value: "IoT", label: "telemetry integrated" },
      { value: "Real-time", label: "backend sync" },
    ],
    outcomes: [
      "Inventory control for spare parts and assets, live-synced",
      "Paper service logs fully replaced with digital reporting",
      "Optimized rendering for large data sets on mid-range devices",
    ],
  },
  {
    id: "mahirka",
    kicker: "CASE STUDY — 03 · PERSONAL BUILD",
    title: "A tutor that never sleeps",
    subtitle: "Mahirka.com — AI study companion for Indonesian students",
    body: "My own product, built end-to-end: an AI learning companion that helps students understand confusing material, finish homework, generate structured summaries, and drill what they learned through flashcards, quick quizzes and memory games — plus a pipeline that turns any lesson PDF into summaries and predicted exam questions. Installable as a PWA, priced with honest one-time tiers instead of subscriptions.",
    stats: [
      { value: "3", label: "learning modes in one app" },
      { value: "PDF→Quiz", label: "material pipeline" },
      { value: "PWA", label: "installable everywhere" },
    ],
    outcomes: [
      "Full product live at mahirka.com — beta testing open",
      "Free tier plus two one-time payment plans, no auto-renewal",
      "Privacy-first: clear commitments on student data handling",
    ],
  },
];

/* ------------------------------ timeline ---------------------------- */

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
    period: "2025 — Now",
    place: "Fleetify.id",
    role: "Android Mobile Developer",
    story: "Building the modules fleet operators rely on — maintenance, inventory, digital service logs — for an IoT-first fleet management platform.",
    marks: ["Native Android", "IoT integration", "Data-heavy UI"],
    current: true,
  },
  {
    period: "2024 — 2025",
    place: "PT Indonesia Satu Tujuh",
    role: "Mobile Developer — Flutter",
    story: "Cross-platform apps for a telco-VAS holding company. Shipped Ayo Lari for Telkomsel's Cooltura Run, led Play Store releases with a five-dev team.",
    marks: ["Flutter", "Firebase suite", "Ayo Lari"],
  },
  {
    period: "2023 — 2024",
    place: "JHL Solitaire",
    role: "IT Support — Internship",
    story: "Five-star hotel, 141 rooms, zero tolerance for downtime. Servers, Mikrotik networks, and the people skills that come from fixing things live.",
    marks: ["Networking", "Mikrotik", "Infrastructure"],
  },
  {
    period: "2020 — 2025",
    place: "Politeknik LP3I Jakarta",
    role: "Informatics Management",
    story: "Where it started: web programming, SQL Server, system design — and Android Studio in Java, which quietly became the whole direction.",
    marks: ["SQL Server", "PHP", "Android (Java)"],
  },
];

/* ------------------------------- contact ---------------------------- */

export const contactTitle = ["LET'S BUILD", "WHAT'S NEXT"];

export const marqueeWords = [
  "FLUTTER",
  "ANDROID",
  "FIREBASE",
  "REAL-TIME",
  "PLAY STORE",
  "IOT",
  "DART",
  "KOTLIN",
];

export const footerNote = "Designed & built by Trisna Nur Arief — South Tangerang, Indonesia";
