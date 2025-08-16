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
    }
  ];

  openBlogPost(url: string): void {
    window.open(url, '_blank');
  }
}