import { Component, OnInit } from '@angular/core';
import { DBAdapterService } from './services/dbadapter.service';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AntwortTyp, Frage } from './model/Frage';
import { Antwortmoeglichkeit } from './model/Antwortmoeglichkeit';
import { Cup } from './model/Cup';
import { Fragenzuordnung } from './model/Fragenzuordnung';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'StifflerCup';


  constructor(private dbAdapter: DBAdapterService,
    private router: Router,
    private route: ActivatedRoute) { }
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


  ngOnInit() {

    // let frage = new Frage();
    // let antw1 = new Antwortmoeglichkeit();
    // let antw2 = new Antwortmoeglichkeit();
    // let antw3 = new Antwortmoeglichkeit();


    // frage.frage = "Das ist eine Frage!";
    // frage.antwortTyp = AntwortTyp.Multiple_Choice;
    // frage.punktevorschlag = 500;
    // frage.schwierigkeit = 6;
    
    // frage.save().then(() => {
    //   antw1.antworttext = "Option 1"
    //   antw2.antworttext = "Option 2"
    //   antw3.antworttext = "Option 3"
    //   antw1.multiple_choice_correct = true;
    //   antw2.multiple_choice_correct = false;
    //   antw3.multiple_choice_correct = true;
    //   antw1.frage = frage;
    //   antw2.frage = frage;
    //   antw3.frage = frage;
    //   this.dbAdapter.saveAllToDB([antw1, antw2, antw3]);
    // })

    

    this.router.events.pipe(filter(x => x instanceof NavigationEnd)).subscribe(() => {
      console.log(this.router.routerState.snapshot.url);

      switch (this.router.routerState.snapshot.url) {
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
