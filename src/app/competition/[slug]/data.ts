export interface TimelineItem {
  date: string;
  title: string;
}

export interface CompetitionData {
  slug: string;
  title: string;
  logo: string;
  theme: string;
  themeDesc: string;
  timeline: TimelineItem[];
  bestThing?: string;
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
  },
  {
    slug: "bcc",
    title: "Business Case Competition",
    logo: "/logo/bcc.svg",
    theme: "",
    themeDesc: "",
    timeline: [],
  },
  {
    slug: "petrosmart",
    title: "Petrosmart Competition",
    logo: "/logo/petrosmart.svg",
    theme: "",
    themeDesc: "",
    timeline: [],
  },
  {
    slug: "pod",
    title: "Plan of Development",
    logo: "/logo/pod.svg",
    theme: "",
    themeDesc: "",
    timeline: [],
  },
  {
    slug: "scml",
    title: "Supply Chain Management & Logistics",
    logo: "/logo/scml.svg",
    theme: "",
    themeDesc: "",
    timeline: [],
  },
];
