import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from '../auth/user.model';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

interface IUserData {
  firstName: string;
  lastName: string;
  userName: string;
}

interface IAuthResponseData {
  message: string;
  user: IUserData;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  signUpRoute: string = 'http://localhost:5000/api/users';
  logInRoute: string = 'http://localhost:5000/api/users/authenticate';
  // logInRoute: string = 'http://localhost:5000'
  user = new Subject<User>();
  handleError = (errorRes: { error: { message: string } }) => {
    console.log(errorRes);
    let errMessage = 'An unknown error occured';
    if (!errorRes.error || !errorRes.error.message) {
      return throwError(errMessage);
    } else {
      errMessage = errorRes.error.message;
    }
    return throwError(errMessage);
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {}

  signup(data: any) {
    return this.http
      .post<IAuthResponseData>(this.signUpRoute, data)
      .pipe(catchError(this.handleError));
  }

  login(data: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post<IAuthResponseData>(this.logInRoute, data, {
        headers,
        withCredentials: true,
      })
      .pipe(catchError(this.handleError));
  }

  logout() {
    if (this.cookieService.check('jwt')) {
      this.cookieService.delete('jwt')
      this.router.navigate(['/auth'])
    }
  }
}
