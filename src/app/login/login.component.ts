import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim='Perfect Banking Partner'
  acnt='enter your account number'

acno=''
pswd=''                          //only in ngModel : put the same value as from the( [(ngModel)]="" )html

constructor(private router:Router,private ds:DataService){}


  ngOnInit(): void {
  }

  login(){
    var acnum=this.acno
    var psw=this.pswd

    const result=this.ds.login(acnum,psw)
    if(result){
      alert('Login success')
      this.router.navigateByUrl('dashboard')
    }

  }

  // login(a:any,b:any){
  // //  console.log(a.value);
  // //  console.log(b.value);
   
   
    
  //   var acnum=a.value
  //   var psw=b.value
  //   let userDetails=this.userDetails
  //   if(acnum in userDetails){
  //     if(psw==userDetails[acnum]['password']){
  //       alert('login success')
  //     }
  //     else{
  //       alert('incorrect password')
  //     }
  //   }
  //   else{
  //     alert('user not exist or incorrect account number')
  //   }
  // }

}
