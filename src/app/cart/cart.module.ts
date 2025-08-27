import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CheckOutComponent } from './check-out/check-out.component';



@NgModule({
  declarations: [
    CheckOutComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule
  ]
})
export class CartModule { }
