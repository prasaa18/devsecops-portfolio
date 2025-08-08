import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Infosys',
      position: 'Associate Consultant',
      duration: '2021 - Present',
      location: 'Bangalore, India',
      logo: 'fas fa-building',
      description: 'Leading DevSecOps initiatives and cloud-native development',
      responsibilities: [
        'Designed and implemented secure CI/CD pipelines using Jenkins and GitHub Actions',
        'Dockerized microservices and deployed them on AWS ECS/EKS clusters',
        'Automated infrastructure provisioning using Terraform and Ansible',
        'Integrated security scanning tools (SonarQube, Fortify, OWASP ZAP) into development workflows',
        'Fixed critical security vulnerabilities and improved code quality metrics by 40%',
        'Developed Spring Boot applications with REST APIs and microservices architecture',
        'Implemented monitoring and logging solutions for production environments'
      ],
      technologies: ['Java', 'Spring Boot', 'AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'SonarQube']
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