/* Shared content types for the portfolio data layer. */

export interface Person {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  github: string;
  githubUrl: string;
  linkedinUrl: string;
  yearsExp: string;
  shipped: string;
}

export interface CaseStudy {
  problem?: string;
  approach?: string[];
  outcome?: string;
  metrics?: { v: string; k: string }[];
}

export interface FeaturedProject {
  id: string;
  name: string;
  tag: string;
  kind: string;
  url: string;
  href: string;
  /** card summary; falls back to the first paragraph of `overview` when omitted */
  blurb?: string;
  /** authentic free-form description, shown as the modal's overview (paragraph-split on blank lines) */
  overview?: string;
  stack: string[];
  role?: string;
  timeline?: string;
  /** real screenshot URLs; their count drives the gallery (overrides `shots`) */
  images?: string[];
  /** number of placeholder shots when no `images` are supplied */
  shots?: number;
  /** card accent colour (hex) for shadow / dot */
  accent?: string;
  /** structured case study; render only the fields that are present */
  study?: CaseStudy;
}

export interface Project {
  id: string;
  name: string;
  kind: string;
  stack: string[];
  about: string;
  role: string;
  /** monogram fallback shown when a cover image is unavailable */
  glyph?: string;
  /** 1-based cover colour variant (maps to a card shadow accent) */
  cover?: number;
  /** real screenshot URLs — first is the card cover, all feed the gallery */
  images?: string[];
  /** how cover / gallery images fit their frame (default "cover") */
  imageFit?: "cover" | "contain";
}

/** pastel accent classes used by skill tiles (c-sky, c-mint, …) */
export type SkillColor = "c-sky" | "c-mint" | "c-pink" | "c-lav" | "c-butter" | "c-ink";
export type SkillCategory = "frameworks" | "languages" | "styling" | "backend";

export interface SkillTile {
  sym: string;
  nm: string;
  c: SkillColor;
  cat: SkillCategory;
}

export interface Skills {
  daily: SkillTile[];
  support: string[];
}

export interface ExperienceEntry {
  title: string;
  org: string;
  when: string;
  dot: string;
  points: string[];
}

export interface PortfolioData {
  person: Person;
  heroStack: string[];
  marquee: string[];
  featured: FeaturedProject[];
  projects: Project[];
  skills: Skills;
  experience: ExperienceEntry[];
}
