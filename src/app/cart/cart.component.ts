import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products/products.component';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // placeholder
  products: IProduct[] = [];
  grandTotal: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  removeFromCart(item: IProduct) {
    this.cartService.removeFromCart(item);
  }
}
