export const siteConfig = {
  // Site details
  name: 'Liquid Insights',
  description: 'Your gateway to AI Tools, Conferences, and Industry Insights',
  url: 'https://sinisterj12.github.io',
  baseUrl: '/LiquidInsightsAITest',
  
  // Navigation
  nav: [
    { name: 'AI Tools', href: '/ai-tools' },
    { name: 'Conferences', href: '/conferences' },
    { name: 'Insights', href: '/insights' },
    { name: 'Blog', href: '/blog' },
  ],
  
  // Social links
  social: {
    github: 'https://github.com/sinisterj12',
    twitter: '#',
    linkedin: '#',
  },
  
  // Theme
  theme: {
    default: 'light',
    // Add more theme options here
  },
  
  // SEO
  seo: {
    title: 'Liquid Insights - AI Tools & Conferences',
    description: 'Discover the latest AI tools, upcoming conferences, and industry insights.',
    keywords: ['AI', 'artificial intelligence', 'conferences', 'tech news', 'insights'],
  },
} as const;
