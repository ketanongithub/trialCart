import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  //public totalItem : number = 0;
  public searchTerm !: string;
  constructor(public cartService : CartService) { }

  ngOnInit(): void {
    // this.cartService.getProducts()
    // .subscribe(res=>{
    //   this.totalItem = res.length;
    // })

  
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    //this.cartService.search(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}
