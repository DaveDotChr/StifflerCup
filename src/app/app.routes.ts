import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "create", loadChildren: () => import('./create/create.routing').then(childRoutes => childRoutes.routes)},
  {path: "game", loadChildren: () => import('./game/game.routing').then(childRoutes => childRoutes.routes)},
  {path: "**", redirectTo: ""}
];
