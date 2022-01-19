import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../Services/service.service';

@Injectable({
  providedIn: 'root'
})
export class SaveGuard implements CanActivate {
  constructor(private check:ServiceService){}
  canActivate(){
    if(this.check.matching()){
      alert('You are successfully logged in!!!')
return true
    }else{
      alert('Please Enter Valid correct User Id and password!!!')
      return false
    }
  }
   
  }
  


  