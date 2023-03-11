import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create.component';
import { ErstelleFrageComponent } from './erstelle-frage/erstelle-frage.component';

//Alle sub componenten werden druch das router Module erzeugt und erhalten die url ../create/{childroute}

const routes: Routes = [{
    path: "", component: CreateComponent, children: [
        {path: "erstelleFrage", component: ErstelleFrageComponent}
    ]
}];

export const creationRouting = RouterModule.forChild(routes);