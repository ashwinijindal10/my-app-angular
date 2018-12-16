import {NgModule} from '@angular/core';

import {
  MatSidenavModule,  MatToolbarModule,
  MatListModule,  MatTableModule,
  MatInputModule, MatButtonModule,
  MatSelectModule, MatRadioModule,
  MatCardModule, MatGridListModule,
  MatMenuModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    MatTableModule,
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
    MatTableModule,
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