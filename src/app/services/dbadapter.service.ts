import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import { Frage } from '../model/Frage';
import { ParseDBObject } from '../model/ParseDBObject';
import { Subject, map } from 'rxjs';
import { Cup } from '../model/Cup';

@Injectable({
  providedIn: 'root'
})
export class DBAdapterService {

  //Alle Selektierungen und speicherungen von Daten sollten in diesem service passieren.
  //Logik welche die Daten manipuliert sollte wenn möglich dann jeweils in den Services der Module -> Create, Game etc.
  //gesammelt werden. Reines speichern/lesen der db hier.

  prepfn = <T extends ParseDBObject>(model: T[] | T) => {
    let temp = [];
    temp.push(model);
    temp.map(m => m.prepareForAPP());
  }


  constructor() {
    Parse.Object.registerSubclass("Frage",Frage);
    Parse.Object.registerSubclass("Cup", Cup);
  }

  saveToDB<T extends ParseDBObject>(model: T): Promise<T>{

    model.prepareForDB();
    return model.save();

  }

  saveFile(file: Parse.File){

    file.save().then((file) => {
      console.log(file);
      console.log("done");
      
      
    })

  }

  getFrage(query: Parse.Query<Frage>): Promise<Frage | undefined>{

    return query.first();

  }

  getFragen(query: Parse.Query<Frage>): Subject<Frage[]>{
    let result = new Subject<Frage[]>();
    query.find().then((fragen: Frage[]) => {
      // this.prepfn(fragen);
      result.next(fragen);
    });
    return result;
  }



}
