import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { gameRouting } from './game.routing';

/*

  Modul in dem alle Komponenten enthalten sind die in einem aktiven spiel benötigt werden.
  Es sollte sich alles auf der selben route abbilden lassen können.
  Route: StifflerCup/game#{beitrittscode?}
  Komponenten:
  1. GameBoard
  2. Leaderboard
  3. AktiveFrage
  4. Antwort
  5. 


*/

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    gameRouting
  ]
})
export class GameModule { }
