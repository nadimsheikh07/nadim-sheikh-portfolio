import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';

interface ContactMethod {
  label: string;
  value: string;
  href: string;
  icon: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, CardModule, ButtonModule, ChipModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly contactMethods: ContactMethod[] = [
    {
      label: 'Email',
      value: 'nadim.sheikh.07@gmail.com',
      href: 'mailto:nadim.sheikh.07@gmail.com',
      icon: 'pi pi-envelope',
    },
    {
      label: 'Phone',
      value: '(+91) 7737033665',
      href: 'tel:+917739033665',
      icon: 'pi pi-phone',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/nadimsheikh07',
      href: 'https://www.linkedin.com/in/nadimsheikh07/',
      icon: 'pi pi-linkedin',
    },
    {
      label: 'GitHub',
      value: 'github.com/nadimsheikh07',
      href: 'https://github.com/nadimsheikh07',
      icon: 'pi pi-github',
    },
  ];

  readonly collaborationAreas = [
    'Angular and frontend architecture',
    'Full-stack product development',
    'Microservices and backend APIs',
    'Technical leadership and delivery support',
  ];
}
