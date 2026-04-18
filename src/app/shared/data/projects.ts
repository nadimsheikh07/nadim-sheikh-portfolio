import { Project } from '../models/project';

export const PROJECTS: Project[] = [
  {
    title: 'PincodeKart and PincodeDak',
    period: 'Jan 2026 - Present',
    company: 'PincodeKart',
    description:
      'High-performance e-commerce delivery focused on modular services, micro-frontends, real-time integrations, and systems designed for concurrency at scale.',
    outcomes: [
      'Built with microservices and micro-frontend architecture',
      'Supported real-time data integration and resilient scaling',
      'Maintained elite code quality for long-term product evolution',
    ],
    tech: ['Node.js', 'Microservices', 'Micro-frontends', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'ATP Forms',
    period: 'Aug 2024 - Dec 2025',
    company: 'CIGI Technologies Pvt Ltd',
    description:
      'Tournament management platform with live updates, strong data collation, and a high-availability architecture built for major sporting events.',
    outcomes: [
      'Delivered responsive real-time UI with Next.js and React',
      'Used microservices for modular scaling under event traffic',
      'Optimized performance with PostgreSQL, MongoDB, and Redis',
    ],
    tech: ['Next.js', 'React', 'Node.js', 'Laravel', 'Redis'],
  },
  {
    title: 'Lea Medicare',
    period: 'Jan 2025 - Dec 2025',
    company: 'CIGI Technologies Pvt Ltd',
    description:
      'Smart EMR product for Africa covering appointments, doctor consultations, medical records, and reporting with a performance-focused backend.',
    outcomes: [
      'Built healthcare workflows with clear, practical user journeys',
      'Used scalable microservices for medical data handling',
      'Balanced frontend clarity with backend reliability',
    ],
    tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'PowerFlex',
    period: 'Oct 2024 - Jul 2025',
    company: 'CIGI Technologies Pvt Ltd',
    description:
      'Solar recommendation platform that helps users choose inverter and battery solutions through accurate product logic and cost breakdowns.',
    outcomes: [
      'Translated complex configuration into readable UI flows',
      'Used Django-backed services for business logic and calculations',
      'Kept the experience responsive across product discovery steps',
    ],
    tech: ['Next.js', 'React', 'Django', 'PostgreSQL', 'Redis'],
  },
];
