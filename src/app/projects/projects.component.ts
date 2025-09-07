import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'CI/CD Automation on AWS ECS & ECR',
      description: 'Built CI/CD pipeline automating build, test, image packaging, and blue-green ECS deployment',
      image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=CI/CD+ECS+ECR',
      technologies: ['GitHub Actions', 'Jenkins', 'AWS ECS', 'AWS ECR', 'EC2', 'Docker'],
      githubUrl: 'https://github.com/prasaa18',
      liveUrl: '',
      features: [
        'Built CI/CD pipeline automating build, test, image packaging, and blue-green ECS deployment',
        'Integrated GitHub Actions and Jenkins to trigger pipeline stages with rollback support',
        'Used ECR for container registry and EC2-based agents for secure build isolation'
      ]
    },
    {
      title: 'Microservices Architecture',
      description: 'Led development of microservices-based architecture with Order, Product, Inventory, and Notification Services',
      image: 'https://via.placeholder.com/400x250/10B981/FFFFFF?text=Microservices',
      technologies: ['Spring Boot', 'Docker', 'Docker Compose', 'API Gateway', 'Circuit Breaker', 'Service Discovery'],
      githubUrl: 'https://github.com/prasaa18',
      liveUrl: '',
      features: [
        'Led the development of a microservices-based architecture for an application, integrating Order, Product, Inventory, and Notification Services',
        'Enabled seamless communication between services, leveraging synchronous and asynchronous messaging',
        'Implemented advanced features such as API Gateway, Service Discovery, and Circuit Breaker for fault tolerance',
        'Containerized each microservice using Docker and orchestrated deployment with Docker Compose for scalability and portability'
      ]
    },
    {
      title: 'GitOps Infra with Terraform, Kubernetes, and Helm',
      description: 'Complete GitOps infrastructure with automated provisioning, deployment, and rollback capabilities',
      image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=GitOps+Infra',
      technologies: ['Terraform', 'Kubernetes', 'Helm', 'GitHub Actions', 'AWS ECS', 'SonarQube'],
      githubUrl: 'https://github.com/prasaa18/vprofile-action/actions/runs/16088912290',
      liveUrl: '',
      features: [
        'Provisioned AWS infrastructure (ECS, ECR, IAM, VPC) using Terraform and deployed microservices via Helm charts onto Kubernetes clusters',
        'Built GitOps pipelines with GitHub Actions for infrastructure provisioning, application deployments, and rollback automation, enabling zero-downtime deployments',
        'Integrated SonarQube into CI/CD pipelines to enforce code quality gates before production deployments',
        'Streamlined deployments with GitOps-based version control, ensuring every infrastructure and application change was auditable, reproducible, and secure'
      ]
    },
    {
      title: 'Cafe Management App',
      description: 'Full-stack application with multi-stage CI/CD + DevSecOps pipeline deployed on AWS EKS',
      image: 'https://via.placeholder.com/400x250/EF4444/FFFFFF?text=Cafe+Management',
      technologies: ['Java Spring Boot', 'Angular', 'MySQL', 'AWS EKS', 'GitHub Actions', 'SonarQube', 'Trivy', 'Docker Scout'],
      githubUrl: 'https://github.com/prasaa18/cafemanagement/actions',
      liveUrl: '',
      features: [
        'Designed and deployed a full-stack Cafe Management Application (Java Spring Boot + Angular + MySQL) on AWS EKS using a multi-stage CI/CD + DevSecOps pipeline with separate pipelines for frontend & backend',
        'Implemented GitOps workflows with GitHub Actions for Code → Build → Scan → Deploy → Notify automation, ensuring seamless deployments and rollback capabilities',
        'Integrated SonarQube, Trivy, Docker Scout for SAST, dependency checks, and image security; enforced quality gates and security-first pipelines before every deployment',
        'Automated Docker build & push to AWS ECR, Kubernetes deployments via Helm charts, with Ingress + Route53 DNS mapping for seamless frontend-backend communication',
        'Enabled end-to-end observability using AWS CloudWatch and email alerts for pipeline status',
        'Achieved production-grade deployments with a fully automated, security-compliant workflow integrating code quality, vulnerability scans, and continuous delivery',
        'Can also be handled via GitOps workflows for enhanced deployment automation and version control'
      ]
    }
  ];
}