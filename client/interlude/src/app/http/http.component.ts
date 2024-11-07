import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '../interfaces/http.interface';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit{

  productsAPI:any[] = []

  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
    this.http.get<Http>("http://localhost:4600/products").subscribe(response =>{
      console.log(response.productData)
      this.productsAPI = response.productData
    })
  }

}
