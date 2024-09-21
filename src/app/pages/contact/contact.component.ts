import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor() { }

  // Method to handle form submission
  submitForm(form: any): void {
    console.log('Form submitted:', form.value);
    
    // Here, you can implement logic to send the form data to a backend service
    // For example, using HTTPClient to send the data to an API endpoint
    // this.http.post('https://your-backend-api.com/contact', form.value).subscribe(response => {
    //   console.log('Form successfully submitted', response);
    // });

    // Reset the form after submission
    form.reset();
  }
}
