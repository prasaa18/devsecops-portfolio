import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Infosys Ltd',
      position: 'Associate Consultant',
      duration: 'Aug 2024 – Present',
      location: 'Bangalore, India',
      logo: 'fas fa-building',
      description: 'Leading DevSecOps initiatives, API security compliance, and vulnerability management',
      responsibilities: [
        'Responsible for application Build & Release process which includes Code Compilation, Packaging, Security Scanning and code quality scanning, Deployment Methodology and Application Configurations',
        'Defining Release Process & Policy for projects early in SDLC and responsible for source code build, analysis and deploy configuration',
        'Collaborated with QA and DevOps teams to resolve SIT/UAT/production issues, optimize Docker images, Jenkins pipelines, and maintain deployment stability',
        'Extensively worked on GitHub Actions for continuous integration and for End-to-End automation for all build and deployments',
        'Performed 42Crunch API security scans in UAT, fixing Swagger issues and vulnerabilities to enhance API compliance and release readiness',
        'Remediated vulnerabilities flagged by SonarQube, Fortify, Blackduck and 42Crunch, reducing blockers and accelerating production releases',
        'Automated DAST (OWASP ZAP) scans and integrated results into a central dashboard; onboarded 30+ services for continuous vulnerability tracking across multiple tools',
        'Ensured container and dependency security using Sysdig and Black Duck conducted pre-release security reviews to minimize risks',
        'Improved code coverage to 90% by adding unit/integration tests and leveraging AI-assisted test generation',
        'Migrated services from Javax to Jakarta using AI tools (Copilot, Gemini) with zero downtime',
        'Led Fortify upgrades and proactive patch management, applying daily fixes to maintain secure, release-ready environments',
        'Integrated SonarQube with Jenkins for continuous inspection of code quality and analysis with SonarQube scanner for Maven',
        'Created Jenkins CICD pipelines for continuous build & deployment and integrated Junit and SonarQube plugins in Jenkins for automated testing and for Code quality check',
        'Experience with container-based deployments using Docker, working with Dockerimages, Docker Hub and Docker-registries and Kubernetes'
      ],
      technologies: ['42Crunch', 'SonarQube', 'Fortify', 'OWASP ZAP', 'Black Duck', 'Sysdig', 'Docker', 'Jenkins', 'GitHub Copilot', 'Gemini', 'Jakarta EE']
    },
    {
      company: 'Virtusa',
      position: 'Associate consultant ',
      duration: '2020 - 2021',
      location: 'Chennai, India',
      logo: 'fas fa-laptop-code',
      description: 'Java backend development and API testing',
      responsibilities: [
        'Developed Java backend applications using Spring Framework',
        'Created and tested REST APIs using Postman and JUnit',
        'Debugged and resolved issues in Spring Boot applications',
        'Collaborated with senior developers on code reviews and best practices',
        'Participated in Agile development processes and daily standups',
        'Learned industry-standard development practices and tools'
      ],
      technologies: ['Java', 'Spring Framework', 'REST APIs', 'Postman', 'JUnit', 'MySQL']
    }
  ];
}