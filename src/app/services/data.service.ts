import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


// overload header
const options={
headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class DataService {




  constructor(private http:HttpClient) { 
   }



  register(acno: any, username: any, password: any) {   //any for input type and the type is compulsory

    const data={acno,username,password}

    return this.http.post('http://localhost:3004/register',data)

  }
  login(acno: any, psw: any) {
    const data={acno,pswd:psw}

    return this.http.post('http://localhost:3004/login',data)


  }

  getToken(){
    // fetch the token from localstorage
    const token=JSON.parse(localStorage.getItem('token') || '')

        // 1.append token inside headers

    // 1.2 create header
    let headers=new HttpHeaders()

    // 1.3 append token to header
    if(token){
      
      options.headers=headers.append('token1',token)

    }
    return options


  }

  deposit(acnum: any, pswrd: any, amnt: any) {
    const data={acnum,pswrd,amnt}

    return this.http.post('http://localhost:3004/deposit',data,this.getToken())

  }
  withdraw(acnum: any, pswrd: any, amnt: any) {
    const data={acnum,pswrd,amnt}

    return this.http.post('http://localhost:3004/withdraw',data,this.getToken())

  }
  getTransaction(acno: any) {
    const data={acno}
    return this.http.post('http://localhost:3004/transaction',data,this.getToken())
  }
  deleteAcc(acno:any){
    return this.http.delete('http://localhost:3004/deleteacc/'+acno)
  }
}
