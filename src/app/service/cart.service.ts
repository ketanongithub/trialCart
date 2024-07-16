import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public search = new BehaviorSubject<string>("");
  cartItemsList:any[] = [];
  //private searchSubject = new BehaviorSubject<string>('');
  //public search$: Observable<string> = this.searchSubject.asObservable();
  constructor() { }

  // search(term: string) {
  //   this.searchSubject.next(term);
  // }

  addItemsinCart(item:any){
    this.cartItemsList.push(item);
    this.getTotalPrice();
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemsList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  getProducts():any[] {
    return this.cartItemsList;
  }

  removeCartItem(product: any){
    this.cartItemsList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemsList.splice(index,1);
      }
    })
    //this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemsList = []
    //this.productList.next(this.cartItemList);
  }
  
}
