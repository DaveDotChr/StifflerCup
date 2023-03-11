import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game.component';

//Alle sub componenten werden druch das router Module erzeugt und erhalten die url ../game/{childroute}

const routes: Routes = [{
    path: "", component: GameComponent
}];

export const gameRouting = RouterModule.forChild(routes);