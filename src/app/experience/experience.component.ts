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
        'Performed 42Crunch API security scans on UAT and remediated Swagger specification issues and vulnerabilities flagged during testing, improving API compliance and release readiness',
        'Remediated vulnerabilities identified by SonarQube, Fortify, and 42Crunch across multiple microservices through prioritized fixes, reducing security blockers for production releases',
        'Automated DAST (OWASP ZAP) scanning and integrated DAST results into a central vulnerability dashboard, onboarded 30+ services to the dashboard and scheduled regular scans to enable continuous vulnerability tracking across 42Crunch, Black Duck (SCA), Fortify, and DAST tools',
        'Monitored container security using the Sysdig plugin and performed dependency (SCA) scans with Black Duck; conducted manual security reviews prior to API onboarding to ensure minimal vulnerabilities at release',
        'Increased code coverage to 80% by adding unit/integration tests and automating test generation using AI tools',
        'Migrated services from Javax to Jakarta using AI-assisted tools (GitHub Copilot, Gemini), achieving seamless modernization with minimal downtime',
        'Fixed SIT, UAT, and production issues by collaborating with QA and DevOps teams, accelerating release cycles',
        'Upgraded Docker images and resolved pod failures, Jenkins pipeline issues, and deployment errors',
        'Performed Fortify upgrades and resolved critical vulnerabilities, maintaining security gates for smooth production deployments',
        'Led dependency vulnerability remediation efforts, performing daily checks and applying security patches to avoid release blockers'
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