import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedPage = 'products';

  onNavigate(page: string) {
    this.loadedPage = page;
    console.log('Page Selected: ', page);
  }
}
