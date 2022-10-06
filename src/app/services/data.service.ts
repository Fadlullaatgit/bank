import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser: any
  currentAcno: any

  userDetails: any = {
    1000: { acno: 1000, username: "amal", password: 123, balance: 100000, transaction: [] },
    1001: { acno: 1001, username: "anu", password: 123, balance: 200000, transaction: [] },
    1002: { acno: 1002, username: "joyal", password: 123, balance: 150000, transaction: [] },
    1003: { acno: 1003, username: "anaga", password: 123, balance: 100000, transaction: [] },
  }


  constructor() { }
  register(acno: any, username: any, password: any) {       //any for input type and the type is compulsory
    let userDetails = this.userDetails                  //while further calling we can avoid specific 'this' if we put like this 
    if (acno in userDetails) {                          //checking while registering
      return false
    }
    else {
      userDetails[acno] = { acno, username, password, balance: 0 }
      console.log(userDetails);

      return true
    }
  }
  login(acno: any, psw: any) {
    let userDetails = this.userDetails
    if (acno in userDetails) {
      if (psw == userDetails[acno]['password']) {
        this.currentUser = userDetails[acno]['username']
        this.currentAcno = acno
        return true

      }
      else {
        alert('incorrect password')
        return false
      }
    }
    else {
      alert('user not exist or incorrect account number')
      return false
    }
  }
  deposit(acnum: any, pswrd: any, amnt: any) {
    let userDetails = this.userDetails
    var amount = parseInt(amnt)                     //converting amount in string type into integer type
    if (acnum in userDetails) {
      if (pswrd == userDetails[acnum]['password']) {
        userDetails[acnum]['balance'] += amount
        userDetails[acnum]['transaction'].push({ type: 'Credit', amount })   //we want to put key and value while amount another variable of key:here both are same
        return userDetails[acnum]['balance']
      }
      else {
        alert('incorrect password')
      }
    }
    else {
      alert('user not exist')
      return false
    }
  }
  withdraw(acnum: any, pswrd: any, amnt: any) {
    let userDetails = this.userDetails
    var amount = parseInt(amnt)                     //converting amount in string type into integer type
    if (acnum in userDetails) {
      if (pswrd == userDetails[acnum]['password']) {
        if (userDetails[acnum]['balance'] >= amnt) {
          userDetails[acnum]['balance'] -= amount
          userDetails[acnum]['transaction'].push({ type: 'Debit', amount })
          return userDetails[acnum]['balance']
        }
        else {
          alert('insufficient balance')
          return false
        }
      }
      else {
        alert('incorrect password')
      }
    }
    else {
      alert('user not exist')
      return false
    }
  }
  getTransaction(acno: any) {
    return this.userDetails[acno]['transaction']
  }
}
