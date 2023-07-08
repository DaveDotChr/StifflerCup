import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Parse from 'parse';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { isDevMode } from '@angular/core';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));




if(isDevMode()){
  Parse.initialize(environment.appId, environment.jsKey);
   //-> Nur nutzen wenn wirklich notwendig! 
  // Parse.initialize(environment.appId, environment.jsKey, environment.masterKey);
} else {
  Parse.initialize(process.env['Back4App_AppID'] , environment['Back4App_JSKey']);
}
console.log(environment.backend);

(Parse as any).serverURL = environment.backend;
// Parse.User.allowCustomUserClass(true);