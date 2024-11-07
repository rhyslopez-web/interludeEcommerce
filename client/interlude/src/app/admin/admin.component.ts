import { Component } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/ennvironments/environment'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  productsAPI:any[] = []
  productID: any;
  displayProduct: any

  constructor(private http:HttpClient, private activatedroute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.http.get<Product>(environment.server + "/products").subscribe(response =>{
        console.log(response.productData)
      this.productsAPI = response.productData
      // this.displayProduct = response.productData[0].displayProduct
    })    
  }

  deleteProduct(product: any) {
    let productId = product.id; 
    
    let confirmDelete = confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) {
      return;
    }
  
    this.http.delete("http://environment.server" + "/products/" + productId).subscribe(
      res => {
        if (res) {
          localStorage.setItem('message', 'Deleted product successfully');
        } else {
          localStorage.setItem('message', 'Failed to delete product. Please try again');
        }
        location.reload();
      },
      error => {
        console.error('Error deleting product:', error);
        localStorage.setItem('message', 'Failed to delete product. Please try again');
      }
    );
  }

  // showProductToggle(){
    
  // }

}
