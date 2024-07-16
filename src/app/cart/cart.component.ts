import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  public products: any = [];
  public grandTotal !: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
    this.grandTotal = this.cartService.getTotalPrice();

    console.log("CartComponent PRODUCT", this.products);
    console.log("CartComponent grandTotal", this.grandTotal)

  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

}
