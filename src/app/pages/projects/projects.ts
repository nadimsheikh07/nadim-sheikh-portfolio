import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';

interface FeaturedProject {
  title: string;
  period: string;
  company: string;
  summary: string;
  outcomes: string[];
  stack: string[];
}

interface ProjectCluster {
  title: string;
  description: string;
  items: string[];
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, CardModule, TagModule, ChipModule, ButtonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly featuredProjects: FeaturedProject[] = [
    {
      title: 'PincodeKart and PincodeDak',
      period: 'Jan 2026 - Present',
      company: 'PincodeKart',
      summary:
        'High-performance e-commerce delivery focused on modular services, micro-frontends, real-time integrations, and systems designed for concurrency at scale.',
      outcomes: [
        'Built with microservices and micro-frontend architecture',
        'Supported real-time data integration and resilient scaling',
        'Maintained elite code quality for long-term product evolution',
      ],
      stack: ['Node.js', 'Microservices', 'Micro-frontends', 'MongoDB', 'PostgreSQL'],
    },
    {
      title: 'ATP Forms',
      period: 'Aug 2024 - Dec 2025',
      company: 'CIGI Technologies Pvt Ltd',
      summary:
        'Tournament management platform with live updates, strong data collation, and a high-availability architecture built for major sporting events.',
      outcomes: [
        'Delivered responsive real-time UI with Next.js and React',
        'Used microservices for modular scaling under event traffic',
        'Optimized performance with PostgreSQL, MongoDB, and Redis',
      ],
      stack: ['Next.js', 'React', 'Node.js', 'Laravel', 'Redis'],
    },
    {
      title: 'Lea Medicare',
      period: 'Jan 2025 - Dec 2025',
      company: 'CIGI Technologies Pvt Ltd',
      summary:
        'Smart EMR product for Africa covering appointments, doctor consultations, medical records, and reporting with a performance-focused backend.',
      outcomes: [
        'Built healthcare workflows with clear, practical user journeys',
        'Used scalable microservices for medical data handling',
        'Balanced frontend clarity with backend reliability',
      ],
      stack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'PowerFlex',
      period: 'Oct 2024 - Jul 2025',
      company: 'CIGI Technologies Pvt Ltd',
      summary:
        'Solar recommendation platform that helps users choose inverter and battery solutions through accurate product logic and cost breakdowns.',
      outcomes: [
        'Translated complex configuration into readable UI flows',
        'Used Django-backed services for business logic and calculations',
        'Kept the experience responsive across product discovery steps',
      ],
      stack: ['Next.js', 'React', 'Django', 'PostgreSQL', 'Redis'],
    },
  ];

  readonly clusters: ProjectCluster[] = [
    {
      title: 'Commerce and Marketplace',
      description: 'Projects centered on e-commerce, search, transactions, and high-traffic product journeys.',
      items: ['PincodeKart', 'Sedar Global', 'Thuraya Refill', 'OpenCart client stores'],
    },
    {
      title: 'Healthcare and Medical',
      description: 'Products where clarity, trust, and accurate data handling matter as much as speed.',
      items: ['Lea Medicare', 'Doctors Plaza', 'SonoLab'],
    },
    {
      title: 'Operations and Enterprise Tools',
      description: 'Internal or specialized systems with strong workflow requirements and structured data.',
      items: ['ATP Forms', 'ATP RuleBook App', 'Asset Track For Cloud', 'Python Account and Inventory System'],
    },
    {
      title: 'Web Platforms and Brand Sites',
      description: 'Public-facing builds across WordPress, Angular, and React-driven stacks.',
      items: ['First Code Venture', 'Amrits Makeover Studio', 'Pacific University sites', 'Pattern Bots'],
    },
  ];
}
