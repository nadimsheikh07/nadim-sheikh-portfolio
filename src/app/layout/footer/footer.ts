import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { Divider } from 'primeng/divider';
import { PROFILE } from '../../shared/data/profile';
import { PROFILE_LINKS } from '../../shared/data/profile-links';
import { ProfileLink } from '../../shared/models/profile-link';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterLink, Button, Divider],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();
  readonly profile = PROFILE;
  readonly profileLinks: ProfileLink[] = PROFILE_LINKS;
  readonly quickLinks = [
    { label: 'Home', route: '/home' },
    { label: 'About', route: '/about' },
    { label: 'Projects', route: '/projects' },
    { label: 'Contact', route: '/contact' },
  ];
}
