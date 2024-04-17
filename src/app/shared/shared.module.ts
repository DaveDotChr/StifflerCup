import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayFrageComponent } from './display-frage/display-frage.component';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
    imports: [
        CommonModule,
        MatDividerModule,
        DisplayFrageComponent
    ],
    exports: [
        DisplayFrageComponent
    ]
})
export class SharedModule { }
