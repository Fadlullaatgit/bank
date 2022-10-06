import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user=""

  acnum=""
  pswrd=""
  amnt=""



  acnum1=""
  pswrd1=""
  amnt1=""


  constructor(private ds:DataService) { 
    this.user=this.ds.currentUser
   }             //calling

  ngOnInit(): void {
  }

  deposit(){
    var acnum=this.acnum
    var pswrd=this.pswrd
    var amnt=this.amnt

    const result=this.ds.deposit(acnum,pswrd,amnt)
    if(result){
      alert(`${amnt} is credited,new balance is ${result}`)
    }

  }
  withdraw(){
    var acnum=this.acnum1
    var pswrd=this.pswrd1
    var amnt=this.amnt1

    const result=this.ds.withdraw(acnum,pswrd,amnt)
    if(result){
      alert(`${amnt} is debited,new balance is ${result}`)
    }

  
  }

}
