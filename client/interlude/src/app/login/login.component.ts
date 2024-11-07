import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/ennvironments/environment'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {
  email = ""
  password = ""
  hideLoginStatus = false
  loginSuccess: any;

  constructor(private http: HttpClient, private router: Router){}


  login(){
    console.log(this.email, this.password);
    this.http.post("http://environment.server" + "/validateuser", { email: this.email, password: this.password} ).subscribe( res => {

    if(res){
      this.router.navigate(['/admin']);
    }
    else{
      this.hideLoginStatus = false;
      this.loginSuccess = res;
    }


    })
  }

  ngOnInit(): void {

  }

}
