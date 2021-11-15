import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduct } from '../products/products.component';
import { ProductService } from '../services/product.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() onProductAdded: EventEmitter<IProduct> = new EventEmitter();
  name!: string;
  price!: number;
  quantity!: number;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private productService: ProductService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  openSnackBar() {
    this._snackBar.open('Product Added', 'Dismiss', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000,
      panelClass: ['success-snackbar'],
    });
  }

  onSubmit() {
    if (!this.name) {
      alert('Please add a product');
      return;
    }
    const newProduct = {
      name: this.name,
      price: this.price,
      quantity: this.quantity,
    };

    this.onProductAdded.emit(newProduct);

    this.openSnackBar();
  }
}
