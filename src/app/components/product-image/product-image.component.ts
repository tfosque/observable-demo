import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss'],
})
export class ProductImageComponent implements OnInit {
  imgUrl: string = `https://lh3.googleusercontent.com/3MlewvL1VW_BybJ1VOWntJ3YMA_1g806OBjhdTWfKj6j5WDkrqzoF5np5fFYSNJsuCy1CuSoyTiZycoVsRwlwnD1T5k4udHZ6bZd=w1064-v0`;
  constructor() {}

  ngOnInit(): void {}
}
