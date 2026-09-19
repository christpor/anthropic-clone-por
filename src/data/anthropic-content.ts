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

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  lead: string;
  paperCount: number;
}

export interface ResearchPaper {
  id: string;
  title: string;
  date: string;
  authors: string;
  summary: string;
  category: string;
  readTime: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: 'Announcements' | 'Research' | 'Product' | 'Policy';
  excerpt: string;
  link: string;
  featured?: boolean;
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
    models: [{ name: 'Opus', link: '/news' }],
    headline: 'Introducing Opus 5',
    link: '/news',
  },
  {
    id: 'sonnet-5',
    date: 'June 30, 2026',
    category: 'Announcements',
    models: [{ name: 'Sonnet', link: '/news' }],
    headline: 'Introducing Sonnet 5',
    link: '/news',
  },
];

export const MANIFESTO_ITEMS: ManifestoItem[] = [
  {
    title: 'Claude Science: Autonomous Laboratory Discovery',
    category: 'Announcements',
    link: '/news',
  },
  {
    title: 'Core views on AI safety and frontier risks',
    category: 'Policy',
    link: '/policy',
  },
  {
    title: "Anthropic's Responsible Scaling Policy (ASL-3 Standard)",
    category: 'Alignment Science',
    link: '/policy',
  },
  {
    title: 'Anthropic Academy: Comprehensive Claude Curriculum',
    category: 'Education',
    link: '/news',
  },
  {
    title: "Anthropic's Global Economic Impact Index",
    category: 'Economic Research',
    link: '/research',
  },
  {
    title: "Claude's Constitution: Direct Constitutional AI Principles",
    category: 'Announcements',
    link: '/policy',
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

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: 'alignment',
    title: 'Alignment Science',
    description:
      'Developing mathematical frameworks and empirical techniques like Constitutional AI and Reinforcement Learning from AI Feedback to ensure models adhere to human values.',
    lead: 'Alignment Team',
    paperCount: 28,
  },
  {
    id: 'interpretability',
    title: 'Mechanistic Interpretability',
    description:
      'Reverse engineering neural networks from the inside out using dictionary learning, identifying millions of concepts and features inside transformer activations.',
    lead: 'Interpretability Team',
    paperCount: 19,
  },
  {
    id: 'frontier-red-team',
    title: 'Frontier Red Teaming',
    description:
      'Systematically probing, stress-testing, and discovering vulnerability thresholds across cyber, chemical, biological, and radiological domains.',
    lead: 'Frontier Safety Team',
    paperCount: 14,
  },
  {
    id: 'economics',
    title: 'Economic & Societal Futures',
    description:
      'Empirical macroeconomic modeling on labor substitution, software engineer productivity gains, and capital distribution in the AI exponential era.',
    lead: 'Policy & Economics Team',
    paperCount: 11,
  },
  {
    id: 'scalable-oversight',
    title: 'Scalable Oversight & Debate',
    description:
      'Architecting systems where humans can supervise models that are more knowledgeable and capable than themselves via debate and iterative breakdown.',
    lead: 'Oversight Team',
    paperCount: 16,
  },
  {
    id: 'engineering',
    title: 'Frontier Systems Engineering',
    description:
      'Building ultra-reliable, fault-tolerant cluster architectures, high-performance distributed kernels, and low-latency inference runtimes.',
    lead: 'Systems Engineering Team',
    paperCount: 22,
  },
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'scaling-dictionary-learning',
    title: 'Scaling Monosemanticity: Extracting Interpretable Features from Claude 3.5 Sonnet',
    date: 'August 14, 2026',
    authors: 'Anthropic Interpretability Team',
    summary:
      'We apply sparse autoencoders to extract tens of millions of features from the middle layers of Claude, mapping internal representations of geography, syntax, code bugs, and ethical principles.',
    category: 'Interpretability',
    readTime: '18 min read',
  },
  {
    id: 'constitutional-ai-eval',
    title: 'Constitutional AI: Harmlessness from AI Feedback with Formal Invariants',
    date: 'July 19, 2026',
    authors: 'Anthropic Alignment Group',
    summary:
      'Demonstrating zero-shot rule following and harmlessness alignment without human-in-the-loop labels for toxic output scoring, achieving Pareto-superior trade-offs between helpfulness and safety.',
    category: 'Alignment',
    readTime: '24 min read',
  },
  {
    id: 'agentic-evals-cyber',
    title: 'Evaluating Autonomous Cyber Attack and Defense Capabilities in Frontier Models',
    date: 'June 2, 2026',
    authors: 'Frontier Red Team',
    summary:
      'Comprehensive benchmark evaluations measuring autonomous vulnerability exploitation in real-world software sandboxes, establishing rigorous early-warning tripwires for ASL-3/ASL-4.',
    category: 'Frontier Safety',
    readTime: '21 min read',
  },
  {
    id: 'macroeconomic-impact-ai',
    title: 'The Macroeconomics of Frontier AI: Displacement, Acceleration, and Capital Deepening',
    date: 'May 11, 2026',
    authors: 'Economic Research Group',
    summary:
      'Long-term quantitative projection of macroeconomic effects across 45 OECD member nations, studying knowledge work automation elasticities and productivity gains.',
    category: 'Economics',
    readTime: '15 min read',
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'fable-mythos-announcement',
    title: 'Claude Fable 5.1 and Claude Mythos 5.1',
    date: 'September 1, 2026',
    category: 'Announcements',
    excerpt:
      'Introducing our most capable frontier models for complex scientific discovery, multi-day agentic programming, and autonomous synthesis.',
    link: '/claude-fable-and-mythos-5-1',
    featured: true,
  },
  {
    id: 'opus-5-launch',
    title: 'Claude Opus 5: Frontier Reasoning and World Models',
    date: 'July 24, 2026',
    category: 'Announcements',
    excerpt:
      'Setting new records on graduate-level mathematics, strategic reasoning, and cross-domain system architecture.',
    link: '/news',
  },
  {
    id: 'claude-science-launch',
    title: 'Claude Science: AI for Autonomous Wet-Lab and Biology Protocols',
    date: 'June 18, 2026',
    category: 'Product',
    excerpt:
      'Collaborating with leading biomedical institutes to deploy Claude directly into drug discovery workflows and molecular dynamics modeling.',
    link: '/news',
  },
  {
    id: 'rsp-version-3',
    title: 'Anthropic Updates Responsible Scaling Policy to Version 3',
    date: 'May 29, 2026',
    category: 'Policy',
    excerpt:
      'Detailing refined ASL-3 containment protocols, hardware safeguards, and third-party red teaming audits for next-generation frontier training runs.',
    link: '/policy',
  },
  {
    id: 'claude-academy-release',
    title: 'Anthropic Academy: Free Interactive AI Engineering Courses',
    date: 'April 15, 2026',
    category: 'Product',
    excerpt:
      'A comprehensive educational platform designed to help developers, researchers, and enterprises build high-leverage agentic systems.',
    link: '/news',
  },
  {
    id: 'interpretability-breakthrough',
    title: 'Mapping the Inner Thought Processes of Large Language Models',
    date: 'March 8, 2026',
    category: 'Research',
    excerpt:
      'Our latest mechanistic interpretability research provides an unprecedented view into how concepts are interconnected within neural networks.',
    link: '/research',
  },
];

