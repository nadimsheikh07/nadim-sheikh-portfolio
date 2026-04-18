import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';

interface Principle {
  title: string;
  description: string;
}

interface CareerStep {
  period: string;
  company: string;
  role: string;
  summary: string;
}

interface Credential {
  label: string;
  value: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule, CardModule, ChipModule, DividerModule, TagModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly principles: Principle[] = [
    {
      title: 'Build for longevity',
      description:
        'I prefer systems that stay understandable under pressure, with clear modules, disciplined APIs, and room for teams to grow the product safely.',
    },
    {
      title: 'Stay close to delivery',
      description:
        'I enjoy hands-on implementation as much as architecture, especially when projects need quick iteration without sacrificing quality.',
    },
    {
      title: 'Make performance practical',
      description:
        'Performance is not just a metric. It is about reliable response times, fewer support issues, and better user trust in production.',
    },
  ];

  readonly strengths = [
    'Microservices and micro-frontend architecture',
    'REST APIs, test-driven development, and end-to-end testing',
    'Angular, React, Next.js, Node.js, Laravel, Django, and ASP.NET',
    'MySQL, MongoDB, MSSQL, PostgreSQL, Redis, Kafka, and BullMQ',
  ];

  readonly career: CareerStep[] = [
    {
      period: '2026 - Present',
      company: 'PincodeKart',
      role: 'Full Stack Engineer',
      summary:
        'Focused on scalable e-commerce systems, real-time integrations, microservices, and micro-frontends built for high concurrency.',
    },
    {
      period: '2024 - 2025',
      company: 'CIGI Technologies Pvt Ltd',
      role: 'Full Stack Engineer and Technical Lead',
      summary:
        'Led delivery across ATP Forms, Lea Medicare, PowerFlex, and RuleBook products using React, Next.js, Node.js, Laravel, and Django.',
    },
    {
      period: '2021 - 2024',
      company: 'Code Town Technologies, Sedar Global',
      role: 'Full Stack Engineer and Technical Lead',
      summary:
        'Delivered client platforms across healthcare, insurance, asset tracking, and commerce with strong code quality and frontend execution.',
    },
    {
      period: '2015 - 2021',
      company: 'Pegasus, MuskOwl, GKMIT, Intelloger',
      role: 'Full Stack Engineer',
      summary:
        'Built OpenCart stores, GPS tracking systems, WordPress sites, React applications, and backend services across multiple stacks.',
    },
  ];

  readonly credentials: Credential[] = [
    { label: 'Experience', value: '11+ years in software engineering' },
    { label: 'Frontend depth', value: '7+ years with Angular, React, Next.js, Ionic' },
    { label: 'Backend depth', value: '7+ years with Laravel, Node.js, .NET' },
    { label: 'Education', value: 'MCA 2014, BCA 2011, JRNRV University Rajasthan' },
  ];
}
