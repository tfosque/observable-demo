import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartStoreService {
  private apiTestCart = 'http://localhost:3000/test-carts';

  private cart = new BehaviorSubject<any>([]);
  public cart$ = this.cart.asObservable();

  private cartItem = new BehaviorSubject<any>([]);
  public cartItem$ = this.cartItem.asObservable();

  constructor(private readonly http: HttpClient) {}

  public getCart(): void {
    this.http.get<any>(this.apiTestCart).subscribe((c) => {
      console.log({ c });
    });
    return;
  }

  getCartItem(): void {
    return;
  }

  addCartItem(product: any): void {
    const headers = { 'content-type': 'application/json' };

    const body = JSON.stringify({
      variations: product.variations,
      name: product.name,
      qty: product.qty,
      price: product.price,
      total: 0, // do we calculate here?
      desc: product.desc,
      product_id: product.product_id,
      uom: product.uom,
    });
    console.log({ body });
    // this.http.post<any>(body, { headers: headers });
  }

  removeCartItem(): void {
    return;
  }
}
