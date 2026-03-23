export interface TimelineItem {
  date: string;
  title: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AssessmentCriteriaGroup {
  title: string;
  items: string[];
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
  assessmentCriteriaGroups?: AssessmentCriteriaGroup[];
  assessmentCriteriaNote?: string;
  abstractCriteria?: string[];
  fullPaperCriteria?: string[];
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
        title: "Open Registration (Early Bird)",
      },
      {
        date: "01 April - 23 May",
        title: "Open Registration (Normal)",
      },
      {
        date: "06 June",
        title: "Preliminary Abstract Submission",
      },
      {
        date: "20 June",
        title: "Semifinalist Announcement",
      },
      {
        date: "22 July",
        title: "Full Paper Submission",
      },
      {
        date: "20 August",
        title: "Finalist Announcement",
      },
      {
        date: "03 September",
        title: "Final Stage Submission",
      },
      {
        date: "06 September",
        title: "Technical Meeting",
      },
      {
        date: "12 September",
        title: "Competition Day",
      },
      {
        date: "12 September",
        title: "Awarding Night",
      },
    ],
    bestThing: "Best Poster",
    guidebook:
      "https://drive.google.com/file/d/17Rt_st1M003eUhDhyIDNAxFa9hlPEHdC/view?usp=sharing",
    coreTheme:
      "**Strategic Optimization of Integrated Energy System to Enhance Efficiency, Resilience, and Long-Term Sustainability in the Oil and Gas Industry** -  Maximizing efficiency, resilience, and sustainability across the oil and gas value chain.",
    subTheme: [
      "Smart Energy System Optimization through Digital Technologies for Emission Reduction in the Oil and Gas Sector",
      "Integration of Renewable Energy Technologies  for Sustainability of the Oil and Gas Sector.",
      "Optimization of Secondary Resource Utilization in Integrated Oil and Gas Facilities",
      "Low-Carbon Transition Pathways in Upstream and Downstream Oil and Gas",
      "Driving Long-Term Sustainability through Circular Economy Implementation in Oil and Gas.",
    ],
    rules: [
      "Open to all undergraduate students in the Asia Pacific.",
      "Teams of 2–3 students from the same university (cross-major allowed).",
      "Submissions must be anonymous (no university names/logos allowed in the essay).",
      "Work must be unpublished and original; all entries will be screened via Turnitin.",
      "All submissions (Abstract, Paper, Poster, Pitch) must be in English.",
      "Team captain must register at apecx2026.com and submit via Google Classroom.",
      "Only the top 2 teams per university can advance to the Final Stage.",
    ],
    abstractCriteria: [
      "Technical Quality: 65%",
      "Relevance to Theme: 25%",
      "English & Formatting: 10%",
    ],
    fullPaperCriteria: [
      "Innovation & Solutions: 30%",
      "Clarity & Relevance: 30%",
      "Methodology & Data Analysis: 30%",
      "Formatting & Citations: 10%",
    ],
    requiredDocument: [
      "Student ID Card or an active enrollment certificate for each participant.",
      "Proof of following the Instagram account @apecx2026.",
      "Proof of posting the official twibbon.",
      "Proof of sharing the post on instagram story",
      "Proof of sharing the instagram post to 3 Whatsapp Group",
    ],
    preliminaryPayment: [
      "Early Bird: IDR 50,000 / USD 4 per team.",
      "Normal: IDR 75,000 / USD 5 per team.",
      "Bank Transfer: BNI 1868424437 (A.N. Frieti Josefa Purba).",
    ],
    faq: [
      {
        question: "What language should be used for the paper and poster?",
        answer:
          "All submissions, including the research paper and poster, must be written in English.",
      },
      {
        question: "Who can participate in the Paper and Poster Competition?",
        answer:
          "The competition is open to undergraduate students from universities in Indonesia and abroad who are actively enrolled during the competition period.",
      },
      {
        question: "Are the submitted papers required to be original?",
        answer:
          "Yes. All submissions must be original works and must not have been previously published or submitted to other competitions.",
      },
      {
        question: "Is there a registration fee?",
        answer:
          "Yes, please refer to the specific competition guidebook for detailed information regarding the pricing.",
      },
      {
        question: "Can team members be replaced after registration?",
        answer:
          "No, team members cannot be replaced after registration. Please make sure that all participants are fully committed and willing to take part in the competition until its completion.",
      },
    ],
    contactPerson: "Nindhy (+62 858 5343 1866)",
    cpLink: "https://wa.me/6285853431866",
  },
  {
    slug: "bcc",
    title: "Business Case Competition",
    logo: "/logo/bcc.svg",
    theme: "Beyond Energy: Redefining Systems for Long-Term Value Creation.",
    themeDesc:
      "APECX 2026 invites **undergraduates** to compete in a two-stage Business Case Competition (preliminaries to finals). Participants will **develop strategic, sustainable solutions to redefine energy systems** and **drive long-term value creation** within the global energy landscape.",
    timeline: [
      {
        date: "22-31 March",
        title: "Open Registration (Early Bird)",
      },
      {
        date: "01 April - 23 May",
        title: "Open Registration (Normal)",
      },
      {
        date: "24 May",
        title: "Case Release for Preliminary Round",
      },
      {
        date: "26 June",
        title: "Preliminary Abstract Submission",
      },
      {
        date: "20 July",
        title: "Finalist Announcement",
      },
      {
        date: "24 July",
        title: "Final Case Distribution",
      },
      {
        date: "31 August",
        title: "Final Report Submission",
      },
      {
        date: "06 September",
        title: "Technical Meeting",
      },
      {
        date: "12 September",
        title: "Competition Day",
      },
      {
        date: "12 September",
        title: "Awarding Night",
      },
    ],
    guidebook:
      "https://drive.google.com/file/d/19-wg3G6fYPtB6UzsaNxEKVV7qKgToG5M/view?usp=sharing",
    themeGuidebook:
      "A challenge to move past conventional energy models and design integrated, sustainable business strategies that balance economic growth with environmental and social impact.",
    themeBreakdown: [
      "Rethinking how businesses operate by integrating digital innovation, circular models, and resilient organizational structures.",
      "Shifting focus from short-term profit to enduring competitive advantages through responsible governance and resource management.",
      "Using data-driven insights and innovative business models to solve real-world challenges in a landscape shaped by climate and tech disruption.",
      "Translating analytical thinking into scalable, practical recommendations that prioritize resilience in a complex global economy.",
    ],
    rules: [
      "Open to all undergraduate students in the Asia Pacific.",
      "Max 3 members from the same university (cross-major allowed).",
      "Preliminary stage is Online; Final stage is Offline at Universitas Gadjah Mada.",
      "Only the top 2 teams per university can advance to the Finals.",
      "One document per team, strictly in English, with no plagiarism allowed.",
      "Team members cannot be replaced once registered. Judges’ decisions are final.",
    ],
    preliminaryCriteria: [
      "Content & Technical (90%): Completeness, methodology, novelty, and impact.",
      "Formatting (10%): Systematic technical writing.",
    ],
    finalCriteria: [
      "Final Report (50%): Innovation, feasibility, and data analysis.",
      "Pitch Deck (30%): Logical structure and visual design.",
      "Presentation (20%): Speech fluency and Q&A performance.",
    ],
    requiredDocument: [
      "Student ID Card or an active enrollment certificate for each participant.",
      "Proof of following the Instagram account @apecx2026.",
      "Proof of posting the official twibbon.",
      "Proof of sharing the post on instagram story",
      "Proof of sharing the instagram post to 3 Whatsapp Group",
    ],
    preliminaryPayment: [
      "Early Bird: IDR 100,000 / USD 6 per team.",
      "Normal: IDR 150,000 / USD 9 per team.",
      "Bank Transfer: BNI 1868424437 (A.N. Frieti Josefa Purba).",
    ],
    faq: [
      {
        question: "Who can participate in the Business Case Competition?",
        answer:
          "The competition is open to undergraduate students from all majors who are interested in solving business and industry related challenges",
      },
      {
        question: "What will participants do in this competition?",
        answer:
          "Participants will analyze real-world business cases, develop strategic solutions, and present their recommendations to a panel of judges.",
      },
      {
        question: "Will participants receive the case beforehand?",
        answer:
          "Yes, participants will receive the case in advance and be given a designated period to thoroughly analyze the problem and develop a well-structured strategy.",
      },
      {
        question: "Is there a registration fee?",
        answer:
          "Yes, please refer to the specific competition guidebook for detailed information regarding the pricing.",
      },
      {
        question: "Can team members be replaced after registration?",
        answer:
          "No, team members cannot be replaced after registration. Please make sure that all participants are fully committed and willing to take part in the competition until its completion.",
      },
    ],
    contactPerson: "Tama (+62 895 0426 9819)",
    cpLink: "https://wa.me/6289504269819",
  },
  {
    slug: "petrosmart",
    title: "Petrosmart Competition",
    logo: "/logo/petrosmart.svg",
    theme: "Knowledge Beyond Limits: Shifting Perspectives, Mastering Systems",
    themeDesc:
      "APECX 2026 invites **undergraduates** to compete in the Petrosmart Competition, a high-intensity quiz designed to test mastery of the oil and gas industry. Participants will **sharpen their critical thinking and problem-solving skills** to navigate complex energy systems and shift perspectives on modern industry challenges.",
    timeline: [
      {
        date: "22-31 March",
        title: "Open Registration (Early Bird)",
      },
      {
        date: "01 April - 23 May",
        title: "Open Registration (Normal)",
      },
      {
        date: "27 June",
        title: "Online Grading Phase",
      },
      {
        date: "02 July",
        title: "Grading and Bracket Announcement",
      },
      {
        date: "18 July",
        title: "Technical Meeting (Online Preleminary Round)",
      },
      {
        date: "25 July",
        title: "Online Preliminary Round",
      },
      {
        date: "01 August",
        title: "Semifinalist Announcement",
      },
      {
        date: "06 September",
        title: "Technical Meeting",
      },
      {
        date: "12 September",
        title: "Competition Day",
      },
      {
        date: "12 September",
        title: "Awarding Night",
      },
    ],
    guidebook:
      "https://drive.google.com/file/d/1m0IHAA04mTPSpWDYja8W6GOCdlXbBFA1/view?usp=sharing",
    themeGuidebook:
      "A high-stakes intellectual challenge designed to test comprehensive petroleum knowledge, shifting from basic theory to complex, multi-perspective problem solving.",
    themeBreakdown: [
      "Moving beyond textbooks to demonstrate a deep, integrated understanding of global petroleum systems and operational challenges.",
      "Assessing the ability to think critically and solve both technical and non-technical industry issues under pressure.",
      "Cultivating innovative professionals equipped to handle the increasing complexity of the modern oil and gas landscape.",
      "Encouraging participants to approach energy problems from various academic and industrial viewpoints.",
    ],
    rules: [
      "Open to all undergraduate students in the Asia Pacific.",
      "Exactly 3 members from the same university (cross-major allowed).",
      "A three-stage challenge: Online Preliminary, followed by Offline Semifinals and Finals at Universitas Gadjah Mada.",
      "Unlimited teams per university are permitted for the Preliminary round.",
      "No member replacements after registration. Strict anti-cheating policy; judges' decisions are final.",
      "All official updates and links will be sent directly to the Team Leader’s email.",
    ],
    assessmentCriteriaGroups: [
      {
        title: "Preliminary: Online Grading Phase",
        items: [
          "+5 for a correct answer.",
          "-3 for an incorrect answer.",
          "-2 for an unanswered question.",
        ],
      },
      {
        title: "Preliminary: Toss-Up Phase",
        items: [
          "+10 for buzzing in and answering correctly.",
          "-3 for buzzing in and answering incorrectly.",
          "0 if no one buzzes in.",
        ],
      },
    ],
    assessmentCriteriaNote:
      "Criteria for the Semifinal and Final stages will be announced later.",
    requiredDocument: [
      "Student ID Card or an active enrollment certificate for each participant.",
      "Proof of following the Instagram account @apecx2026.",
      "Proof of posting the official twibbon.",
      "Proof of sharing the post on instagram story",
      "Proof of sharing the instagram post to 3 Whatsapp Group",
    ],
    preliminaryPayment: [
      "Early Bird: IDR 150,000 / USD 9 per team.",
      "Normal: IDR 175,000 / USD 11 per team.",
      "Bank Transfer: BNI 1868424437 (A.N. Frieti Josefa Purba).",
    ],
    faq: [
      {
        question: "Who can participate in the Petrosmart Competition?",
        answer:
          "The competition is open to undergraduate students from all majors who have a strong interest in the oil and gas industry.",
      },
      {
        question: "Will the competition be conducted online or offline?",
        answer:
          "The format of the competition will be announced in the official guideline and may include online preliminary rounds followed by an onsite final round.",
      },
      {
        question: "What topics will be covered in the Petrosmart Competition?",
        answer:
          "The questions will generally cover topics related to the oil and gas industry, including oil and gas terminology, basic geology concepts, petroleum engineering fundamentals, and other related subjects within the energy sector. Participants are expected to have a broad understanding of these areas.",
      },
      {
        question: "Can team members be replaced after registration?",
        answer:
          "No, team members cannot be replaced after registration. Please make sure that all participants are fully committed and willing to take part in the competition until its completion.",
      },
      {
        question: "Is there a registration fee?",
        answer:
          "Yes, please refer to the specific competition guidebook for detailed information regarding the pricing.",
      },
    ],
    contactPerson: "Stella (+62 881 3995 130)",
    cpLink: "https://wa.me/628813995130",
  },
  {
    slug: "pod",
    title: "Plan of Development",
    logo: "/logo/pod.svg",
    theme:
      "Securing the Future: Maximizing Recovery from Mature Field  through Advanced Reservoir Technologies",
    themeDesc:
      "APECX 2026 invites **undergraduates** to compete in a Plan of Development Competition focused on maximizing oil and gas recovery. Participants will **develop comprehensive field strategies to optimize reservoir performance** and **propose practical, innovative solutions** for the long-term energy security of the upstream sector.",
    timeline: [
      {
        date: "22-31 March",
        title: "Open Registration (Early Bird)",
      },
      {
        date: "01 April - 23 May",
        title: "Open Registration (Normal)",
      },
      {
        date: "26 June",
        title: "Preliminary Stage Case Submission",
      },
      {
        date: "20 July",
        title: "Finalist Announcement",
      },
      {
        date: "24 July",
        title: "Final Case Distribution",
      },
      {
        date: "31 August",
        title: "Final Report Submission",
      },
      {
        date: "06 September",
        title: "Technical Meeting",
      },
      {
        date: "12 September",
        title: "Competition Day",
      },
      {
        date: "12 September",
        title: "Awarding Night",
      },
    ],
    guidebook:
      "https://drive.google.com/file/d/1RTgIoJ_-vQxCn9MmlppnyJkkz3LiZdTq/view?usp=sharing",
    themeGuidebook:
      "A technical challenge to revitalize aging reservoirs and strengthen energy security through advanced optimization, strategic innovation, and responsible resource management.",
    themeBreakdown: [
      "Shifting focus from new discoveries to unlocking the significant unrecovered volumes remaining in aging hydrocarbon fields.",
      "Developing robust strategies to solve geological complexity and reservoir heterogeneity that traditional methods cannot reach.",
      "Utilizing cutting-edge technical and economic solutions to sustain production levels and prevent premature field abandonment.",
      "Balancing productivity with efficiency to ensure long-term energy supply, stable economic contributions, and industrial growth.",
    ],
    rules: [
      "Open to all undergraduate students in the Asia Pacific.",
      "Large teams of 4–5 members from the same university (cross-major allowed).",
      "Preliminary stage is Online; Final stage is Offline at Universitas Gadjah Mada.",
      "Only the top 2 teams per university can advance to the Final Stage.",
      "One abstract per team, strictly in English, via the official Google Classroom.",
      "No member replacements after registration. All entries become property of APECX 2026.",
    ],
    preliminaryCriteria: [
      "Content (90%): Completeness, methodology, novelty, and impact.",
      "Formatting (10%): Systematic technical writing.",
    ],
    finalCriteria: [
      "Final Report (50%): Technical analysis (Geology, Reservoir, Drilling, Production) and Commercial/HSE plans.",
      "Presentation (20%): Clarity of analysis, structure, and professional delivery.",
      "Q&A Session (20%): Accuracy, logic of arguments, and team coordination.",
      "Pitch Deck (10%): Content clarity, logical flow, and visual design.",
    ],
    requiredDocument: [
      "Student ID Card or an active enrollment certificate for each participant.",
      "Proof of following the Instagram account @apecx2026.",
      "Proof of posting the official twibbon.",
      "Proof of sharing the post on instagram story",
      "Proof of sharing the instagram post to 3 Whatsapp Group",
    ],
    preliminaryPayment: [
      "Early Bird: IDR 100,000 / USD 6 per team.",
      "Normal: IDR 150,000 / USD 9 per team.",
      "Bank Transfer: BNI 1868424437 (A.N. Frieti Josefa Purba).",
    ],
    faq: [
      {
        question: "What is the Plan of Development Competition?",
        answer:
          "This competition challenges participants to design a development strategy for an oil and gas field based on technical and economic considerations.",
      },
      {
        question: "Who can participate in the Plan of Development Competition?",
        answer:
          "The competition is open to undergraduate students from all majors who have a strong interest in the oil and gas industry, particularly in field development planning and reservoir management.",
      },
      {
        question: "Is there a registration fee?",
        answer:
          "Yes, please refer to the specific competition guidebook for detailed information regarding the pricing.",
      },
      {
        question: "Can team members be replaced after registration?",
        answer:
          "No, team members cannot be replaced after registration. Please make sure that all participants are fully committed and willing to take part in the competition until its completion.",
      },
      {
        question: "How many members are allowed in one team?",
        answer: "Each team consists of four to five members.",
      },
    ],
    contactPerson: "Lutvi (+62 821 3534 6308)",
    cpLink: "https://wa.me/6282135346308",
  },
  {
    slug: "scml",
    title: "Supply Chain Management & Logistics",
    logo: "/logo/scml.svg",
    theme:
      "Redefining Logistics Systems: Advancing the Green Transition and Building Net-Zero Emission, Resilient Supply Chains",
    themeDesc:
      "APECX 2026 invites **undergraduates** to compete in the Supply Chain and Management Logistics Competition focused on redefining resilient and net-zero systems. Participants will develop **innovative, data-driven strategies to advance the green transition** and **drive the long-term sustainability** of the logistics sector.",
    timeline: [
      {
        date: "22-31 March",
        title: "Open Registration (Early Bird)",
      },
      {
        date: "01 April - 23 May",
        title: "Open Registration (Normal)",
      },
      {
        date: "24 May",
        title: "Case Release for Preliminary Round",
      },
      {
        date: "26 June",
        title: "Preliminary Abstract Submission",
      },
      {
        date: "20 July",
        title: "Finalist Announcement",
      },
      {
        date: "24 July",
        title: "Final Case Distribution",
      },
      {
        date: "31 August",
        title: "Final Report Submission",
      },
      {
        date: "06 September",
        title: "Technical Meeting",
      },
      {
        date: "12 September",
        title: "Competition Day",
      },
      {
        date: "12 September",
        title: "Awarding Night",
      },
    ],
    guidebook:
      "https://drive.google.com/file/d/1JJuqL2byKkqew1m2MqjJc5p_JWzwNJkR/view?usp=sharing",
    themeGuidebook:
      "A strategic challenge to transform conventional logistics into environmentally responsible, net-zero networks that remain adaptive and resilient against global disruptions.",
    themeBreakdown: [
      "Implementing sustainable practices across procurement, warehousing, and distribution to achieve measurable net-zero goals.",
      "Leveraging fleet electrification, route optimization, and digital visibility to reduce the sector's 8% contribution to global emissions.",
      "Building logistics networks that use data-driven decision-making to maintain continuity despite geopolitical and climate-related risks.",
      "Addressing unique archipelagic challenges like high logistics costs and infrastructure disparities with innovative, scalable solutions.",
    ],
    rules: [
      "No university names or logos allowed in the essay to ensure unbiased grading.",
      "No member replacements are permitted once the registration is submitted.",
      "Preliminary stage is Online; Finalists will compete Offline at Universitas Gadjah Mada.",
      "Submissions must not include racist, pornographic, or inappropriate content.",
      "A maximum of 2 teams per university can advance to the Final Stage.",
      "All entries must be in English, original, and become APECX property.",
      "Judges' decisions are final; late or incorrect formatting leads to point deductions.",
    ],
    assessmentCriteriaGroups: [
      {
        title: "Preliminary Session (100%)",
        items: [
          "Completeness & Clarity: 35%",
          "Novelty & Impact: 30%",
          "Methodology: 25%",
          "Formatting & Technical Writing: 10%",
        ],
      },
      {
        title: "Penalty & Deduction Policy",
        items: [
          "Late Submission: -0.5 points per minute. (Rejected after 3 hours).",
          "Plagiarism (25%-30% Similarity): -10 points.",
          "Plagiarism (>30% Similarity): Immediate Disqualification.",
        ],
      },
    ],
    finalCriteria: [],
    requiredDocument: [
      "Student ID Card or an active enrollment certificate for each participant.",
      "Proof of following the Instagram account @apecx2026.",
      "Proof of posting the official twibbon.",
      "Proof of sharing the post on instagram story",
      "Proof of sharing the instagram post to 3 Whatsapp Group",
    ],
    preliminaryPayment: [
      "Early Bird: IDR 100,000 / USD 6 per team.",
      "Normal: IDR 150,000 / USD 9 per team.",
      "Bank Transfer: BNI 1868424437 (A.N. Frieti Josefa Purba).",
    ],
    faq: [
      {
        question: "Who can participate in this competition?",
        answer:
          "The competition is open to undergraduate students from all academic backgrounds with an interest in supply chain and logistics management.",
      },
      {
        question: "What is the focus of the competition case?",
        answer:
          "Participants will analyze a case related to supply chain and logistics systems and propose strategic solutions focusing on efficiency, sustainability, and resilience.",
      },
      {
        question: "How many members are allowed in one team?",
        answer: "Each team consists of two to three members.",
      },
      {
        question: "Is there a registration fee?",
        answer:
          "Yes, please refer to the specific competition guidebook for detailed information regarding the pricing.",
      },
      {
        question: "Can team members be replaced after registration?",
        answer:
          "No, team members cannot be replaced after registration. Please make sure that all participants are fully committed and willing to take part in the competition until its completion.",
      },
    ],
    contactPerson: "Taraka +62 812 3386 5671)",
    cpLink: "https://wa.me/6281233865671",
  },
];
