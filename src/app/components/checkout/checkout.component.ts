import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartHandlerService } from 'src/app/services/cart-handler.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items: Product[] = [];

  submitted = false;
  checkoutTotal = 0;
  constructor(private cartHandler: CartHandlerService) { }

  ngOnInit(): void {
    this.items = JSON.parse(localStorage.getItem("cItems"));
    this.calTotal();
  }
submitCheckout(){
    this.submitted = true;
  }

  calTotal() {
    this.checkoutTotal = 0;
    this.items.forEach(item => {
      this.checkoutTotal += (item.quantity * item.price)
    });
  }
 
  removeFromCart(product) {
    this.items.splice(product, 1);
    localStorage.setItem("cItems", JSON.stringify(this.items));
  }
  decQuantity(product){
    for(let i in this.items){
      if(this.items[i].id === product.id){
        if(this.items[i].quantity > 1){
          this.items[i].quantity--
        }
        localStorage.setItem("cItems", JSON.stringify(this.items));
        this.calTotal();
        break;
      }
    }
  }

  incQuantity(product){
    for(let i in this.items){
      if(this.items[i].id === product.id){
        this.items[i].quantity++
        localStorage.setItem("cItems", JSON.stringify(this.items));
        this.calTotal();
        break;
      }
    }
  }

 

}
