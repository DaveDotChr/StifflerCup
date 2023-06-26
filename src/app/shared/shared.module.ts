import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayFrageComponent } from './display-frage/display-frage.component';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [DisplayFrageComponent],
  imports: [
    CommonModule,
    MatDividerModule
  ],
  exports: [
    DisplayFrageComponent
  ]
})
export class SharedModule { }
