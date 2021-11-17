import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
export interface IProduct {
  id?: number;
  name: string;
  price: number;
  quantity: number;
}
@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'quantity', 'actions'];
  products!: IProduct[];
  showAddProduct: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.productService
    //   .getProducts()
    //   .subscribe((products) => (this.products = products));
  }

  onDeleteProduct(product: IProduct) {
    // this.productService
    //   .deleteProduct(product)
    //   .subscribe(
    //     () => (this.products = this.products.filter((p) => p.id !== product.id))
    //   );
  }

  onAddProduct(product: IProduct) {
    // this.productService
    //   .addProduct(product)
    //   .subscribe((product) => this.products.push(product));
  }

  onUpdateProduct(product: IProduct) {
    // console.log('Edit button pressed!', product.id);
  }

}
