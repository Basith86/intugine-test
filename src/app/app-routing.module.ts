import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {  DevicesComponent } from './devices/devices.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'devices', component:  DevicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
