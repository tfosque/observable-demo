import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartStoreService } from 'src/app/services/cart-store.service';
import { ProductStoreService } from 'src/app/services/product-store.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  @Input() products = new BehaviorSubject<any>([]);
  @Input() label = '';

  selections$ = new BehaviorSubject<any>([]);
  alerts$ = new BehaviorSubject<any>([]);

  constructor(
    private readonly productStore: ProductStoreService,
    private readonly cartStore: CartStoreService
  ) {}

  ngOnInit(): void {
    this.productStore.selectedProducts$.subscribe((selected) => {
      this.selections$.next(selected);
    });
  }

  addUserSelection(product: any): void {
    this.productStore.addToSelectedProducts(product);
  }

  addItemsToCart(): void {
    this.cartStore.addSelectedProductsToCart(this.selections$.getValue());
  }
}
