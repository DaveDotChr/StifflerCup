import { Component, Input } from '@angular/core';
import { Frage } from 'src/app/model/Frage';

@Component({
  selector: 'app-display-frage',
  templateUrl: './display-frage.component.html',
  styleUrls: ['./display-frage.component.scss']
})
export class DisplayFrageComponent {

  //Wiederverwendbare Komponente, welche eine Frage so anzeigt, wie sie später im Spiel aussehen wird.
  // Module die die Komponente verwenden: game und create
  //Sollte möglichst responsive sein da diese in verschiednen größen eingebunden werden wird.

  @Input('display-Frage') frage: Frage;






}
