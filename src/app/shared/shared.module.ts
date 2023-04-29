import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayFrageComponent } from './display-frage/display-frage.component';



@NgModule({
  declarations: [DisplayFrageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DisplayFrageComponent
  ]
})
export class SharedModule { }
