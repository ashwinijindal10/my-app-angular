import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { MyaddressComponent } from './myaddress/myaddress.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  { path: 'dashboard', component: MydashboardComponent },
  { path: 'add-address', component: MyaddressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
