import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAdmin = false;
  @Output() pageSelected = new EventEmitter<string>();
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.isAdmin = localStorage.getItem('admin') == 'true';
  }

  onSelect(page: string) {
    this.pageSelected.emit(page);
  }

  onLogOut() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.isAdmin = false;
    localStorage.removeItem('admin');
  }
}
