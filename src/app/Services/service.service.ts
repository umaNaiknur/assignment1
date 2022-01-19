import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  
matching(){
 let a=localStorage.getItem('User-ID');
 let b=localStorage.getItem('password');
 let c=localStorage.getItem('Userid');
 let d=localStorage.getItem('psw');
  
  
  if(a===c &&b===d){
    return true
  }
  else{
    return false
  }
  return 
}
  constructor() { }
}
