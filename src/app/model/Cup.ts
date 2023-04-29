import { User } from "parse";
import { Frage } from "./Frage";
import { ParseDBObject } from "./ParseDBObject";

export class Cup extends ParseDBObject {

    name: string;
    ersteller: User;
    kategorien: string[];
    fragen: Map<string, Frage[]>; // -> zuordnung zu Kategorie
    fpk: number; //FragenProKategorie
    punkteskala: number[];
    


    constructor() {
        //-> Name der "Collection/Tabelle" in Parse setzen.
        super("Cup");
    }

    



    getFragen(): Frage[] {
        return [].concat(this.fragen.values());
    }

    prepareForAPP(): void {
        this.fpk = this.get("fpk");
        this.fragen = this.get("fragen");
        this.name = this.get("name");
        this.punkteskala = this.get("punkteskala");
        this.kategorien = this.get("kategorien");
        this.ersteller = this.get("ersteller");

    }
    prepareForDB(): void {

        this.set("name", this.name);
        this.set("fpk", this.fpk);
        this.set("fragen", this.fragen);
        this.set("kategorien", this.kategorien);
        this.set("punkteskala", this.punkteskala);

    }


}