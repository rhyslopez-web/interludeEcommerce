import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { HttpComponent } from './http/http.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

const routes: Routes = [

  {path: "products", component: ProductsComponent},
  {path: "home", component: HomeComponent},
  {path: "example", component: HttpComponent},
  {path: "example/:id", component: ProductDetailsComponent},
  {path: "example/:id/:productName", component: ProductDetailsComponent},
  {path: "login", component: LoginComponent},
  {path: "admin", component: AdminComponent},
  {path: "addnewproduct", component: AddNewProductComponent},
  {path: "updateproduct/:id", component: ProductUpdateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
