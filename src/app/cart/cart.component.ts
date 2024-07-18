import { Component, signal } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  //products = signal<any>([]);
  grandTotal = signal<number>(0);

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    
     // this.products.set(this.cartService.getProducts());
      this.grandTotal.set(this.cartService.getTotalPrice());
   
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  emptycart() {
    this.cartService.removeAllCart();
  }
}