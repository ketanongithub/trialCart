import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList = signal<any[]>([]);
  public productList = signal<any[]>([]);
  //private search = signal<string>('');
  public search = new BehaviorSubject<string>("");
  public totalItems = computed(() => this.productList().length);


  getProducts(): any{
    return this.productList.asReadonly();
  }

  addtoCart(product: any) {
    this.cartItemList.update((items) => [...items, product]);
    this.productList.set(this.cartItemList());
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList().forEach((a) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList.update(val => {
      val.splice(product, 1);
      return val;
    });
    this.productList.set(this.cartItemList());

  }

  removeAllCart() {
    this.cartItemList.set([]);
    this.productList.set([]);
  }
}