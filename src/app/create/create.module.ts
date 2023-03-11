import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationComponent } from './creation/creation.component';
import { ErstelleFrageComponent } from './creation/erstelle-frage/erstelle-frage.component';
import { creationRouting } from './create.routing';

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
    CreationComponent,
    ErstelleFrageComponent
  ],
  imports: [
    CommonModule,
    creationRouting
  ]
})
export class CreateModule { }