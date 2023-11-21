import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //use roting module for child to not to overwrite app-routing.module
  exports: [RouterModule]
})
export class LoginRoutingModule { }
 