import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SaveGuard } from './Guard/save.guard';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[SaveGuard]},
  {path:'',redirectTo:'users', pathMatch:'full'},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
