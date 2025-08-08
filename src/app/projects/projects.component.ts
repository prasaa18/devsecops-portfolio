import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'DevSecOps CI/CD Pipeline',
      description: 'Complete automated pipeline with security scanning, testing, and deployment to AWS ECS',
      image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=DevSecOps+Pipeline',
      technologies: ['Jenkins', 'Docker', 'AWS ECS', 'SonarQube', 'Terraform'],
      githubUrl: 'https://github.com/prasaa18',
      liveUrl: '',
      features: [
        'Automated security scanning with SAST/DAST tools',
        'Infrastructure as Code with Terraform',
        'Container orchestration with ECS',
        'Slack notifications for pipeline status'
      ]
    },
    {
      title: 'Microservices Architecture',
      description: 'Scalable microservices built with Spring Boot, deployed on Kubernetes with service mesh',
      image: 'https://via.placeholder.com/400x250/10B981/FFFFFF?text=Microservices',
      technologies: ['Spring Boot', 'Kubernetes', 'Docker', 'MySQL', 'Redis'],
      githubUrl: 'https://github.com/prasaa18',
      liveUrl: '',
      features: [
        'Service discovery and load balancing',
        'Distributed tracing and monitoring',
        'API Gateway with rate limiting',
        'Database per service pattern'
      ]
    },
    {
      title: 'AWS Infrastructure Automation',
      description: 'Automated AWS infrastructure provisioning using Terraform with multi-environment support',
      image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=AWS+Terraform',
      technologies: ['Terraform', 'AWS', 'Ansible', 'CloudFormation', 'Python'],
      githubUrl: 'https://github.com/prasaa18',
      liveUrl: '',
      features: [
        'Multi-environment infrastructure',
        'Auto-scaling and load balancing',
        'Security groups and VPC configuration',
        'Cost optimization strategies'
      ]
    },
    {
      title: 'Security Monitoring Dashboard',
      description: 'Real-time security monitoring dashboard with vulnerability tracking and compliance reporting',
      image: 'https://via.placeholder.com/400x250/EF4444/FFFFFF?text=Security+Dashboard',
      technologies: ['React', 'Node.js', 'MongoDB', 'OWASP ZAP', 'Grafana'],
      githubUrl: 'https://github.com/prasaa18',
      liveUrl: '',
      features: [
        'Real-time vulnerability scanning',
        'Compliance reporting dashboard',
        'Automated security alerts',
        'Integration with security tools'
      ]
    }
  ];
}