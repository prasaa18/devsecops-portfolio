import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogPosts = [
    {
      title: 'One Directory to Rule Them All: AWS Console Workspaces Login with Active Directory',
      description: 'A comprehensive guide on setting up AWS Console Workspaces with Active Directory integration for centralized authentication and management.',
      url: 'https://medium.com/@prasadsnaik18/one-directory-to-rule-them-all-aws-console-workspaces-login-with-active-directory-780ce26e5e68',
      date: new Date(),
      tags: ['AWS', 'Active Directory', 'Workspaces', 'Authentication']
    },
    {
      title: 'Hardening Docker Images & AMIs with Automation: A Real-World DevSecOps Approach',
      description: 'Learn how to implement automated security hardening for Docker images and AMIs using DevSecOps practices and tools.',
      url: 'https://medium.com/@prasadsnaik18/hardening-docker-images-amis-with-automation-a-real-world-devsecops-approach-06e6a8279047',
      date: new Date(),
      tags: ['DevSecOps', 'Docker', 'AMI', 'Security', 'Automation']
    },
    {
      title: 'Real-Time AWS Monitoring with CloudWatch, Systems Manager Parameters and Notifications',
      description: 'Comprehensive guide to setting up real-time monitoring and alerting in AWS using CloudWatch and Systems Manager.',
      url: 'https://medium.com/@prasadsnaik18/real-time-aws-monitoring-with-cloudwatch-systems-manager-parameters-and-notifications-093a3a1ea7ce',
      date: new Date(),
      tags: ['AWS', 'CloudWatch', 'Monitoring', 'Systems Manager', 'Notifications']
    }
  ];

  openBlogPost(url: string): void {
    window.open(url, '_blank');
  }
}