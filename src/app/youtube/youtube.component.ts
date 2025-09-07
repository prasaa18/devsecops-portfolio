import { Component } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent {
  videos = [
    {
      title: 'https://youtu.be/ceD9REQ1ako?si=b7KraE-g5pOAHcDa',
      description: 'Complete walkthrough of deploying a full-stack Cafe Management application on Kubernetes with automated CI/CD pipeline and integrated security scanning',
      thumbnail: 'https://img.youtube.com/vi/ceD9REQ1ako/maxresdefault.jpg',
      videoId: 'ceD9REQ1ako',
      duration: '45:00',
      views: '1.2K',
      uploadDate: '1 week ago'
    },
    {
      title: 'VPS Setup + Bastion Host Configuration',
      description: 'Complete guide to setting up a secure VPS with bastion host for enhanced security',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoId: 'dQw4w9WgXcQ',
      duration: '15:30',
      views: '2.5K',
      uploadDate: '2 weeks ago'
    },
    {
      title: 'AWS Lift and Shift Deployment Strategy',
      description: 'Learn how to migrate on-premises applications to AWS using lift and shift approach',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoId: 'dQw4w9WgXcQ',
      duration: '22:45',
      views: '3.8K',
      uploadDate: '1 month ago'
    },
    {
      title: 'Jenkins CI/CD Pipeline on AWS EC2',
      description: 'Step-by-step tutorial to set up Jenkins on EC2 with automated deployment pipeline',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoId: 'dQw4w9WgXcQ',
      duration: '28:15',
      views: '5.2K',
      uploadDate: '1 month ago'
    },
    {
      title: 'SonarQube, Nexus & Slack Integration',
      description: 'Integrating code quality tools and notification systems in your CI/CD pipeline',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoId: 'dQw4w9WgXcQ',
      duration: '35:20',
      views: '4.1K',
      uploadDate: '2 months ago'
    },
    {
      title: 'ECS & ECR Continuous Deployment (Kannada)',
      description: 'Complete guide to containerized deployment using AWS ECS and ECR explained in Kannada',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoId: 'dQw4w9WgXcQ',
      duration: '42:10',
      views: '6.7K',
      uploadDate: '3 months ago'
    }
  ];

  openVideo(videoId: string) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  }
}