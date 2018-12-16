import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app.routes.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MyaddressComponent } from './myaddress/myaddress.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { MaterialModule } from './material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {DataService} from './Shared/data/data.service';
import {AuthService} from './Shared/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MyaddressComponent,
    MydashboardComponent,
    DashboardComponent,
    WelcomeComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
