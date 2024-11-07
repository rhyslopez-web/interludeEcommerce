import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/ennvironments/environment'


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient){

  }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get("id");
    console.log("The product ID is ", productId)


    this.http.get(environment.server + "/products/" + productId). subscribe(productData => {
      console.log("Product Data:", productData  )
    })
  }

}
