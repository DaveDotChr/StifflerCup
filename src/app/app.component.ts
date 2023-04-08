import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';
import { DBAdapterService } from './services/dbadapter.service';
import { Frage } from './model/Frage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'StifflerCup';


  constructor(private dbAdapter: DBAdapterService){}
  // Modules:
  // 1. Fragen erstellen/editieren/löschen
  // 2. Quiz zusammenstellen
  // 3. Ansicht für das tatsächliche Spiel
  // 4. Login/Registriern
  // 5. Irgendwas zum beitreten
  // 6. Home Seite
  //   -> Auswahl von Bestimmtem obrigem Modul nach einloggen, z.B. 1,2,5
  // Login, breitreten und Home einfach im App module da alles relativ kleine Module sein werden

  ngOnInit(){
    
  }
}
