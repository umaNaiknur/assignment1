import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../Services/service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm=new  FormGroup({
    umail:new FormControl("",[Validators.required]),
    upass:new FormControl("",[Validators.required])
  })
  value:any
get umail(){
  return this.loginForm.get('umail')
  // localStorage.setItem("mail")
}
get upass(){
  return this.loginForm.get('upass')
  //  localStorage.setItem()
}
login(){
  console.log(this.loginForm.value)
  let c=this.loginForm.value.umail
  localStorage.setItem("Userid",c)
  let d=this.loginForm.value.upass
  localStorage.setItem("Psw",d)
  if(this.service.matching()){
    this.router.navigate(["dashboard"])
    // alert("login succesfull")
    return true
  }else{
    alert("enter valid userid and password")
    return false
  }
 
}

  

constructor(private service:ServiceService,private router:Router ){}
  ngOnInit(): void {
   this.value=this.service.matching()
  }

}
