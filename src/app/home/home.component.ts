import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  ngOnInit() {
    this.animateText();
  }

  animateText() {
    const text = "DevSecOps & Secure Cloud Engineer | Java & AWS Enthusiast | CI/CD Specialist";
    const element = document.querySelector('.typewriter');
    if (element) {
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(timer);
        }
      }, 50);
    }
  }

  downloadResume() {
    try {
      const link = document.createElement('a');
      link.href = './assets/resume.pdf';
      link.download = 'Prasad_Shekhar_Naik_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: open in new tab
      window.open('./assets/resume.pdf', '_blank');
    }
  }

  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}