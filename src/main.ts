import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Parse from 'parse';

import { environment } from './environments/environment';
import { isDevMode, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatDividerModule),
        provideAnimations(),
        provideRouter(routes)
    ]
})
  .catch(err => console.error(err));




if(isDevMode()){
  Parse.initialize(environment.appId, environment.jsKey);
   //-> Nur nutzen wenn wirklich notwendig! 
  // Parse.initialize(environment.appId, environment.jsKey, environment.masterKey);
} else {
  Parse.initialize(environment.appId, environment.jsKey);
}
console.log(environment.backend);

(Parse as any).serverURL = environment.backend;
// Parse.User.allowCustomUserClass(true);