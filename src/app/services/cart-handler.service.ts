import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartHandlerService {

  subject = new Subject();
  cItems : Product[] = [];
  constructor() { }

  sendItemToCart(product){
    product.quantity = 1;
    this.cItems.push(product);
    localStorage.setItem("cItems", JSON.stringify(this.cItems));
  }

  getcItems(){
    return this.cItems;
  }

  dectemFromCart(product){
    this.subject.next(product);
  }

  incItemToCart(product){
    this.subject.next(product);
  }

  decreaseItemForCart(){
    return this.subject.asObservable();
  }

  increaseItemForCart(){
    return this.subject.asObservable();
  }
}
