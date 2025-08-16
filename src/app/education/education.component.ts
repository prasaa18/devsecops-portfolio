import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education = [
    {
      institution: 'Dr. Ambedkar Institute of Technology, Bengaluru',
      degree: 'B.Tech in Electronics and Communication Engineering',
      grade: '8.6 CGPA',
      period: '2017 – 2021'
    },
    {
      institution: 'H.B Govt P.U College, Nellikeri, Kumta',
      degree: 'Class 12 (PCMCs)',
      grade: '88.8%',
      period: '2015 – 2017'
    }
  ];
}