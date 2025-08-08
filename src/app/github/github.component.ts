import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  repositories: any[] = [];
  loading = true;
  error = false;

  // Fallback data in case API fails
  fallbackRepos = [
    {
      name: 'devsecops-pipeline',
      description: 'Complete DevSecOps CI/CD pipeline with security scanning and automated deployment',
      stargazers_count: 25,
      language: 'Shell',
      html_url: 'https://github.com/prasaa18/devsecops-pipeline',
      topics: ['devops', 'security', 'cicd', 'jenkins', 'docker']
    },
    {
      name: 'aws-terraform-modules',
      description: 'Reusable Terraform modules for AWS infrastructure automation',
      stargazers_count: 18,
      language: 'HCL',
      html_url: 'https://github.com/prasaa18/aws-terraform-modules',
      topics: ['terraform', 'aws', 'infrastructure', 'iac']
    },
    {
      name: 'spring-boot-microservices',
      description: 'Microservices architecture with Spring Boot, Docker, and Kubernetes',
      stargazers_count: 32,
      language: 'Java',
      html_url: 'https://github.com/prasaa18/spring-boot-microservices',
      topics: ['java', 'spring-boot', 'microservices', 'kubernetes']
    },
    {
      name: 'security-monitoring-dashboard',
      description: 'Real-time security monitoring dashboard with vulnerability tracking',
      stargazers_count: 15,
      language: 'JavaScript',
      html_url: 'https://github.com/prasaa18/security-monitoring-dashboard',
      topics: ['security', 'monitoring', 'dashboard', 'react']
    },
    {
      name: 'kubernetes-security-policies',
      description: 'Collection of Kubernetes security policies and best practices',
      stargazers_count: 22,
      language: 'YAML',
      html_url: 'https://github.com/prasaa18/kubernetes-security-policies',
      topics: ['kubernetes', 'security', 'policies', 'yaml']
    },
    {
      name: 'aws-lambda-functions',
      description: 'Serverless functions for various AWS automation tasks',
      stargazers_count: 12,
      language: 'Python',
      html_url: 'https://github.com/prasaa18/aws-lambda-functions',
      topics: ['aws', 'lambda', 'serverless', 'python']
    }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadRepositories();
  }

  loadRepositories() {
    // Try to fetch from GitHub API, fallback to static data
    this.http.get<any[]>('https://api.github.com/users/prasaa18/repos?sort=updated&per_page=6')
      .subscribe({
        next: (data) => {
          this.repositories = data.filter(repo => !repo.fork).slice(0, 6);
          this.loading = false;
        },
        error: () => {
          // Use fallback data if API fails
          this.repositories = this.fallbackRepos;
          this.loading = false;
          this.error = false; // Don't show error, just use fallback
        }
      });
  }

  getLanguageColor(language: string): string {
    const colors: { [key: string]: string } = {
      'JavaScript': 'bg-yellow-500',
      'TypeScript': 'bg-blue-600',
      'Java': 'bg-red-600',
      'Python': 'bg-green-600',
      'Shell': 'bg-gray-600',
      'HCL': 'bg-purple-600',
      'YAML': 'bg-pink-600',
      'Dockerfile': 'bg-blue-500'
    };
    return colors[language] || 'bg-gray-500';
  }
}