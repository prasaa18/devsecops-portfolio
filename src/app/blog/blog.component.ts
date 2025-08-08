import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogPosts = [
    {
      title: 'Building Secure CI/CD Pipelines with DevSecOps',
      excerpt: 'Learn how to integrate security scanning tools into your CI/CD pipeline for automated vulnerability detection and compliance.',
      readTime: '8 min read',
      publishDate: 'Dec 15, 2023',
      tags: ['DevSecOps', 'CI/CD', 'Security'],
      image: 'https://via.placeholder.com/400x200/3B82F6/FFFFFF?text=DevSecOps+Pipeline',
      url: '#'
    },
    {
      title: 'AWS ECS vs EKS: Choosing the Right Container Service',
      excerpt: 'A comprehensive comparison of AWS container services to help you make the right choice for your microservices architecture.',
      readTime: '12 min read',
      publishDate: 'Nov 28, 2023',
      tags: ['AWS', 'Containers', 'ECS', 'EKS'],
      image: 'https://via.placeholder.com/400x200/FF9500/FFFFFF?text=AWS+Containers',
      url: '#'
    },
    {
      title: 'Infrastructure as Code Best Practices with Terraform',
      excerpt: 'Essential patterns and practices for managing cloud infrastructure using Terraform modules and state management.',
      readTime: '10 min read',
      publishDate: 'Nov 10, 2023',
      tags: ['Terraform', 'IaC', 'AWS', 'DevOps'],
      image: 'https://via.placeholder.com/400x200/7C3AED/FFFFFF?text=Terraform+IaC',
      url: '#'
    },
    {
      title: 'Kubernetes Security: Implementing Pod Security Standards',
      excerpt: 'Deep dive into Kubernetes security policies and how to implement Pod Security Standards for enhanced cluster security.',
      readTime: '15 min read',
      publishDate: 'Oct 22, 2023',
      tags: ['Kubernetes', 'Security', 'Policies'],
      image: 'https://via.placeholder.com/400x200/326CE5/FFFFFF?text=K8s+Security',
      url: '#'
    },
    {
      title: 'Monitoring and Observability in Microservices',
      excerpt: 'Strategies for implementing comprehensive monitoring, logging, and tracing in distributed microservices architectures.',
      readTime: '11 min read',
      publishDate: 'Oct 5, 2023',
      tags: ['Monitoring', 'Microservices', 'Observability'],
      image: 'https://via.placeholder.com/400x200/10B981/FFFFFF?text=Monitoring',
      url: '#'
    },
    {
      title: 'Securing Spring Boot Applications: A Complete Guide',
      excerpt: 'Comprehensive guide to implementing security best practices in Spring Boot applications with OAuth2 and JWT.',
      readTime: '14 min read',
      publishDate: 'Sep 18, 2023',
      tags: ['Spring Boot', 'Security', 'Java'],
      image: 'https://via.placeholder.com/400x200/6DB33F/FFFFFF?text=Spring+Security',
      url: '#'
    }
  ];
}