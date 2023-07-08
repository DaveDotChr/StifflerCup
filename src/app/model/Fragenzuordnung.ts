import { Cup } from "./Cup";
import { Frage } from "./Frage";
import { ParseDBObject } from "./ParseDBObject";

export class Fragenzuordnung extends ParseDBObject{
  
  //Speichern von maps in Parse funktioniert nicht korrekt, daher dieses workaround;

  constructor(){
    super("Fragenzuordnung")
  }

  public get frage(): Frage {
    return this.get("frage");
  }
  public set frage(value: Frage) {
    this.set("frage", value);
  }

  public get position(): number {
    return this.get("position");
  }
  public set position(value: number) {
    this.set("position", value);
  }

  public get cup(): Cup {
    return this.get("cup");
  }
  public set cup(value: Cup) {
    this.set("cup", value);
  }

  public get kategorie(): string {
    return this.get("kategorie");
  }
  public set kategorie(value: string) {
    this.set("kategorie", value);
  }
  
}