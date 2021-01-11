import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartHandlerService } from 'src/app/services/cart-handler.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cItems: Product[] = [];
  cartTotal = 0;

  constructor(
    private cartHandler: CartHandlerService
    ) { }

  ngOnInit(): void {
    
    this.cItems = JSON.parse(localStorage.getItem("cItems"));
    this.cartTotal = 0;
    this.cItems.forEach(item => {
      this.cartTotal += (item.quantity * item.price)
    });
  }

}
