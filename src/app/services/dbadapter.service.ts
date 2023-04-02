import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class DBAdapterService {

  //Alle Selektierungen und speicherungen von Daten sollten in diesem service passieren.
  //Logik welche die Daten manipuliert sollte wenn möglich dann jeweils in den Services der Module -> Create, Game etc.
  //gesammelt werden. Reines speichern/lesen der db hier.

  constructor() { }

  public saveToDB<T extends ParseDBObject>(model: T): Promise<T>{

    model.prepareForDB();
    return model.save();

  }

  public getFrage(query: Parse.Query<Frage>): Promise<Frage | undefined>{

    return query.first();

  }

  public getFragen(query: Parse.Query<Frage>): Promise<Frage[]>{
    return query.find();
  }

}
