import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';

interface Skill {
  name: string;
  years: string;
}

interface Experience {
  role: string;
  date: string;
  company: string;
  description: string;
}

interface Project {
  title: string;
  period: string;
  description: string;
  tech: string[];
}

interface Stat {
  value: string;
  label: string;
}

interface ProfileLink {
  label: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, ButtonModule, CardModule, ChipModule, DividerModule, TagModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly stats: Stat[] = [
    { value: '11+', label: 'Years in software engineering' },
    { value: '7+', label: 'Years across Angular, React, Laravel, Node, and .NET' },
    { value: '4+', label: 'Years on Django, cloud delivery, and WordPress systems' },
  ];

  readonly profileLinks: ProfileLink[] = [
    { label: 'GitHub', url: 'https://github.com/nadimsheikh07', icon: 'pi pi-github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nadimsheikh07/', icon: 'pi pi-linkedin' },
    { label: 'NPM', url: 'https://www.npmjs.com/~nadimsheikh07', icon: 'pi pi-box' },
  ];

  readonly highlights: string[] = [
    'Senior software engineer working across PHP, Python, MERN, MEAN, Go, and ASP.NET.',
    'Experienced with microservices, micro-frontends, REST APIs, TDD, and end-to-end testing.',
    'Comfortable collaborating with frontend teams, project managers, designers, and DB administrators.',
  ];

  readonly skills: Skill[] = [
    { name: 'Angular and Ionic', years: '7+ years' },
    { name: 'React, Next.js, and React Native', years: '7+ years' },
    { name: 'Node.js, Express, and NestJS', years: '7+ years' },
    { name: 'Laravel and PHP MVC', years: '7+ years' },
    { name: '.NET and ASP.NET', years: '7+ years' },
    { name: 'Python and Django', years: '4+ years' },
    { name: 'MySQL, MongoDB, MSSQL, PostgreSQL', years: '11+ years' },
    { name: 'Go, Gin, C, C++, and C#', years: '2+ years' },
  ];

  readonly experience: Experience[] = [
    {
      role: 'Full Stack Engineer',
      date: 'Jan 2026 - Present',
      company: 'PincodeKart',
      description:
        'Building large-scale e-commerce products with microservices, micro-frontends, real-time integrations, and concurrency-ready architecture.',
    },
    {
      role: 'Full Stack Engineer and Technical Lead',
      date: 'Aug 2024 - Dec 2025',
      company: 'CIGI Technologies Pvt Ltd',
      description:
        'Led delivery across ATP Forms, ATP RuleBook App, Lea Medicare, and PowerFlex with React, Next.js, Node.js, Laravel, Django, and resilient service patterns.',
    },
    {
      role: 'Full Stack Engineer',
      date: 'Jan 2024 - Jul 2024',
      company: 'Sedar Global',
      description:
        'Delivered e-commerce solutions from scratch and maintained production systems with strong code quality standards.',
    },
    {
      role: 'Full Stack Engineer and Technical Lead',
      date: 'Feb 2021 - Mar 2023',
      company: 'Code Town Technologies',
      description:
        'Shipped products like Asset Track For Cloud, Doctors Plaza, Mulberri, and SonoLab using Laravel, Next.js, React, and Material UI.',
    },
  ];

  readonly projects: Project[] = [
    {
      title: 'PincodeKart and PincodeDak',
      period: '2026 - Current',
      description:
        'Scalable e-commerce platform work focused on modular services, micro-frontends, real-time data integration, and high-concurrency systems.',
      tech: ['Microservices', 'Micro-frontends', 'Node.js', 'MongoDB', 'PostgreSQL'],
    },
    {
      title: 'ATP Forms',
      period: '2024 - 2025',
      description:
        'Tournament management platform with real-time updates, high-availability architecture, and sub-second data handling during peak traffic.',
      tech: ['Next.js', 'React', 'Node.js', 'Laravel', 'Redis'],
    },
    {
      title: 'Lea Medicare',
      period: '2025',
      description:
        'Smart EMR platform for Africa supporting appointments, consultations, medical records, and performance-focused backend services.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
  ];

  readonly education = [
    'MCA, JRNRV University Rajasthan, 2014',
    'BCA, JRNRV University Rajasthan, 2011',
  ];
}
