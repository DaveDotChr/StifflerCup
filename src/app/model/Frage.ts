import { User } from "parse";
import { ParseDBObject } from "./ParseDBObject";
import { Antwortmoeglichkeit } from "./Antwortmoeglichkeit";

export enum AntwortTyp {
    Multiple_Choice,
    Text,
    Anzahl,
    Zeichnung,
    Nennungen,
    Vervollstaendigen
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
        super(Frage.name);
    }

    get frage(): string {
        return this.get("frage");
    }
    set frage(value: string) {
        this.set("frage", value);
    }

    public get punktevorschlag() : number {
        return this.get("punktevorschlag");
    }    
    public set punktevorschlag(value: number) {
        this.set("punktevorschlag", value)
    }

    public get image() : Parse.File {
        return this.get("image");
    }
    public set image(value : Parse.File) {
        this.set("image", value);
    }
    
    
    private _displayConfig: DisplayConfig;
    /** 
     * @remark "Nicht persistiertes Feld"
     * 
     * */ 
    public get displayConfig(): DisplayConfig {
        return this._displayConfig;
    }
    public set displayConfig(value: DisplayConfig) {
        this._displayConfig = value;
    }

    public get ersteller(): User {
        return this.get("ersteller");
    }
    public set ersteller(value: User) {
        this.set("ersteller", value);
    }

    public get schwierigkeit(): number {
        return this.get("schwierigkeit");
    }
    public set schwierigkeit(value: number) {
        this.set("schwierigkeit", value);
    }

    public get antwortTyp(): AntwortTyp {
        return this.get("antwortTyp");
    }
    public set antwortTyp(value: AntwortTyp) {
        this.set("antwortTyp", value);
    }

    //-> Wenn bei Fragen mehrere Nennungen gebraucht werden. 
    public get anzahlAntworten(): number {
        return this.get("anzahlAntworten");
    }
    public set anzahlAntworten(value: number) {
        this.set("anzahlAntworten", value);
    }

    //transientes feld, nicht in db speichern sonst redundant
    private _antwortMoeglichkeiten: Antwortmoeglichkeit[];
    public get antwortMoeglichkeiten(): Antwortmoeglichkeit[] {
        return this._antwortMoeglichkeiten;
    }
    public set antwortMoeglichkeiten(value: Antwortmoeglichkeit[]) {
        this._antwortMoeglichkeiten = value;
    }

}