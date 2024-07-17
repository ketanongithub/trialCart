import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FilterPipe } from "../shared/filter.pipe";
import { CartService } from '../service/cart.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FilterPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {


  public productList: any;
  filterCategory: any;
  searchKey: string = "";
  searchSubscription!: Subscription;

  constructor(private api: ApiService, private cartService: CartService) { }


  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(res => {
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a: any) => {
          if (a.category === "women's clothing" || a.category === "men's clothing") {
            a.category = "fashion"
          }
          Object.assign(a, { quantity: 1, total: a.price });
        });
        console.log(this.productList)
      });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })

    // this.searchSubscription = this.cartService.search$.subscribe((searchTerm) => {
    //   this.searchKey = searchTerm;
    // });

  }

  filter(category: string) {
    this.filterCategory = this.productList.filter((data: any) => {
      if (data.category === category || category === '') {
        return data
      }
    })
  }

  addtocart(data: any) {
    this.cartService.addtoCart(data)
  }

  

}
