import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartHandlerService } from 'src/app/services/cart-handler.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: Product;
  constructor(private cartHandler: CartHandlerService) { }

  ngOnInit(): void {
    this.cartHandler.increaseItemForCart().subscribe((product: Product) => {
      this.item.quantity++
    });

    this.cartHandler.decreaseItemForCart().subscribe((product: Product) => {
      this.item.quantity--
    });
  }

}
