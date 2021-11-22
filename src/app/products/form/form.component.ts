import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduct } from '../products.component';
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
  image!: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar) {}

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
      image: this.image,
    };

    this.onProductAdded.emit(newProduct);

    this.openSnackBar();
  }
}
