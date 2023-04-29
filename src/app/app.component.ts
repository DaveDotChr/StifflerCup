import { Component, OnInit } from '@angular/core';
import { DBAdapterService } from './services/dbadapter.service';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'StifflerCup';


  constructor(private dbAdapter: DBAdapterService,
              private router: Router,
              private route: ActivatedRoute){}
  // Modules:
  // 1. Fragen erstellen/editieren/löschen
  // 2. Quiz zusammenstellen
  // 3. Ansicht für das tatsächliche Spiel
  // 4. Login/Registriern
  // 5. Irgendwas zum beitreten
  // 6. Home Seite
  //   -> Auswahl von Bestimmtem obrigem Modul nach einloggen, z.B. 1,2,5
  // Login, breitreten und Home einfach im App module da alles relativ kleine Module sein werden

  currentPage: string = "Home";


  ngOnInit(){
    
    this.router.events.pipe(filter(x => x instanceof NavigationEnd)).subscribe(() => {
      console.log(this.router.routerState.snapshot.url);
      
      switch(this.router.routerState.snapshot.url){
        case "/create/createCup":
          this.currentPage = "Erstelle Cup";
          break;
        case "/create/createFrage":
          this.currentPage = "Erstelle Frage";
          break;
      }
    })

  }
}
