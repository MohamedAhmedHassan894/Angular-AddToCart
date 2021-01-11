import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductProfileComponent } from './components/product-profile/product-profile.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
  { path: "", component: ProductsListComponent },
  { path: "products/:productId", component: ProductProfileComponent},
  { path: "checkout", component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
