import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Skill {
  name: string;
  icon: string;
  note: string;
}

interface Experience {
  role: string;
  date: string;
  company: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  accent: string;
}

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly stats: Stat[] = [
    { value: '5+', label: 'Years shaping production-grade interfaces' },
    { value: '30%', label: 'Average performance lift on key journeys' },
    { value: '12', label: 'Design systems and apps delivered end-to-end' },
  ];

  skills: Skill[] = [
    { name: 'Angular', icon: 'pi pi-objects-column', note: 'Large-scale app architecture and standalone components' },
    { name: 'TypeScript', icon: 'pi pi-code', note: 'Typed UI systems with maintainable domain modeling' },
    { name: 'JavaScript', icon: 'pi pi-bolt', note: 'Fast product iteration with clean interaction logic' },
    { name: 'HTML & CSS', icon: 'pi pi-palette', note: 'Responsive layouts with sharp visual hierarchy' },
    { name: 'Tailwind CSS', icon: 'pi pi-sparkles', note: 'Utility-first styling with a custom design voice' },
    { name: 'PrimeNG', icon: 'pi pi-box', note: 'Accessible enterprise UI foundations and theming' },
    { name: 'Node.js', icon: 'pi pi-server', note: 'Backend glue for APIs, tooling, and automation' },
    { name: 'Git & GitHub', icon: 'pi pi-github', note: 'Team workflows, reviews, and steady shipping' },
  ];

  experience: Experience[] = [
    {
      role: 'Senior Software Engineer',
      date: '2023 - Present',
      company: 'Tech Innovators',
      description: 'Leading Angular delivery for enterprise-facing products, turning dense workflows into clear interfaces and mentoring a frontend team across releases.',
    },
    {
      role: 'Software Engineer',
      date: '2020 - 2023',
      company: 'Creative Digital',
      description: 'Built responsive client applications, integrated API-heavy experiences, and improved performance across high-traffic product surfaces.',
    },
    {
      role: 'Frontend Intern',
      date: '2019 - 2020',
      company: 'Web Solutions',
      description: 'Learned the craft in production by shipping UI components, fixing usability issues, and collaborating closely with designers and QA.',
    },
  ];

  projects: Project[] = [
    {
      title: 'Command Center UI',
      description: 'A high-density operations dashboard for teams that need fast scanning, live status updates, and confident decision-making.',
      tech: ['Angular', 'PrimeNG', 'RxJS'],
      link: '/projects',
      accent: 'Sunrise Grid',
    },
    {
      title: 'Commerce Experience',
      description: 'A conversion-focused storefront with richer product storytelling, cleaner checkout flows, and real-time inventory awareness.',
      tech: ['Angular', 'Tailwind', 'Node.js'],
      link: '/projects',
      accent: 'Signal Orange',
    },
    {
      title: 'Portfolio System',
      description: 'A personal brand site that treats engineering credibility like a product, with strong visuals, clear narrative, and responsive polish.',
      tech: ['Angular', 'CSS', 'PrimeIcons'],
      link: '/projects',
      accent: 'Editorial Motion',
    },
  ];
}
