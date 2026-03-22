export interface TimelineItem {
  date: string;
  title: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
export interface CompetitionData {
  slug: string;
  title: string;
  logo: string;
  theme: string;
  themeDesc: string;
  timeline: TimelineItem[];
  bestThing?: string;
  guidebook: string;
  themeGuidebook?: string;
  coreTheme?: string;
  subTheme?: string[];
  themeBreakdown?: string[];
  rules: string[];
  abstractCriteria?: string[];
  preliminaryCriteria?: string[];
  finalCriteria?: string[];
  requiredDocument: string[];
  preliminaryPayment: string[];
  faq: FaqItem[];
  contactPerson: string;
  cpLink: string;
}

export const COMPETITION: CompetitionData[] = [
  {
    slug: "ppc",
    title: "Paper and Poster",
    logo: "/logo/ppc.svg",
    theme:
      "Strategic Optimization of Integrated Energy System to Enhance Efficiency, Resilience, and Long-Term Sustainability in the Oil and Gas Industry.",
    themeDesc:
      "APECX 2026 invites **undergraduates** to compete in a multi-stage Paper and Poster Competition (preliminaries to finals). Participants will develop **innovative, practical research to address modern challenges** and **drive the long-term sustainability** of Indonesia's oil and gas sector.",
    timeline: [
      {
        date: "22-31 March",
        title: "Open Registration",
      },
      {
        date: "01 April - 23 May",
        title: "Open Registration",
      },
      {
        date: "06 June",
        title: "Preliminary Abstract",
      },
      {
        date: "02-03 March",
        title: "Open Registration",
      },
      {
        date: "02-03 March",
        title: "Open Registration",
      },
    ],
    bestThing: "Innovative Solution",
    guidebook: "",
    coreTheme: "",
    subTheme: ["a", "b", "c", "d", "e"],
    rules: ["a", "b", "c"],
    abstractCriteria: [],
    requiredDocument: [],
    preliminaryPayment: [],
    faq: [
      {
        question: "Can I submit multiple papers?",
        answer:
          "No, each participant can only submit one paper for the competition.",
      },
      {
        question: "Can I submit multiple papers?",
        answer:
          "No, each participant can only submit one paper for the competition.",
      },
      {
        question: "Can I submit multiple papers?",
        answer:
          "No, each participant can only submit one paper for the competition.",
      },
      {
        question: "Can I submit multiple papers?",
        answer:
          "No, each participant can only submit one paper for the competition.",
      },
      {
        question: "Can I submit multiple papers?",
        answer:
          "No, each participant can only submit one paper for the competition.",
      },
    ],
    contactPerson: "Apa Aja ini nomernya",
    cpLink: "",
  },
  {
    slug: "bcc",
    title: "Business Case Competition",
    logo: "/logo/bcc.svg",
    theme: "",
    themeDesc: "",
    timeline: [],
    guidebook: "",
    themeGuidebook: "",
    themeBreakdown: ["a", "b", "c"],
    rules: ["a", "b", "c"],
    preliminaryCriteria: [],
    finalCriteria: [],
    requiredDocument: [],
    preliminaryPayment: [],
    faq: [
      {
        question: "Can I submit multiple papers?",
        answer:
          "No, each participant can only submit one paper for the competition.",
      },
    ],
    contactPerson: "",
    cpLink: "",
  },
  {
    slug: "petrosmart",
    title: "Petrosmart Competition",
    logo: "/logo/petrosmart.svg",
    theme: "",
    themeDesc: "",
    timeline: [],
    guidebook: "",
    themeGuidebook: "",
    themeBreakdown: ["a", "b", "c"],
    rules: ["a", "b", "c"],
    abstractCriteria: [],
    preliminaryCriteria: [],
    finalCriteria: [],
    requiredDocument: [],
    preliminaryPayment: [],
    faq: [
      {
        question: "Can I submit multiple papers?",
        answer:
          "No, each participant can only submit one paper for the competition.",
      },
    ],
    contactPerson: "",
    cpLink: "",
  },
  {
    slug: "pod",
    title: "Plan of Development",
    logo: "/logo/pod.svg",
    theme: "",
    themeDesc: "",
    timeline: [],
    guidebook: "",
    themeGuidebook: "",
    themeBreakdown: ["a", "b", "c"],
    rules: ["a", "b", "c"],
    abstractCriteria: [],
    preliminaryCriteria: [],
    finalCriteria: [],
    requiredDocument: [],
    preliminaryPayment: [],
    faq: [
      {
        question: "Can I submit multiple papers?",
        answer:
          "No, each participant can only submit one paper for the competition.",
      },
    ],
    contactPerson: "",
    cpLink: "",
  },
  {
    slug: "scml",
    title: "Supply Chain Management & Logistics",
    logo: "/logo/scml.svg",
    theme: "",
    themeDesc: "",
    timeline: [],
    guidebook: "",
    themeGuidebook: "",
    themeBreakdown: ["a", "b", "c"],
    rules: ["a", "b", "c"],
    abstractCriteria: [],
    preliminaryCriteria: [],
    finalCriteria: [],
    requiredDocument: [],
    preliminaryPayment: [],
    faq: [
      {
        question: "Can I submit multiple papers?",
        answer:
          "No, each participant can only submit one paper for the competition.",
      },
    ],
    contactPerson: "",
    cpLink: "",
  },
];
