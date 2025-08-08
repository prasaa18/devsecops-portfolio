import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {
  certifications = [
    {
      title: 'Oracle Certified Associate - Java SE 8',
      issuer: 'Oracle',
      date: '2021',
      credentialId: 'OCA-JSE8-2021',
      icon: 'fab fa-java',
      color: 'bg-red-500',
      description: 'Demonstrates proficiency in Java programming fundamentals and object-oriented concepts',
      skills: ['Java Fundamentals', 'OOP Concepts', 'Exception Handling', 'Collections Framework']
    },
    {
      title: 'AWS Certified Developer – Associate',
      issuer: 'Amazon Web Services',
      date: '2022',
      credentialId: 'AWS-DEV-2022',
      icon: 'fab fa-aws',
      color: 'bg-orange-500',
      description: 'Validates expertise in developing and maintaining applications on AWS platform',
      skills: ['AWS Services', 'Serverless Architecture', 'Security Best Practices', 'Monitoring & Debugging']
    },
    {
      title: 'DevOps Beginner to Advanced',
      issuer: 'Udemy',
      date: '2021',
      credentialId: 'UDEMY-DEVOPS-2021',
      icon: 'fas fa-cogs',
      color: 'bg-blue-500',
      description: 'Comprehensive course covering DevOps practices, tools, and methodologies',
      skills: ['CI/CD Pipelines', 'Docker & Kubernetes', 'Infrastructure as Code', 'Monitoring & Logging']
    }
  ];
}