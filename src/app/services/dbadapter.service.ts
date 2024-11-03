import { inject, Injectable } from '@angular/core';
import Parse from 'parse';
import { Subject } from 'rxjs';
import { Antwortmoeglichkeit } from '../model/Antwortmoeglichkeit';
import { Cup } from '../model/Cup';
import { Frage } from '../model/Frage';
import { Fragenzuordnung } from '../model/Fragenzuordnung';
import { ParseDBObject } from '../model/ParseDBObject';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DBAdapterService {

  authService: AuthService = inject(AuthService);
  //Alle Selektierungen und speicherungen von Daten sollten in diesem service passieren.
  //Logik welche die Daten manipuliert sollte wenn möglich dann jeweils in den Services der Module -> Create, Game etc.
  //gesammelt werden. Reines speichern/lesen der db hier.



  constructor() {
    Parse.Object.registerSubclass("Frage", Frage);
    Parse.Object.registerSubclass("Cup", Cup);
    Parse.Object.registerSubclass("Fragenzuordnung", Fragenzuordnung);
    Parse.Object.registerSubclass("Antwortmoeglichkeit", Antwortmoeglichkeit);
  }

  saveToDB<T extends ParseDBObject>(model: T): Promise<T>{
    if(!this.authService.$loggedIn.getValue()){
      console.error("Anonymous users arent allowed to create Objects!");
      throw Error("Anonymous users arent allowed to create Objects!");
    }
    return model.save();
  }

  saveAllToDB<T extends ParseDBObject>(model: T[]){
    model.forEach(x => {
      x.save();
    })
  }

  saveFile(file: Parse.File){

    file.save().then((file) => {
      console.log(file);
      console.log("done");
      
      
    })

  }

  saveFrage(frage: Frage, antwortmöglichkeiten: Antwortmoeglichkeit[]){
    this.saveToDB(frage).then((ret) => {
      antwortmöglichkeiten.forEach(element => {
        element.frage = ret;
        this.saveToDB(element);
      });
    })
  }

  getFrage(query: Parse.Query<Frage>): Promise<Frage | undefined>{

    return query.first();

  }

  getFragen(query: Parse.Query<Frage>): Subject<Frage[]>{
    let result = new Subject<Frage[]>();
    query.find().then((fragen: Frage[]) => {
      result.next(fragen);
    });
    return result;
  }

   getFragenLazy(): Subject<Frage[]> {
    let result = new Subject<Frage[]>();
    let query = new Parse.Query(Frage);
    query.limit(10);
    query.find().then((fragen: Frage[]) => {
      result.next(fragen);
    });
    return result;
  }




}
