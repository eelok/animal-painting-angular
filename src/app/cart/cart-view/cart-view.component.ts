import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  products: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(cartItem => {
      this.products = cartItem;
      this.totalPrice = this.calculateTotalPrice();
    });
  }

  calculateTotalPrice(): number {
    return this.products.reduce((result: number, current: Product) => {
      return result + current.price
    }, 0);
  }

}
