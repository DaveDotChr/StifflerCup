import { OverlayModule } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { DBAdapterService } from './services/dbadapter.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [MatToolbar, MatIconButton, MatIcon, MatMiniFabButton, MatDrawerContainer, MatDrawer, RouterLink, MatDrawerContent, RouterOutlet, OverlayModule, LoginComponent]
})
export class AppComponent implements OnInit {
  title = 'StifflerCup';
  isLoginOverlayOpen: boolean = false;


  constructor(private dbAdapter: DBAdapterService,
    private router: Router) { }
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
