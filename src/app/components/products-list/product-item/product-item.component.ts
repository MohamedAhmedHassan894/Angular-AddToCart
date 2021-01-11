import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartHandlerService } from 'src/app/services/cart-handler.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  inCart = false;
  constructor(private cartHandler: CartHandlerService ) { }

  ngOnInit(): void {
  }

  addProductToCart(){
    this.cartHandler.sendItemToCart(this.product);
    this.inCart = true;
  }

  decQuantity(){
    this.cartHandler.dectemFromCart(this.product);
  }

  incQuantity(){
    this.cartHandler.incItemToCart(this.product);
  }

}
