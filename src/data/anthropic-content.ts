export interface ReleaseCard {
  id: string;
  date: string;
  category: string;
  models: { name: string; link: string }[];
  headline: string;
  link: string;
}

export interface ManifestoItem {
  title: string;
  category: string;
  link: string;
}

export interface BenchmarkRow {
  name: string;
  benchmarkSub: string;
  fable51: string;
  fable51Note?: string;
  fable5: string;
  opus5: string;
  gpt56Sol: string;
}

export const RELEASES: ReleaseCard[] = [
  {
    id: 'fable-mythos-5-1',
    date: 'September 1, 2026',
    category: 'Announcements',
    models: [
      { name: 'Fable', link: '/claude-fable-and-mythos-5-1' },
      { name: 'Mythos', link: '/claude-fable-and-mythos-5-1' },
    ],
    headline: 'Introducing Fable 5.1 and Mythos 5.1',
    link: '/claude-fable-and-mythos-5-1',
  },
  {
    id: 'opus-5',
    date: 'July 24, 2026',
    category: 'Announcements',
    models: [{ name: 'Opus', link: '#' }],
    headline: 'Introducing Opus 5',
    link: '#',
  },
  {
    id: 'sonnet-5',
    date: 'June 30, 2026',
    category: 'Announcements',
    models: [{ name: 'Sonnet', link: '#' }],
    headline: 'Introducing Sonnet 5',
    link: '#',
  },
];

export const MANIFESTO_ITEMS: ManifestoItem[] = [
  {
    title: 'Claude Science',
    category: 'Announcements',
    link: '#',
  },
  {
    title: 'Core views on AI safety',
    category: 'Announcements',
    link: '#',
  },
  {
    title: "Anthropic's Responsible Scaling Policy",
    category: 'Alignment Science',
    link: '#',
  },
  {
    title: 'Anthropic Academy: Build and Learn with Claude',
    category: 'Education',
    link: '#',
  },
  {
    title: "Anthropic's Economic Index",
    category: 'Economic Research',
    link: '#',
  },
  {
    title: "Claude's Constitution",
    category: 'Announcements',
    link: '#',
  },
];

export const BENCHMARKS: BenchmarkRow[] = [
  {
    name: 'Agentic scientific research',
    benchmarkSub: 'Terminal-Bench-Science 0.1 [1]',
    fable51: '52.6%',
    fable5: '24.7%',
    opus5: '29.0%',
    gpt56Sol: '22.4%',
  },
  {
    name: 'Agentic coding',
    benchmarkSub: 'Terminal-Bench 4.0',
    fable51: '55.8%',
    fable51Note: '60.9% (Mythos 5.1)',
    fable5: '42.0%',
    opus5: '52.3%',
    gpt56Sol: '37.3%',
  },
  {
    name: 'Knowledge work',
    benchmarkSub: 'GDPval-AA v2',
    fable51: '1853',
    fable5: '1723',
    opus5: '1824',
    gpt56Sol: '1711',
  },
  {
    name: 'Computer use',
    benchmarkSub: 'OSWorld benchmark v2',
    fable51: '77.9%',
    fable5: '72.9%',
    opus5: '75.4%',
    gpt56Sol: '—',
  },
];

export const FOOTER_COLUMNS = [
  {
    heading: 'Products',
    links: [
      'Claude Cowork',
      '@Claude',
      'Claude Design',
      'Claude Science',
      'Claude Security',
      'Claude in Chrome',
      'Claude for Microsoft 365',
      'Skills',
      'Download app',
      'Pricing',
      'Log in to Claude',
    ],
  },
  {
    heading: 'Models',
    links: ['Mythos', 'Fable', 'Opus', 'Sonnet', 'Haiku'],
  },
  {
    heading: 'Claude Platform',
    links: [
      'Overview',
      'Developer docs',
      'Pricing',
      'Ecosystem',
      'Marketplace',
    ],
  },
  {
    heading: 'Solutions',
    links: [
      'Commerce',
      'Customer support',
      'Cybersecurity',
      'Enterprise',
      'Financial services',
      'Government',
      'Healthcare',
      'Higher education',
      'K-12 teachers',
      'Legal',
      'Life sciences',
      'Nonprofits',
      'Sales',
      'Small business',
    ],
  },
  {
    heading: 'Resources',
    links: [
      'Connectors',
      'Courses',
      'Customer stories',
      'Engineering at Anthropic',
      'Events',
      'Plugins',
      'Powered by Claude',
      'Service partners',
      'Tutorials',
      'Use cases',
    ],
  },
  {
    heading: 'Programs',
    links: ['Startups', 'Scientists'],
  },
  {
    heading: 'Company',
    links: [
      'Policy',
      'Economic Futures',
      'Research',
      'News',
      "Claude's Constitution",
      'Claude Corps',
      'Keep thinking',
      'Policy on the AI Exponential',
      'Responsible Scaling Policy',
      'Security and compliance',
      'Transparency',
    ],
  },
  {
    heading: 'Terms and policies',
    links: [
      'Privacy choices',
      'Privacy policy',
      'Consumer health data privacy policy',
      'Responsible disclosure policy',
      'Terms of service: Commercial',
      'Terms of service: Consumer',
      'Terms of Service: US K-12',
      'Data Processing Agreement: US K-12',
    ],
  },
];
