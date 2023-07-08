import { Component } from '@angular/core';
import { Frage } from '../model/Frage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  async test1(){
    let query = new Parse.Query(Frage);
    await query.first();
  }

  async test2(){
    let query = new Parse.Query("Frage");
    await query.first();
  }

}
