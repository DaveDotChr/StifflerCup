import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErstelleFrageComponent } from './erstelle-frage/erstelle-frage.component';
import { creationRouting } from './create.routing';
import { CreateComponent } from './create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ErstelleCupComponent } from './erstelle-cup/erstelle-cup.component';
import { SharedModule } from '../shared/shared.module';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatSliderModule} from '@angular/material/slider'; 
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips'
import { MatIconModule } from '@angular/material/icon';
import { FragenbrowserComponent } from './fragenbrowser/fragenbrowser.component';
import {CdkAccordionModule} from '@angular/cdk/accordion'; 
import {CdkTableModule} from '@angular/cdk/table'; 
/*
  Modul soll das erstellen/editieren und löschen von Fragen und einem kompletten Quiz/StifflerCup umfassen
  Ebenfalls sollte man sich anschauen können welche Fragen existieren um diesen bei sich einbauen zu können
  TODO: Eine Frage von der man sich die Lösung angeschaut hat sollte man nicht mehr beantworten können?
  
  Routes: StifflerCup/create/[frage,cup]
  Komponenten:
  1. Cupersteller -> .../create/cup
  2. FragenEditor -> .../create/frage
  3. Übersicht    -> .../create/uebersicht
*/

@NgModule({
  declarations: [
    ErstelleFrageComponent,
    CreateComponent,
    ErstelleCupComponent,
    FragenbrowserComponent
  ],
  imports: [
    CommonModule,
    creationRouting,
    MatButtonModule,
    MatInputModule,
    SharedModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
    FormsModule,
    MatDividerModule,
    MatChipsModule,
    MatIconModule,
    CdkAccordionModule,
    CdkTableModule
  ]
})
export class CreateModule { }