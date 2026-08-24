export type Locale = "en" | "id";

export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "id"];

export interface Dictionary {
  nav: {
    work: string;
    notes: string;
    about: string;
    contact: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    viewWork: string;
    startProject: string;
    currently: string;
    stack: string;
  };
  sections: {
    selectedWork: string;
    selectedWorkSub: string;
    capabilities: string;
    workingNotes: string;
    workingNotesSub: string;
    about: string;
    contact: string;
    allWork: string;
    allWorkSub: string;
  };
  project: {
    viewCaseStudy: string;
    liveSite: string;
    moreWork: string;
    allSelectedWork: string;
    verified: string;
    designTarget: string;
    scope: string;
    operationalScale: string;
  };
  caseStudy: {
    context: string;
    constraints: string;
    systemDesign: string;
    keyDecisions: string;
    verification: string;
    improvements: string;
    visitLiveSite: string;
    stack: string;
    role: string;
    duration: string;
    status: string;
  };
  about: {
    heading: string;
    greeting: string;
    viewResume: string;
    howIWork: string;
    techStack: string;
    experience: string;
    services: string;
    principles: string;
    location: string;
    timezone: string;
    availability: string;
  };
  contact: {
    headline: string;
    headlineLine2: string;
    cta: string;
    comingSoon: string;
  };
  footer: {
    designed: string;
    updated: string;
  };
  capabilities: {
    build: string;
    buildDesc: string;
    automate: string;
    automateDesc: string;
    operate: string;
    operateDesc: string;
  };
}
