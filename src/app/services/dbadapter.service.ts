import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import { Frage } from '../model/Frage';
import { ParseDBObject } from '../model/ParseDBObject';

@Injectable({
  providedIn: 'root'
})
export class DBAdapterService {

  //Alle Selektierungen und speicherungen von Daten sollten in diesem service passieren.
  //Logik welche die Daten manipuliert sollte wenn möglich dann jeweils in den Services der Module -> Create, Game etc.
  //gesammelt werden. Reines speichern/lesen der db hier.

  constructor() {
    Parse.Object.registerSubclass("Farge",Frage);
  }

  public saveToDB<T extends ParseDBObject>(model: T): Promise<T>{

    model.prepareForDB();
    return model.save();

  }

  public saveFile(file: Parse.File){

    file.save().then((file) => {
      console.log(file);
      console.log("done");
      
      
    })

  }

  public getFrage(query: Parse.Query<Frage>): Promise<Frage | undefined>{

    return query.first();

  }

  public getFragen(query: Parse.Query<Frage>): Promise<Frage[]>{
    return query.find();
  }

}
