import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <nav>
      <div class="container">
        <div class="logo text-gradient">Prasad Shekhar Naik</div>
        <div style="display: flex; align-items: center; gap: 2rem;">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#youtube">YouTube Videos</a></li>
            <li><a href="#github">GitHub</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button class="theme-toggle" (click)="toggleTheme()">
            <i [class]="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </button>
        </div>
      </div>
    </nav>

    <section id="home" class="hero">
      <div class="container">
        <div class="hero-content fade-in">
          <div class="hero-text">
            <h1>Hi, I'm <span class="text-gradient">Prasad Shekhar Naik</span></h1>
            <p style="font-size: 1.4rem; font-weight: 600; color: var(--primary-color); margin-bottom: 1.5rem;">DevSecOps Engineer | AWS Cloud Specialist | Security-First Developer</p>
            <p style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 1rem;">🚀 <strong>3.5+ years</strong> building secure, scalable cloud-native solutions at <strong>Infosys</strong></p>
            <p style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 2rem;">Specializing in CI/CD automation, container orchestration, and implementing security-first development practices across the entire software lifecycle.</p>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <button class="btn" (click)="downloadResume()">
                <i class="fas fa-download"></i> View Resume
              </button>
              <a href="mailto:prasadsnaik18@gmail.com" class="btn" style="background: transparent; border: 2px solid var(--primary-color); color: var(--primary-color);">
                <i class="fas fa-envelope"></i> Get In Touch
              </a>
            </div>
          </div>
          <div class="hero-image">
            <img src="assets/1000249455.jpg" alt="Prasad Shekhar Naik">
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="section" style="background: #f8fafc;">
      <div class="container">
        <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 3rem;" class="slide-up">
          <span class="text-gradient">Skills & Expertise</span>
        </h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          <div *ngFor="let category of skillCategories; let i = index" class="card fade-in" [style.animation-delay.ms]="i * 200">
            <h3 style="color: var(--primary-color); margin-bottom: 1.5rem; display: flex; align-items: center;">
              <i [class]="category.icon" style="margin-right: 0.5rem;"></i>
              {{category.title}}
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
              <span *ngFor="let skill of category.skills" 
                    style="background: var(--primary-color); color: white; padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.875rem; font-weight: 500;">
                {{skill}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="experience" class="section">
      <div class="container">
        <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 3rem;" class="slide-up">
          <span class="text-gradient">Professional Experience</span>
        </h2>
        <div class="timeline">
          <div *ngFor="let exp of experiences" class="timeline-item card fade-in">
            <h3 style="color: var(--primary-color); font-size: 1.3rem;">{{exp.position}}</h3>
            <h4 style="font-size: 1.1rem; margin: 0.5rem 0;">{{exp.company}}</h4>
            <p style="color: #666; margin-bottom: 1rem;">{{exp.duration}} | {{exp.location}}</p>
            <ul style="list-style-type: disc; padding-left: 1.5rem;">
              <li *ngFor="let responsibility of exp.responsibilities" style="margin-bottom: 0.5rem;">
                {{responsibility}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="section" style="background: #f8fafc;">
      <div class="container">
        <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 3rem;" class="slide-up">
          <span class="text-gradient">Featured Projects</span>
        </h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem;">
          <div *ngFor="let project of projects; let i = index" class="card fade-in" [style.animation-delay.ms]="i * 150">
            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">{{project.title}}</h3>
            <p style="color: #666; margin-bottom: 1rem;">{{project.description}}</p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
              <span *ngFor="let tech of project.technologies" 
                    style="background: #e5e7eb; color: #374151; padding: 0.25rem 0.75rem; border-radius: 15px; font-size: 0.8rem;">
                {{tech}}
              </span>
            </div>
            <a [href]="project.githubUrl" target="_blank" class="btn" style="font-size: 0.875rem;">
              <i class="fab fa-github"></i> View Code
            </a>
          </div>
        </div>
      </div>
    </section>

    <app-education id="education"></app-education>

    <section id="certifications" class="section" style="background: #f8fafc;">
      <div class="container">
        <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 3rem;" class="slide-up">
          <span class="text-gradient">Certifications</span>
        </h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          <div *ngFor="let cert of certifications; let i = index" class="cert-card" [style.animation-delay.ms]="i * 500">
            <div class="cert-icon">
              <i [class]="cert.icon"></i>
            </div>
            <h3 style="margin-bottom: 0.5rem; color: var(--primary-color);">{{cert.title}}</h3>
            <p style="color: #666; margin-bottom: 0.5rem;">{{cert.issuer}}</p>
            <p style="font-size: 0.9rem; color: #888;">{{cert.year}}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="youtube" class="section">
      <div class="container">
        <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 1rem;" class="slide-up">
          🎥 My DevSecOps Projects on <span style="color: #ff0000;">YouTube</span>
        </h2>
        <p style="text-align: center; color: #666; margin-bottom: 3rem;">(More Coming Soon...)</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          <div *ngFor="let video of youtubeVideos; let i = index" 
               class="youtube-card card fade-in" 
               [style.animation-delay.ms]="i * 200"
               (click)="openYouTubeVideo(video.url)">
            <img [src]="video.thumbnail" [alt]="video.title" class="youtube-thumbnail">
            <div class="youtube-overlay">
              <i class="fab fa-youtube"></i>
            </div>
            <div style="padding: 1rem;">
              <h3 style="font-size: 1rem; margin-bottom: 0.5rem; color: var(--text-color);">{{video.title}}</h3>
              <p style="font-size: 0.875rem; color: #666;">{{video.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="github" class="section" style="background: #f8fafc;">
      <div class="container">
        <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 3rem;" class="slide-up">
          <span class="text-gradient">GitHub Repositories</span>
        </h2>
        <div style="text-align: center; margin-bottom: 2rem;">
          <a href="https://github.com/prasaa18?tab=repositories" target="_blank" class="btn">
            <i class="fab fa-github"></i> View All Repositories
          </a>
        </div>
        <div class="card fade-in" style="text-align: center;">
          <p style="color: #666;">Repository showcase with live GitHub API integration coming soon...</p>
        </div>
      </div>
    </section>

    <app-blog id="blog"></app-blog>

    <section id="contact" class="section" style="background: #f8fafc;">
      <div class="container">
        <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 3rem;" class="slide-up">
          <span class="text-gradient">Get In Touch</span>
        </h2>
        <div style="max-width: 800px; margin: 0 auto;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start;">
            <div class="card fade-in">
              <h3 style="margin-bottom: 2rem; color: var(--primary-color);">Contact Information</h3>
              <div style="margin-bottom: 1.5rem;">
                <i class="fas fa-phone" style="color: var(--primary-color); margin-right: 1rem; width: 20px;"></i>
                <span>+91 9148831446</span>
              </div>
              <div style="margin-bottom: 1.5rem;">
                <i class="fas fa-phone" style="color: var(--primary-color); margin-right: 1rem; width: 20px;"></i>
                <span>+91 8310483089</span>
              </div>
              <div style="margin-bottom: 2rem;">
                <i class="fas fa-envelope" style="color: var(--primary-color); margin-right: 1rem; width: 20px;"></i>
                <span>prasadsnaik18&#64;gmail.com</span>
              </div>
              <div style="display: flex; gap: 1rem;">
                <a href="https://github.com/prasaa18" target="_blank" style="color: var(--primary-color); font-size: 1.5rem;">
                  <i class="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/prasad-shekhar-naik" target="_blank" style="color: var(--primary-color); font-size: 1.5rem;">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://www.youtube.com/@prasadsnaik18" target="_blank" style="color: var(--primary-color); font-size: 1.5rem;">
                  <i class="fab fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/bitsandbuilds18/" target="_blank" style="color: var(--primary-color); font-size: 1.5rem;">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div class="card fade-in">
              <h3 style="margin-bottom: 2rem; color: var(--primary-color);">Send Message</h3>
              <form (ngSubmit)="sendMessage()">
                <input type="text" placeholder="Your Name" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-color); color: var(--text-color);">
                <input type="email" placeholder="Your Email" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-color); color: var(--text-color);">
                <textarea placeholder="Your Message" rows="4" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-color); color: var(--text-color); resize: vertical;"></textarea>
                <button type="submit" class="btn" style="width: 100%;">
                  <i class="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer style="background: #1f2937; color: white; padding: 3rem 0; text-align: center;">
      <div class="container">
        <div style="display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem;">
          <a href="https://github.com/prasaa18" target="_blank" style="color: white; font-size: 1.5rem;">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/prasad-shekhar-naik" target="_blank" style="color: white; font-size: 1.5rem;">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://medium.com/@prasadsnaik18" target="_blank" style="color: white; font-size: 1.5rem;">
            <i class="fab fa-medium"></i>
          </a>
          <a href="https://www.instagram.com/bitsandbuilds18/" target="_blank" style="color: white; font-size: 1.5rem;">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <p>&copy; 2024 Prasad Shekhar Naik. All rights reserved.</p>
      </div>
    </footer>
  `
})
export class AppComponent implements OnInit {
  isDarkMode = false;

  skillCategories = [
    {
      title: 'Languages & Backend',
      icon: 'fas fa-code',
      skills: ['Java', 'Spring Boot', 'REST APIs']
    },
    {
      title: 'Security & DevSecOps Tools',
      icon: 'fas fa-shield-alt',
      skills: ['Jenkins', 'SonarQube', 'Fortify', '42Crunch', 'OWASP ZAP', 'Nexus', 'Docker', 'Kubernetes', 'Helm', 'GitHub Actions']
    },
    {
      title: 'Cloud & Infrastructure',
      icon: 'fas fa-cloud',
      skills: ['AWS (EC2, ECS, ECR, S3, VPC, IAM, Beanstalk)', 'Terraform', 'Ansible']
    },
    {
      title: 'Others',
      icon: 'fas fa-tools',
      skills: ['Git', 'Jira', 'Postman', 'Agile', 'IntelliJ', 'VS Code']
    }
  ];

  experiences = [
    {
      position: 'Associate Consultant',
      company: 'Infosys Ltd',
      duration: 'Aug 2024 – Present',
      location: 'Bangalore, India',
      responsibilities: [
        'Automated Dynamic Application Security Testing (DAST) using OWASP ZAP and integrated API definitions into 42Crunch dashboards for continuous API security monitoring',
        'Identified and remediated vulnerabilities flagged by Fortify, SonarQube, and 42Crunch, enhancing code quality and API security posture',
        'Resolved SIT, UAT, and production issues related to business logic bugs, test failures, and performance bottlenecks',
        'Improved test coverage by adding missing unit and integration test cases, reducing technical debt',
        'Onboarded APIs to Apigee and participated in security reviews and threat modeling sessions',
        'Upgraded Docker images and resolved pod failures, Jenkins pipeline issues, and deployment errors',
        'Ensured platform stability by troubleshooting CI/CD workflows and collaborating with QA and security teams'
      ]
    },
    {
      position: 'Associate Engineer',
      company: 'Virtusa',
      duration: 'Dec 2021 – Aug 2024',
      location: 'Chennai, India',
      responsibilities: [
        'Developed secure REST APIs using Spring Boot with HMAC/RSA validation for payment systems',
        'Integrated third-party APIs (e.g., Trustly), implemented business logic, and built reusable service components',
        'Delivered deployments using AWS EC2 and S3 with minimal downtime',
        'Participated in Agile ceremonies and contributed to production release cycles'
      ]
    }
  ];

  projects = [
    {
      title: 'CI/CD Automation on AWS ECS & ECR',
      description: 'Built CI/CD pipeline automating build, test, image packaging, and blue-green ECS deployment with GitHub Actions and Jenkins integration',
      technologies: ['Spring Boot', 'Docker', 'Jenkins', 'GitHub Actions', 'AWS ECS', 'ECR', 'EC2'],
      githubUrl: 'https://github.com/prasaa18'
    },
    {
      title: 'GitOps Infrastructure with Terraform, Kubernetes, and Helm',
      description: 'Provisioned cloud infrastructure using Terraform modules and implemented GitOps strategy with automated scans and secure release gates',
      technologies: ['GitHub Actions', 'Terraform', 'Helm', 'SonarQube', 'AWS VPC', 'ECR', 'ECS'],
      githubUrl: 'https://github.com/prasaa18'
    },
    {
      title: 'Cafe Management App',
      description: 'Developed full-stack application with JWT authentication, CRUD operations, and admin dashboard deployed to AWS ECS',
      technologies: ['Spring Boot', 'Angular', 'Jenkins', 'MySQL', 'Docker', 'ECS'],
      githubUrl: 'https://github.com/prasaa18'
    },
    {
      title: 'Microservices Architecture Demo',
      description: 'Designed modular Order, Product, and Inventory services with Eureka service discovery and Resilience4j circuit breaking',
      technologies: ['Spring Boot', 'Kafka', 'Docker Compose', 'Eureka', 'Resilience4j'],
      githubUrl: 'https://github.com/prasaa18'
    }
  ];

  certifications = [
    {
      title: 'Oracle Certified Associate - Java SE 8',
      issuer: 'Oracle',
      year: '2021',
      icon: 'fab fa-java'
    },
    {
      title: 'AWS Certified Developer – Associate',
      issuer: 'Amazon Web Services',
      year: '2022',
      icon: 'fab fa-aws'
    },
    {
      title: 'DevOps Beginner to Advanced',
      issuer: 'Udemy',
      year: '2021',
      icon: 'fas fa-certificate'
    }
  ];

  youtubeVideos = [
    {
      title: 'VPS Setup + Bastion Host',
      description: 'Complete guide to setting up secure VPS with bastion host',
      url: 'https://www.youtube.com/watch?v=BR-2Xvgmme0',
      thumbnail: 'https://img.youtube.com/vi/BR-2Xvgmme0/maxresdefault.jpg'
    },
    {
      title: 'AWS Lift and Shift Deployment',
      description: 'Migrating applications to AWS using lift and shift strategy',
      url: 'https://youtu.be/8_Vq-kHXmIA',
      thumbnail: 'https://img.youtube.com/vi/8_Vq-kHXmIA/hqdefault.jpg'
    },
    {
      title: 'Jenkins on EC2',
      description: 'Setting up Jenkins CI/CD on AWS EC2 instance',
      url: 'https://www.youtube.com/watch?v=LLf8fGtv1Dc',
      thumbnail: 'https://img.youtube.com/vi/LLf8fGtv1Dc/maxresdefault.jpg'
    },
    {
      title: 'Sonar, Nexus, Slack CI/CD Integration',
      description: 'Integrating quality gates and notifications in CI/CD pipeline',
      url: 'https://www.youtube.com/watch?v=BU3U5uHaBaM',
      thumbnail: 'https://img.youtube.com/vi/BU3U5uHaBaM/maxresdefault.jpg'
    },
    {
      title: 'ECS, ECR Continuous Deployment (Kannada)',
      description: 'Container deployment on AWS ECS with ECR in Kannada',
      url: 'https://youtu.be/K40BXrhU5Zo',
      thumbnail: 'https://img.youtube.com/vi/K40BXrhU5Zo/hqdefault.jpg'
    }
  ];

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf';
    link.download = 'Prasad_Shekhar_Naik_Resume.pdf';
    link.click();
  }

  openYouTubeVideo(url: string) {
    window.open(url, '_blank');
  }

  sendMessage() {
    alert('Message functionality will be integrated with EmailJS or backend service');
  }
}