export interface EventData {
  slug: string;
  title: string;
  heroDesc: string;
  logo: string;
  about: string;
  desc: Record<string, string>;
  date: string;
  cta?: string;
  location?: string;
  topNote?: string;
  bottomNote?: string;
  comingSoon: boolean;
}

export const EVENTS: EventData[] = [
  {
    slug: "social-event",
    title: "Social Event",
    heroDesc:
      "An environmental event featuring workshops and hands-on actions to drive planet preservation.",
    logo: "/logo/social-event.svg",
    about: "Preserving the Coast: A Strategic Step for Our Future",
    desc: {
      intro:
        'Mangroves are more than just trees; they are vital habitats and effective natural shields. In line with our theme, "Rooted in Culture, Growing for Nature," this program offers a unique lens on environmental stewardship through local wisdom.',
      whyItMatters:
        "Why it matters:\n• Creating shelter and food sources for coastal species.\n• Reducing greenhouse gases through nature-based solutions.\n• Bridging the gap between theory and real-world conservation.",
      closing:
        "By joining, you aren't just planting a tree, you're participating in a strategic step toward global sustainability.",
    },
    date: "25 April 2026",
    cta: "link",
    location: "TBA",
    topNote: "Social Event #1",
    bottomNote: "Registration: 20 Mar - 14 Apr 2026",
    comingSoon: true,
  },
  {
    slug: "company-visit",
    title: "Company Visit",
    heroDesc:
      "A site visit offering an inside look at the professional working environment of the energy industry.",
    logo: "/logo/company-visit.svg",
    about: "Bridging Theory and Industry Practice",
    desc: {
      overview:
        "We move beyond the classroom to witness the industrial systems driving the oil and gas sector. This isn't just a tour, it's a deep dive into the future of energy.\n• Observe safety protocols and business strategies from industry leaders.\n• Facilitating direct dialogue between students and professionals.\n• Equipping the next generation with the critical thinking needed for a dynamic career.",
    },
    date: "08 - 09 May 2026",
    location: "Committee Only",
    comingSoon: false,
  },
  {
    slug: "talkshow",
    title: "Talkshow",
    heroDesc:
      "An interactive career session where industry experts share insights into evolving job opportunities.",
    logo: "/logo/talkshow.svg",
    about: "Master the Future of\nOil & Gas",
    desc: {
      overview:
        "Connect with renowned professionals to explore the technologies and career paths shaping the global energy industry.\n• Discover the latest industry breakthroughs.\n• Learn best practices from the experts.\n• Build the roadmap for your future career.",
    },
    date: "28 August 2026",
    cta: "TBA",
    location: "To Be Announced",
    comingSoon: false,
  },
  {
    slug: "exhibition",
    title: "Exhibition",
    heroDesc:
      "An interactive showcase of competition projects and energy innovations open to the local community.",
    logo: "/logo/exhibition.svg",
    about: "",
    desc: {},
    date: "",
    cta: "",
    comingSoon: true,
  },
  {
    slug: "awarding-night",
    title: "Awarding Night",
    heroDesc:
      "The final gala and closing ceremony to honor the achievements and winners of APECX 2026.",
    logo: "/logo/awarding-night.svg",
    about: "Honoring the Journey, Celebrating the Win",
    desc: {
      opening:
        "The Awarding Night serves as the prestigious closing ceremony of APECX 2026. It is a night dedicated to those who turned perseverance into innovation and ideas into self-actualization.",
      recognition:
        "Beyond the trophies, this is a moment of shared recognition. We invite finalist, organizers, and industry leaders to join us for a formal gathering to celebrate the challenges overcome and the memories made.",
      witness:
        "Witness the manifestation of excellence as we announce this year's champions.",
      highlights:
        "What to expect:\n• Celebrate the outstanding achievements of all competition winners.\n• Network with fellow participants, industry leaders, and fellow visionaries.\n• Experience an evening of elegance, recognition, and unity.",
    },
    date: "12 September 2026",
    location: "Universitas Gadjah Mada",
    comingSoon: false,
  },
];
