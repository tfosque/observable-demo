import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartStoreService } from 'src/app/services/cart-store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  private cart = new BehaviorSubject<any>([]);
  public readonly cart$ = this.cart.asObservable();

  constructor(private cartStore: CartStoreService) {}

  ngOnInit(): void {
    this.cartStore.getCart();
  }

  getCart() {
    return;
  }

  removeItemFromCart(item: any) {
    return;
  }

  clearCart() {
    return;
  }
}
