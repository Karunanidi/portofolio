const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.URL ?? "http://localhost:3000";

export const siteUrl = configuredSiteUrl.replace(/\/$/, "");

export const publicProfiles = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/Karunanidi",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/trisnanurarief",
  playStore: process.env.NEXT_PUBLIC_PLAY_STORE_URL,
};

export const socialImagePath = "/og-image.svg";

export const personKnowsAbout = [
  "Mobile Application Development",
  "Android Development",
  "iOS Development",
  "Offline-First Architecture",
  "Frontend Web Development",
  "React",
  "Next.js",
  "Responsive Web UI",
  "REST API Integration",
  "User Interface Design",
];

export const personSameAs = Object.values(publicProfiles).filter(
  (profile): profile is string => Boolean(profile)
);
