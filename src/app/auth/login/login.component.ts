import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Router } from '@angular/router';

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

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    // show loading spinner when sending request
    this.isLoading = true;
    console.log(form.value);
    this.authService.login(form.value).subscribe(
      (res) => {
        this.error = null;
        this.success = res.message;
        // stop loading spinner when response is sent
        this.isLoading = false;
        // check if user is admin
        if (res.user.admin) {
          localStorage.setItem('admin','true')
        }
        // reroute to home
        this.router.navigate(['/home']);
      },
      (errorMessage) => {
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
