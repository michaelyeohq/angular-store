import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './products/form/form.component';
import { ButtonComponent } from './products/button/button.component';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { ProductsTableComponent } from './products/products-table/products-table.component';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { LoadingComponent } from './loading/loading.component';
import { CookieService } from 'ngx-cookie-service';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { CartComponent } from './cart/cart.component';
import { ShoppingComponent } from './shopping/shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    AboutComponent,
    FormComponent,
    ButtonComponent,
    LoginComponent,
    MainComponent,
    SignupComponent,
    AuthComponent,
    LoadingComponent,
    DropdownDirective,
    CartComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    AppRoutingModule,
  ],
  providers: [MatSnackBarModule, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
