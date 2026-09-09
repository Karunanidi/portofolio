import { describe, expect, test } from "bun:test";
import { caseStudies, workItems } from "./portfolio-data";

describe("portfolio project provenance", () => {
  test("keeps Mahirka separate from CV-backed professional work", () => {
    const mahirka = workItems.find((item) => item.title === "Mahirka");
    const professionalWork = workItems.filter(
      (item) => item.title !== "Mahirka"
    );

    expect(mahirka?.context).toBe("Independent product");
    expect(professionalWork).toHaveLength(4);
    expect(
      professionalWork.every((item) => item.context === "Professional work")
    ).toBe(true);
  });

  test("labels the Mahirka case study as an independent product", () => {
    const mahirka = caseStudies.find((item) => item.id === "mahirka");

    expect(mahirka?.context).toBe("Independent product");
  });
});
