import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";
import {Observable, of, Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit, OnDestroy {
  title = 'my-course-app';
  headerTitle = 'This is a header title';
  isHeaderVisibile = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor(private router: Router) {
  }

  oberservable$: Observable<number> = of(0, 1, 2, 3, 4, 5);
  subscription: Subscription | undefined;
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
    this.displyObservableNumbers();
    console.log("ngOnit is called in footer");
  }
  private displyObservableNumbers() {
    this.subscription = this.oberservable$.subscribe((value) => {
      console.log('you are one displyObservableNumbers function!')
      console.log(value);
    })
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  gotoProfileAndLogCabbage(): void {
    console.log('cabbage');
    this.router.navigate(['/dashboard']);
  }
}
