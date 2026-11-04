export const SERVICES_DATA = [
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    icon: 'Code2',
    description: 'Custom software architectures, enterprise platforms, scalable backend services, and mission-critical API integrations.',
    capabilities: ['Custom Enterprise Software', 'ERP & CRM Systems', 'API & Microservices', 'Database Architecture'],
  },
  {
    id: 'web-app-development',
    title: 'Web & App Development',
    icon: 'Smartphone',
    description: 'High-performance web applications, native & cross-platform mobile apps, customer portals, and e-commerce platforms.',
    capabilities: ['Next.js / React Web Apps', 'iOS & Android (Flutter)', 'Admin Dashboards', 'Customer Portals'],
  },
  {
    id: 'ai-and-automation',
    title: 'AI & Automation',
    icon: 'Sparkles',
    isHero: true,
    description: 'Autonomous AI agents, intelligent workflow automation, generative AI pipelines, and predictive business intelligence.',
    capabilities: ['Autonomous AI Agents', 'Workflow Automation', 'Custom LLM Pipelines', 'Data Intelligence'],
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    icon: 'Cloud',
    description: 'Secure, high-availability AWS and GCP cloud architectures, automated DevOps CI/CD pipelines, and serverless scaling.',
    capabilities: ['AWS & GCP Cloud Architecture', 'DevOps & CI/CD', 'Docker & Kubernetes', 'System Security & SRE'],
  },
  {
    id: 'ui-ux-creative',
    title: 'UI/UX & Creative',
    icon: 'PenTool',
    description: 'World-class human-centered design systems, interactive 3D visualizations, mobile design, and brand identity.',
    capabilities: ['Design Systems & Figma', 'Product & Mobile UI/UX', '3D Visualisation & Motion', 'Brand Identity'],
  },
  {
    id: 'digital-growth',
    title: 'Digital Growth',
    icon: 'TrendingUp',
    description: 'Data-driven growth strategies, performance marketing, product positioning, and conversion rate optimization.',
    capabilities: ['Performance Marketing', 'Conversion Optimization', 'Product Positioning', 'Analytics & Insights'],
  },
];

export const PRODUCTS_DATA = [
  {
    id: 'yesdhobi',
    name: 'YesDhobi',
    category: 'Laundry & Garment Care Platform',
    tagline: 'End-to-End On-Demand Laundry & Garment Care Ecosystem',
    description: 'Customer mobile app, pickup scheduling, automated billing, route-optimized driver logistics, and garment tracking at scale.',
    icon: 'Shirt',
    metrics: { users: '45K+', orders: '1.2M+' },
  },
  {
    id: 'theka',
    name: 'Theka',
    category: 'POS & Retail Management',
    tagline: 'High-Velocity Multi-Store Retail & Inventory Engine',
    description: 'Real-time omnichannel point of sale, barcode inventory tracking, vendor replenishment, and unified sales analytics.',
    icon: 'BarChart3',
    metrics: { uptime: '99.98%', stores: '120+' },
  },
  {
    id: 'dhobicare',
    name: 'Dhobicare',
    category: 'Operations & Vendor System',
    tagline: 'Operational Command Center for Vendor Networks',
    description: 'Centralized plant operations, quality assurance staging, vendor compliance monitoring, and automated settlement payouts.',
    icon: 'Layers',
    metrics: { facilities: '18+', volume: '30K/day' },
  },
  {
    id: 'freshthreads',
    name: 'FreshThreads',
    category: 'D2C Fashion Platform',
    tagline: 'Direct-to-Consumer Digital Commerce Infrastructure',
    description: 'Headless storefront, personalized styling recommendations, dynamic checkout, and integrated warehouse fulfillment.',
    icon: 'Sparkle',
    metrics: { gmv: '₹14.8Cr', growth: '+140%' },
  },
];

export const TECH_STACK_ITEMS = [
  { name: 'React', category: 'Frontend', icon: 'Atom' },
  { name: 'Flutter', category: 'Mobile', icon: 'Smartphone' },
  { name: 'Node.js', category: 'Backend', icon: 'Server' },
  { name: 'Python', category: 'AI & Data', icon: 'Terminal' },
  { name: 'AWS', category: 'Cloud', icon: 'Cloud' },
  { name: 'Firebase', category: 'Realtime', icon: 'Flame' },
  { name: 'Docker', category: 'DevOps', icon: 'Box' },
];

export const TECH_CAPABILITY_BADGES = [
  { title: 'Cloud & DevOps', icon: 'Cloud' },
  { title: 'Full-Stack Development', icon: 'Code2' },
  { title: 'Data & Analytics', icon: 'Database' },
  { title: 'AI & Automation', icon: 'Cpu' },
  { title: 'Scalable Architecture', icon: 'Layers' },
  { title: 'Security & Reliability', icon: 'ShieldCheck' },
];

export const AI_CAPABILITIES = [
  { title: 'AI Agents', subtitle: 'Task, support & workflow automation', icon: 'Cpu' },
  { title: 'Business AI', subtitle: 'AI for operations, sales and growth', icon: 'Sparkles' },
  { title: 'Process Automation', subtitle: 'Reduce manual work and increase speed', icon: 'Layers' },
  { title: 'Integration', subtitle: 'Connect apps, data and systems', icon: 'Code2' },
  { title: 'Data Intelligence', subtitle: 'Turn data into real decisions', icon: 'BarChart2' },
  { title: 'Scalable Workflows', subtitle: 'Automate, monitor and scale seamlessly', icon: 'Zap' },
];

