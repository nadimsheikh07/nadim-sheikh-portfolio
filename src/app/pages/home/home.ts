import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { CAREER_STEPS } from '../../shared/data/career-steps';
import { EDUCATION } from '../../shared/data/education';
import { PROFILE_LINKS } from '../../shared/data/profile-links';
import { PROJECTS } from '../../shared/data/projects';
import { SKILLS } from '../../shared/data/skills';
import { CareerStep } from '../../shared/models/career-step';
import { ProfileLink } from '../../shared/models/profile-link';
import { Project } from '../../shared/models/project';
import { Skill } from '../../shared/models/skill';

interface Stat {
  value: string;
  label: string;
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

  readonly profileLinks: ProfileLink[] = PROFILE_LINKS;

  readonly highlights: string[] = [
    'Senior software engineer working across PHP, Python, MERN, MEAN, Go, and ASP.NET.',
    'Experienced with microservices, micro-frontends, REST APIs, TDD, and end-to-end testing.',
    'Comfortable collaborating with frontend teams, project managers, designers, and DB administrators.',
  ];

  readonly skills: Skill[] = SKILLS;

  readonly career: CareerStep[] = CAREER_STEPS;

  readonly projects: Project[] = PROJECTS.slice(0, 3);

  readonly education = EDUCATION;
}
