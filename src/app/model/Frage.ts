import { User } from "parse";
import { ParseDBObject } from "./ParseDBObject";
import { Antwortmoeglichkeit } from "./Antwortmoeglichkeit";

export enum AntwortTyp {
    Multiple_Choice,
    Text,
    Anzahl,
    Zeichnung,
    Nennungen
}

export interface DisplayConfig {
    title_pos: "top" | "bottom" | "middle",
    picture_pos: "", //Noch unklar, vllt x, y position von Ecke oben links?
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
    schwierigkeit: number;
    antwortTyp: AntwortTyp;

    anzahlAntworten: number; //-> Wenn bei Fragen mehrere Nennungen gebraucht werden. 
    //transientes feld, nicht in db speichern sonst redundant
    antwortMoeglichkeiten: Antwortmoeglichkeit[];

    override prepareForAPP(): void {
        this.frage = this.get("frage");
        this.punktevorschlag = this.get("punktevorschlag");
        this.image = this.get("image");
        this.schwierigkeit = this.get("schwierigkeit");

    }
    override prepareForDB(): void {
        this.set("frage", this.frage);
        this.set("punktevorschlag", this.punktevorschlag);
        this.set("image", this.image);
        this.set("schwierigkeit", this.schwierigkeit);
    }


}