export const CASE_STUDIES = [
  {
    id: 'dhobicare',
    title: 'Dhobicare',
    subtitle: 'Operations & Vendor System',
    type: 'Enterprise SaaS',
    deviceType: 'tablet',
    metricSummary: '30K Orders / Day Operations',
    highlights: ['Multi-facility live routing', 'Vendor auto-payouts', 'Automated QA pipeline'],
  },
  {
    id: 'yesdhobi',
    title: 'YesDhobi',
    subtitle: 'Laundry & Garment Care Platform',
    type: 'Consumer Mobile & Logistics',
    deviceType: 'phone',
    metricSummary: '100K+ Users, 4.8★ App Store',
    highlights: ['Under 60s booking flow', 'Real-time driver tracking', 'Smart garment tagging'],
    isFeatured: true,
  },
  {
    id: 'theka',
    title: 'Theka',
    subtitle: 'POS & Retail Management',
    type: 'Retail Automation',
    deviceType: 'tablet',
    metricSummary: '₹42.8L+ Daily Processing',
    highlights: ['Offline-first sync', 'Multi-terminal billing', 'Barcode scanning under 50ms'],
  },
];

export const ENTERPRISE_METRICS = [
  { value: 10, suffix: '+', label: 'Products Built', icon: 'Layers' },
  { value: 100, suffix: 'K+', label: 'Active Users', icon: 'Users' },
  { value: 99.9, suffix: '%', label: 'Uptime', icon: 'Rocket' },
  { value: 5, suffix: 'M+', label: 'Transactions', icon: 'Zap' },
  { value: 3, suffix: '+', label: 'Industries', icon: 'Globe' },
];

export const VANTIXIO_DIFFERENCE_PILLARS = [
  { title: 'Speed & Execution', desc: 'Move from concept to impact, faster.', icon: 'Zap' },
  { title: 'Reliable & Scalable', desc: 'Built to grow with your business.', icon: 'ShieldCheck' },
  { title: 'Product-First Mindset', desc: 'Build solutions for real business outcomes.', icon: 'Rocket' },
  { title: 'End-to-End Capabilities', desc: 'From idea to a scalable product.', icon: 'Layers' },
  { title: 'Domain Expertise', desc: 'Cross-industry experience with real-world understanding.', icon: 'Users' },
  { title: 'AI-Ready Solutions', desc: 'Intelligent, automated and future-focused.', icon: 'Cpu' },
  { title: 'Long-Term Partnership', desc: 'We build, support and scale with you.', icon: 'Handshake' },
];

export const ABOUT_CARDS = [
  { title: 'Our Mission', desc: 'Turn ideas into impactful products.', icon: 'Target' },
  { title: 'Our Vision', desc: 'Build technology that improves everyday business.', icon: 'Eye' },
  { title: 'Our Values', desc: 'Innovation, ownership, quality and long-term impact.', icon: 'Diamond' },
  { title: 'Our Team', desc: 'A multidisciplinary team of builders, designers and problem solvers.', icon: 'Users' },
];

export const COLLABORATION_MODES = [
  { title: 'Discuss Your Idea', icon: 'MessageSquare', desc: 'Exploratory advisory on architecture and viability.' },
  { title: 'Plan & Design', icon: 'Layers', desc: 'Prototypes, user journeys, design systems, and tech stack.' },
  { title: 'Build & Launch', icon: 'Code2', desc: 'Agile sprints, rigorous QA, deployment, and store rollout.' },
  { title: 'Grow Together', icon: 'TrendingUp', desc: 'SRE maintenance, feature expansion, and scaling operations.' },
];

export const COLLABORATION_STEPS = [
  { step: '01', title: 'Discover', desc: 'Understand your goals' },
  { step: '02', title: 'Strategy', desc: 'Define the right solution' },
  { step: '03', title: 'Build', desc: 'Design, develop and test' },
  { step: '04', title: 'Scale', desc: 'Launch and grow together' },
];

export const FOOTER_COLUMNS = {
  explore: [
    { label: 'Work', href: '#our-work' },
    { label: 'Services', href: '#what-we-do' },
    { label: 'About', href: '#about-vantixio' },
    { label: 'Industries', href: '#what-we-build' },
    { label: 'Contact', href: '#get-in-touch' },
  ],
  services: [
    { label: 'Product Development', href: '#what-we-do' },
    { label: 'AI & Automation', href: '#ai-and-automation' },
    { label: 'UI/UX & Design', href: '#ui-ux-creative' },
    { label: 'Cloud & Infrastructure', href: '#what-we-do' },
    { label: 'Consulting', href: '#the-difference' },
  ],
  contact: {
    email: 'hello@vantixio.com',
    phone: '+91 98765 43210',
    location: 'Hyderabad, India',
  },
  social: [
    { name: 'LinkedIn', icon: 'Linkedin', href: 'https://linkedin.com' },
    { name: 'Instagram', icon: 'Instagram', href: 'https://instagram.com' },
    { name: 'YouTube', icon: 'Youtube', href: 'https://youtube.com' },
    { name: 'X (Twitter)', icon: 'Twitter', href: 'https://x.com' },
  ],
};

