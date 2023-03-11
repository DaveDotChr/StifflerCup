import { RouterModule, Routes } from '@angular/router';
import { CreationComponent } from './creation/creation.component';
import { ErstelleFrageComponent } from './creation/erstelle-frage/erstelle-frage.component';

//Alle sub componenten werden druch das router Module erzeugt und erhalten die url ../create/{childroute}

const routes: Routes = [{
    path: "", component: CreationComponent, children: [
        {path: "erstelleFrage", component: ErstelleFrageComponent}
    ]
}];

export const creationRouting = RouterModule.forChild(routes);