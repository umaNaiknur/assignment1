import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  loginForm=new FormGroup({
  umail:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
  upass:new FormControl("",[Validators.required,Validators.minLength(8)])
})
  value: any
get umail(){
  return this.loginForm.get('umail')
}
get upass(){
  return this.loginForm.get('upass')
}
registration(){

  console.log(this.loginForm.value)
  let a=this.loginForm.value.umail
  localStorage.setItem("User-ID",a)
  
  let b=this.loginForm.value.upass
  localStorage.setItem("Password",b)
  
}
constructor(private service:ServiceService ){}
ngOnInit(): void {
 this.value=this.service.matching()
}

  
}
