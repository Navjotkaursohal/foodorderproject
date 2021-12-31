import { Component, OnInit } from '@angular/core';
import { NgxOtpInputConfig } from "ngx-otp-input";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  baseUrl = environment.baseUrl;
  token: any;
  phone: any;
  OneTimePass: any;
  data: any ={
    mobile: "",
    otp: ""
  };
  constructor(private http: HttpClient){}

    
  ngOnInit(): void {
  }

  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 4,
  };

  getMobile(){
    this.phone = document.getElementById('mobile');
    this.data.mobile = '1234567890'
    this.data.otp = '123456'
}
 
login(){
  let url = this.baseUrl + '/partner/signup/';
  console.log(this.data);
  this.http.post(url,this.data).subscribe( res => {
    console.log(res);
    this.token = res;
    localStorage.setItem('token', this.token);
  })
}
}
