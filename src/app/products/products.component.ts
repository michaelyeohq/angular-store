import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
export interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const ELEMENT_DATA: IProduct[] = [];
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'quantity', 'actions'];
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  onDeleteProduct(product: IProduct) {
    this.productService
      .deleteProduct(product)
      .subscribe(
        () =>
          (this.products = this.products.filter((p) => p.id !== product.id))
      );
  }

  onUpdateProduct(product: IProduct) {
    console.log('Edit button pressed!', product.id);
  }
}
