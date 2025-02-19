import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-form',
  templateUrl: './faq-form.component.html',
  styleUrls: ['./faq-form.component.css']
})
export class FaqFormComponent {
  name: string = '';
  email: string = '';

  onSubmit() {
    alert(`Thank you, ${this.name}! We will contact you at ${this.email}.`);
    this.name = '';
    this.email = '';
  }
}