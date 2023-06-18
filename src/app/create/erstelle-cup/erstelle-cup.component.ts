import { Component } from '@angular/core';
import { first } from 'rxjs';
import { Cup } from 'src/app/model/Cup';
import { Frage } from 'src/app/model/Frage';
import { DBAdapterService } from 'src/app/services/dbadapter.service';
import * as Parse from 'parse';
import { Fragenzuordnung } from 'src/app/model/Fragenzuordnung';


@Component({
  selector: 'app-erstelle-cup',
  templateUrl: './erstelle-cup.component.html',
  styleUrls: ['./erstelle-cup.component.scss']
})
export class ErstelleCupComponent {


  constructor(private dbAdapter: DBAdapterService){

  }

  erstelleCup(){
    let cup = new Cup();

    cup.fragen = new Map<string, Fragenzuordnung[]>();
    let query = new Parse.Query(Frage);
    this.dbAdapter.getFragen(query).pipe(first()).subscribe((x) => {
      x.forEach((y) => {
        let fz = new Fragenzuordnung();
        fz.frage = y;
        fz.cup = cup;
        fz.kategorie = "asdfsdf"
        this.dbAdapter.saveToDB(fz);
      })
      


      this.dbAdapter.saveToDB(cup);
    })



  }



}
