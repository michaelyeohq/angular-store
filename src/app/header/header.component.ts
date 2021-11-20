import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() pageSelected = new EventEmitter<string>();
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  onSelect(page: string) {
    this.pageSelected.emit(page);
  }

  onLogOut() {
    this.authService.logout();
  }
}
