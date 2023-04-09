import { ParseDBObject } from "./ParseDBObject";

export class Frage extends ParseDBObject {

    constructor(){
        //-> Name der "Collection/Tabelle" in Parse setzen.
        super("Frage");
    }

    frage: string = "";
    punkte: number = 0;
    image: Parse.File;


    prepareForAPP(): void {
        this.frage = this.get("frage")
        this.punkte = this.get("punkte")
        this.image = this.get("image")
    }
    prepareForDB(): void {
        this.set("frage", this.frage);
        this.set("punkte", this.punkte);
        this.set("image", this.image);
    }


}