import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education = {
    degree: 'B.E. Computer Science',
    institution: 'East Point College of Engineering',
    cgpa: '7.9 / 10',
    year: '2020',
    location: 'Bangalore, India',
    highlights: [
      'Specialized in Software Engineering and Data Structures',
      'Active member of the Computer Science Society',
      'Participated in multiple hackathons and coding competitions',
      'Completed final year project on Cloud Security'
    ]
  };

  achievements = [
    {
      title: 'Academic Excellence',
      description: 'Maintained consistent academic performance throughout the program',
      icon: 'fas fa-trophy'
    },
    {
      title: 'Technical Projects',
      description: 'Developed multiple projects using Java, Python, and web technologies',
      icon: 'fas fa-code'
    },
    {
      title: 'Leadership',
      description: 'Led technical teams in college events and project collaborations',
      icon: 'fas fa-users'
    }
  ];
}