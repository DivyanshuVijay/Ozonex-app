import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rwa',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './rwa.component.html',
  styleUrl: './rwa.component.css'
})
export class RwaComponent {
  total_investment:number = 0;
  showThumbsupSection: boolean = false;


  investmentForm = new FormGroup({
    amount : new FormControl(null),
    duration : new FormControl(null)
  })

  constructor() {
    this.investmentForm.valueChanges.subscribe(() => {
      this.calculate_investment_total();
    });

    // Show the thumbsup section after a 5-second delay (5000 ms)
    setTimeout(() => {
      this.showThumbsupSection = true;
    }, 5000); // Adjust the time as needed
  }


  calculate_investment_total() {
    const amount = this.investmentForm.value.amount || 0;
    const duration = this.investmentForm.value.duration || 0;

    this.total_investment = (amount * 15 * duration) / 100;
  }
}
