import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

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
    if (
      !this.form.name.trim() ||
      !this.form.phone.trim() ||
      !this.form.email.trim() ||
      !this.form.message.trim()
    ) {
      alert('יש למלא את כל השדות');
      return;
    }

    const templateParams = {
      name: this.form.name,
      phone: this.form.phone,
      email: this.form.email,
      message: this.form.message
    };

    emailjs.send(
      'service_r8q4t3r',
      'template_28uyj9j',
      templateParams,
      'rzZJZS2ZxZhGQHPNA'
    )
      .then(() => {
        alert('הפנייה נשלחה בהצלחה!');
        this.form = {
          name: '',
          phone: '',
          email: '',
          message: ''
        };
      })
      .catch(err => {
        console.error(err);
        alert('אירעה שגיאה בשליחת ההודעה');
      });
  }


}