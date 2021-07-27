import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { head } from 'lodash';
import { BehaviorSubject, EMPTY } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ProductStoreService } from './product-store.service';

@Injectable({
  providedIn: 'root',
})
export class CartStoreService {
  private apiTestCart = 'http://localhost:3000/test-carts';

  private cart = new BehaviorSubject<any>([]);
  public cart$ = this.cart.asObservable();

  private cartItem = new BehaviorSubject<any>([]);
  public cartItem$ = this.cartItem.asObservable();

  constructor(
    private readonly http: HttpClient,
    private readonly productStore: ProductStoreService
  ) {}
  /* Http get resquest with catchError */
  public getCart(): void {
    this.http
      .get<any>(this.apiTestCart)
      .pipe(
        retry(3),
        catchError((err) => {
          console.log({ err });
          return EMPTY;
        })
      )
      .subscribe((c) => {
        this.cart.next(c);
        console.log({ c });
      });
  }

  getCartItem(): void {
    return;
  }
  /* TODO: Http Post request Need retry and catchError*/
  addCartItem(product: any): void {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain, */*', // !important
    });
    let options = { headers: headers };

    /* remove id when sending a post request */
    const body = JSON.stringify({
      variations: product.variations,
      name: product.name,
      qty: product.qty,
      price: product.price,
      total: 0, // do we calculate here?
      desc: product.desc,
      product_id: product.id,
      uom: product.uom,
    });

    /* Send */
    this.http.post(this.apiTestCart, body, options).subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
      },
      (response) => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      }
    );
  }

  addSelectedProductsToCart(products: any[]) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain, */*', // !important
    });
    let options = { headers: headers };
    const mProducts = this.formatMultipleProducts(products);
    console.log({ mProducts });
    const body = JSON.stringify(mProducts);
    this.http.post(this.apiTestCart, body, options);
  }

  removeCartItem(): void {
    return;
  }

  /* Utils */
  formatMultipleProducts(products: any[]) {
    let formattedProducts: any = [];
    products.map((m) => {
      formattedProducts.push({
        variations: m.variations,
        name: m.name,
        qty: m.qty,
        price: m.price,
        total: 0, // do we calculate here?
        desc: m.desc,
        product_id: m.id,
        uom: m.uom,
      });
    });
    return formattedProducts;
  }
  fetchPostExample() {
    fetch(this.apiTestCart, {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'Truck Driver' }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log({ data });
      });
  }
}
