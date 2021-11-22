import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from 'src/app/products/products.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: IProduct[] = [];
  public productList = new BehaviorSubject<IProduct[]>([]);

  constructor() {}

  getProducts() {
    return this.productList.asObservable();
  }

  addToCart(product: IProduct) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
  }

  removeFromCart(product: IProduct) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }
}
