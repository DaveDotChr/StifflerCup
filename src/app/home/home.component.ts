import { Component } from '@angular/core';
import { Frage } from '../model/Frage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


   test1(){
    let query = new Parse.Query(Frage);
     query.first().then(x => console.log(x));
     ;
  }

   test2(){
    let query = new Parse.Query("Frage");
     query.first().then(x => console.log(x))
  }

}
