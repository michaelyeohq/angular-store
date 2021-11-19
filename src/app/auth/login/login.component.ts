import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() currentAuth: EventEmitter<string> = new EventEmitter();
  isLoading = false;
  error: string | null = null;
  success: string | null = null;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.isLoading = true;
    console.log(form.value);
    this.authService.login(form.value).subscribe(
      (res) => {
        // console.log(res);
        this.error = null;
        this.success = res.message;
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

  switchToSignUp() {
    this.currentAuth.emit('signup');
  }
}
