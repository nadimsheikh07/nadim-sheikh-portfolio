import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { PROJECTS } from '../../shared/data/projects';
import { Project } from '../../shared/models/project';

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
  readonly featuredProjects: Project[] = PROJECTS;

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
