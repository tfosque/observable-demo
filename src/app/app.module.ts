import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Material Design Modules
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

// End Material Design
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductImageComponent } from './components/product-image/product-image.component';
import { ProductComponent } from './components/product/product.component';
import { SelectedProductsGroupComponent } from './components/selected-products-group/selected-products-group.component';
import { BoxComponent } from './components/box/box.component';
import { AlertComponent } from './components/alert/alert.component';
import { SelectedButtonComponent } from './components/selected-products-group/selected-button/selected-button.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartItemComponent,
    CartComponent,
    ProductDetailComponent,
    MenuComponent,
    SnackBarComponent,
    ProductsComponent,
    ProductImageComponent,
    ProductComponent,
    SelectedProductsGroupComponent,
    BoxComponent,
    AlertComponent,
    SelectedButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
