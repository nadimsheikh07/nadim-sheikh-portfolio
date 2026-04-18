import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { PROFILE } from '../../shared/data/profile';
import { PROFILE_LINKS } from '../../shared/data/profile-links';
import { ProfileLink } from '../../shared/models/profile-link';

@Component({
  selector: 'app-header',
  imports: [CommonModule, Menubar],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  items: MenuItem[] | undefined;
  readonly profile = PROFILE;
  readonly profileLinks: ProfileLink[] = PROFILE_LINKS.filter(
    (link) => link.label === 'GitHub' || link.label === 'LinkedIn',
  );

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home',
      },
      {
        label: 'About',
        icon: 'pi pi-info-circle',
        routerLink: '/about',
      },
      {
        label: 'Projects',
        icon: 'pi pi-briefcase',
        routerLink: '/projects',
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: '/contact',
      },
    ];
  }
}
