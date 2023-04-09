import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Parse from 'parse';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
Parse.initialize("1337", "");
// Parse.initialize("1337", "", "420"); //-> Nur nutzen wenn wirklich notwendig! 

(Parse as any).serverURL = "http://localhost:1337/parse";
// Parse.User.allowCustomUserClass(true);