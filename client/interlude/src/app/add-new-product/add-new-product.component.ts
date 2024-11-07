import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/ennvironments/environment'



@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent {

  title = " "
  description = " "
  image = " "
  price = " "
  inStock = true
  displayProduct = true
  productAdded: any

  constructor(private http: HttpClient, private router: Router, private forms: FormsModule){}


  addNewProduct(){
    this.http.post(environment.server + "/products", { image: this.image, title: this.title, description: this.description, price: this.price, inStock: this.inStock, displayProduct: this.displayProduct} ).subscribe( res => {

    if(res){
      alert("product has beenn added")
      this.router.navigate(['/admin']);
    }
    else{
      this.productAdded = false
    }


    })
  }


}
