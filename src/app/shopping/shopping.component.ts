import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products/products.component';
import { CartService } from '../shared/services/cart.service';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent implements OnInit {
  // placeholder
  products: IProduct[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  addToCart(item: IProduct) {
    this.cartService.addToCart(item);
  }
}
