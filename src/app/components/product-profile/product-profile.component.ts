import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-product-profile',
  templateUrl: './product-profile.component.html',
  styleUrls: ['./product-profile.component.css']
})
export class ProductProfileComponent implements OnInit {
  product: Product;
  constructor(
    private route : ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const routeValues = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeValues.get('productId'));
    this.http.get<object>("https://fakestoreapi.com/products/" + productIdFromRoute).subscribe((product: Product) => {
      this.product = product;
    });
  }

}
