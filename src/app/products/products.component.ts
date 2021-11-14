import { Component, OnInit } from '@angular/core';
export interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const ELEMENT_DATA: IProduct[] = [
  { id: 1, name: 'Whisky', price: 1.0, quantity: 10 },
  { id: 2, name: 'Bourbon', price: 4.0, quantity: 10 },
  { id: 3, name: 'Wine', price: 6.94, quantity: 10 },
  { id: 4, name: 'Vodka', price: 9.01, quantity: 10 },
  { id: 5, name: 'Tequila', price: 10.81, quantity: 10 },
];
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'quantity'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
