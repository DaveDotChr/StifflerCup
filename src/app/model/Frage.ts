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
        throw new Error("Method not implemented.");
    }
    prepareForDB(): void {
        this.set("frage", this.frage);
        this.set("punkte", this.punkte);
        this.set("image", this.image);
    }


}