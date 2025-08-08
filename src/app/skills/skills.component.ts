import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Languages & Backend',
      icon: 'fas fa-code',
      color: 'bg-blue-500',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Spring Boot', level: 85 },
        { name: 'REST APIs', level: 88 },
        { name: 'Microservices', level: 82 }
      ]
    },
    {
      title: 'Security & DevSecOps',
      icon: 'fas fa-shield-alt',
      color: 'bg-red-500',
      skills: [
        { name: 'Jenkins', level: 85 },
        { name: 'SonarQube', level: 80 },
        { name: 'OWASP ZAP', level: 75 },
        { name: 'Docker', level: 88 },
        { name: 'Kubernetes', level: 78 },
        { name: 'GitHub Actions', level: 82 }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: 'fas fa-cloud',
      color: 'bg-green-500',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Terraform', level: 75 },
        { name: 'Ansible', level: 70 },
        { name: 'EC2/ECS/ECR', level: 88 }
      ]
    },
    {
      title: 'Tools & Others',
      icon: 'fas fa-tools',
      color: 'bg-purple-500',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Jira', level: 85 },
        { name: 'Postman', level: 88 },
        { name: 'IntelliJ IDEA', level: 85 }
      ]
    }
  ];
}