import { persona } from "@/lib/portfolio-data";
import {
  personKnowsAbout,
  personSameAs,
  siteUrl,
  socialImagePath,
} from "@/lib/site-config";

export default function PersonJsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: persona.name,
    url: siteUrl,
    image: `${siteUrl}${socialImagePath}`,
    jobTitle:
      "Mobile Application Developer (Android and iOS) | Frontend Web Developer",
    description:
      "Mobile Application Developer focused on Android and iOS, with frontend web development for responsive interfaces, dashboards, and web companions.",
    knowsAbout: personKnowsAbout,
    sameAs: personSameAs,
    address: {
      "@type": "PostalAddress",
      addressLocality: "South Tangerang",
      addressCountry: "ID",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(person).replace(/</g, "\\u003c"),
      }}
    />
  );
}
