import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loadedAuth: string = 'login';
  constructor() { }

  ngOnInit(): void {
  }

  changeAuthPage(signup: string){
    this.loadedAuth = signup;
  }
  

}
