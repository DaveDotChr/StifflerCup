import { Cup } from "./Cup";
import { Frage } from "./Frage";
import { ParseDBObject } from "./ParseDBObject";

export class Fragenzuordnung extends ParseDBObject{
  
  //Speichern von maps in Parse funktioniert nicht korrekt, daher dieses workaround;

  frage: Frage;
  punkte: number;
  cup: Cup;
  kategorie: string;
  
  constructor(){
    super("Fragenzuordnung")
  }
  
  override prepareForDB(): void {
    this.set("frage", this.frage);
    this.set("cup", this.cup);
    this.set("kategorie", this.kategorie);

  }
  override prepareForAPP(): void {
    this.kategorie = this.get("kategorie")
    this.cup = this.get("cup")
    this.frage = this.get("frage")
  }

}