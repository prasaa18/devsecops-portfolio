import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/prasaa18',
      icon: 'fab fa-github'
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'Medium',
      url: '#',
      icon: 'fab fa-medium'
    },
    {
      name: 'YouTube',
      url: '#',
      icon: 'fab fa-youtube'
    }
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}