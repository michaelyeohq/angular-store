import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
export interface IProduct {
  id?: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'price',
    'quantity',
    'image',
    'actions',
  ];
  products: IProduct[] = [];
  showAddProduct: boolean = false;
  isLoading = false;

  constructor(private productService: ProductService) {}

  // ngOnInit(): void {}

  toggleAddProduct() {
    console.log('Add Product Pressed');
    this.showAddProduct = !this.showAddProduct;
  }

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  onDeleteProduct(product: IProduct) {
    this.productService
      .deleteProduct(product)
      .subscribe(
        () => (this.products = this.products.filter((p) => p.id !== product.id))
      );
  }

  onUpdateProduct(product: IProduct) {
    console.log('Edit button pressed!', product.id);
  }

  onAddProduct(product: IProduct) {
    this.isLoading = true;
    this.productService.addProduct(product).subscribe((product) => {
      this.products.push(product);
      this.isLoading = false;
    });
  }
}
