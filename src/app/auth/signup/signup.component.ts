import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  @Output() currentAuth: EventEmitter<string> = new EventEmitter();
  isLoading = false;
  error: string | null = null;
  success: string | null = null;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}
  
  onSubmit(form: NgForm) {
    this.isLoading = true;
    this.authService.signup(form.value).subscribe(
      (res) => {
        console.log(res);
        this.error = null;
        this.success = res.message
        this.isLoading = false;
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.success = null;
        this.isLoading = false;
      }
    );
    form.reset();
  }

  switchToLogIn() {
    this.currentAuth.emit('login');
  }
}
