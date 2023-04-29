import { User } from "parse";
import { ParseDBObject } from "./ParseDBObject";


export interface DisplayConfig {
    title_pos: "top" | "bottom" | "middle",
    picture_pos: "",
    picture_type: "background" | "extra",
    background_color: "default" | "red" | "grey" | "white"
}


export class Frage extends ParseDBObject {

    constructor(){
        //-> Name der "Collection/Tabelle" in Parse setzen.
        super("Frage");
    }

    frage: string = "";
    punktevorschlag: number = 0;
    image: Parse.File;
    displayConfig: DisplayConfig;
    ersteller: User;
    anzahlAntworten: number; //-> Wenn bei Fragen mehrere Nennungen gebraucht werden. 
    antwortvorschlaege: string[] = []; //-> Gegen antwort Klasse/interface austauschen

    override prepareForAPP(): void {
        this.frage = this.get("frage")
        this.punktevorschlag = this.get("punktevorschlag")
        this.image = this.get("image")
    }
    override prepareForDB(): void {
        this.set("frage", this.frage);
        this.set("punktevorschlag", this.punktevorschlag);
        this.set("image", this.image);
    }


}