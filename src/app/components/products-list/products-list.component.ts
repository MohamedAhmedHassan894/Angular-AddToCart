import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      localStorage.setItem("productsList", JSON.stringify(this.products));
    });
  }

  filterProducts(sc: string) {
    if(sc != ""){
        this.products = this.products.filter((product) =>
              product.title.toLowerCase().includes(sc.toLowerCase())
        );
    }
  }
}
