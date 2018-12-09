import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { MyaddressComponent } from './myaddress/myaddress.component';

const routes: Routes = [
  { path: 'dashboard', component: MydashboardComponent },
  { path: 'add-address', component: MyaddressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
