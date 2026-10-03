import { CONFIG } from '@/data/config';

export const siteMetadata = {
  title: `${CONFIG.name} | ${CONFIG.title}`,
  description:
    'Senior AI Engineer from Mumbai working on ML and LLM systems: fine-tuning, inference, and production agents. Top 1% Amazon ML Challenge 2024. Two IEEE publications.',
  url: 'https://yuvalmehta.vercel.app',
  twitterHandle: '@Yuval728',
  keywords: [
    'Senior AI Engineer',
    'ML Engineer',
    'LLM Fine-tuning',
    'LLM Inference',
    'AI Agents',
    'LangGraph',
    'PyTorch',
    'MLOps',
    'Mumbai',
    'Yuval Mehta',
  ],
};

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: CONFIG.name,
  jobTitle: CONFIG.title,
  url: siteMetadata.url,
  email: CONFIG.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: CONFIG.location.split(',')[0].trim(),
    addressCountry: 'IN',
  },
  alumniOf: 'NMIMS Mukesh Patel School of Technology Management and Engineering',
  sameAs: [
    `https://github.com/${CONFIG.github}`,
    `https://linkedin.com/in/${CONFIG.linkedin}`,
    `https://medium.com/@${CONFIG.medium}`,
    `https://x.com/${CONFIG.x}`,
  ],
};
