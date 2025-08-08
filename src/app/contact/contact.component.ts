import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';

  contactInfo = [
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: '+91 9148831446',
      link: 'tel:+919148831446'
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone (Alt)',
      value: '+91 8310483089',
      link: 'tel:+918310483089'
    },
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'prasad.naik@example.com',
      link: 'mailto:prasad.naik@example.com'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Bangalore, India',
      link: ''
    }
  ];

  socialLinks = [
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      url: 'https://github.com/prasaa18',
      color: 'hover:text-gray-900'
    },
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      url: '#',
      color: 'hover:text-blue-600'
    },
    {
      icon: 'fab fa-medium',
      label: 'Medium',
      url: '#',
      color: 'hover:text-black'
    },
    {
      icon: 'fab fa-youtube',
      label: 'YouTube',
      url: '#',
      color: 'hover:text-red-600'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitMessage = 'Thank you for your message! I\'ll get back to you soon.';
        this.contactForm.reset();
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          this.submitMessage = '';
        }, 5000);
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['email']) return 'Please enter a valid email';
      if (field.errors['minlength']) return `${fieldName} is too short`;
    }
    return '';
  }
}