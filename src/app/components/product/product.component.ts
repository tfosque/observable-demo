import { Component, Input, OnInit } from '@angular/core';
import { CartStoreService } from 'src/app/services/cart-store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: any = '';

  constructor(private readonly cartStore: CartStoreService) {}

  ngOnInit(): void {}

  addItemToCart(item: any) {
    /* TEST: */
    this.cartStore.addCartItem(item);
    return;
  }
}
