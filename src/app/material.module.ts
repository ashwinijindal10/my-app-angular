import {NgModule} from '@angular/core';

import {
  MatSidenavModule,  MatToolbarModule,
  MatListModule,
  MatInputModule, MatButtonModule,
  MatSelectModule, MatRadioModule,
  MatCardModule, MatGridListModule,
  MatMenuModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,   
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,   
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
  ]
})
export class MaterialModule {}