import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = 'Perfect Banking Partner'
  acnt = 'enter your account number'

  acno = ''
  pswd = ''

  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]], pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]         //value must be in array

  })
  //only in ngModel : put the same value as from the( [(ngModel)]="" )html

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }


  ngOnInit(): void {
  }

  login() {
    var acnum = this.loginForm.value.acno
    var psw = this.loginForm.value.pswd

    if (this.loginForm.valid) {
      this.ds.login(acnum,psw).subscribe((result:any)=>{
        localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
        localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
        localStorage.setItem('token',JSON.stringify(result.token))
console.log(result.message);

        alert(result.message)
        this.router.navigateByUrl('dashboard')
        },
        result=>{
          alert(result.error.message)
        }
        )
      

    }
    else {
      alert('invalid')
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
