import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  loadedPage = 'products';

  constructor() {}

  ngOnInit(): void {}

  onNavigate(page: string) {
    this.loadedPage = page;
    console.log('Page Selected: ', page);
  }
}
