import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyaddressComponent } from './myaddress/myaddress.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, MatGridListModule, MatMenuModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    MyaddressComponent,
    MydashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
