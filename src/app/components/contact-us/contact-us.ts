import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-us.html',
  styleUrls: ['./contact-us.css']
})
export class ContactUsComponent {

  form = {
    name: '',
    phone: '',
    email: '',
    message: ''
  };

  submitForm() {
    console.log('Form submitted:', this.form);

    alert('תודה! נחזור אליך בהקדם 🚀');

    this.form = {
      name: '',
      phone: '',
      email: '',
      message: ''
    };
  }
}