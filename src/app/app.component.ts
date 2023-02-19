import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-course-app';
  headerTitle = 'This is a header title';
  isHeaderVisibile = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

   constructor() {
   }
  OnFormSubmit(): void {
    console.log("submit clicked -- the email address is : ", this.email.value);
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit() : void {
    console.log("ngOnit is called in footer");
  }
}
