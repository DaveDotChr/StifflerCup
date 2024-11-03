import { importProvidersFrom, isDevMode } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import Parse from 'parse';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { environment } from './environments/environment';


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

Parse.serverURL = environment.backend;
// Parse.User.allowCustomUserClass(true);