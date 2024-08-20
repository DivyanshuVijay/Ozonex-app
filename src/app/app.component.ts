import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private router = inject(Router);
  private http = inject(HttpClient);

  emailform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  title = 'ozonex-app';

  private apiUrl = 'https://script.google.com/macros/s/AKfycbzKD491RbPRBDEH_ZHUMCLqDM-nSc24dPrcsYcfHjn35pfEDa70oRu8qiJ2dcza3qVneQ/exec'; // Replace with your correct Web App URL

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToRwa() {
    this.router.navigate(['/rwa']);
  }

  submitEmail() {
    if (this.emailform.valid) {
      this.http.post(this.apiUrl, { email: this.emailform.value.email })
        .subscribe({
          next: (response) => {
            console.log('Email submitted successfully:', response);
            alert('Thank you for subscribing!');
            this.emailform.reset();  
          },
          error: (error) => {
            console.error('Error submitting email:', error);
            alert('Failed to subscribe. Please try again.');
          }
        });
    } else {
      alert('Please enter a valid email address.');
    }
  }
}