export const FOOTER_COLUMNS = [
  {
    heading: 'Products',
    links: [
      { label: 'Claude for Web', route: 'https://claude.ai', external: true },
      { label: 'Claude Console', route: 'https://console.anthropic.com', external: true },
      { label: 'Download Desktop App', route: 'https://claude.ai/download', external: true },
      { label: 'Pricing', route: 'https://claude.ai/pricing', external: true },
    ],
  },
  {
    heading: 'Models',
    links: [
      { label: 'Claude Fable 5.1', route: '/claude-fable-and-mythos-5-1' },
      { label: 'Claude Mythos 5.1', route: '/claude-fable-and-mythos-5-1' },
      { label: 'Claude Opus 5', route: '/news' },
      { label: 'Claude Sonnet 5', route: '/news' },
    ],
  },
  {
    heading: 'Research',
    links: [
      { label: 'Overview', route: '/research' },
      { label: 'Alignment Science', route: '/research' },
      { label: 'Interpretability', route: '/research' },
      { label: 'Frontier Red Team', route: '/research' },
      { label: 'Economics', route: '/research' },
    ],
  },
  {
    heading: 'Policy & Safety',
    links: [
      { label: 'Responsible Scaling Policy', route: '/policy' },
      { label: "Claude's Constitution", route: '/policy' },
      { label: 'AI Exponential Policy', route: '/policy' },
      { label: 'Transparency Reports', route: '/policy' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Anthropic', route: '/company' },
      { label: 'Newsroom', route: '/news' },
      { label: 'Public Benefit Charter', route: '/company' },
      { label: 'Careers', route: '/company' },
    ],
  },
];
