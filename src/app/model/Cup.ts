import { User } from "parse";
import { Frage } from "./Frage";
import { ParseDBObject } from "./ParseDBObject";
import { Fragenzuordnung } from "./Fragenzuordnung";

export class Cup extends ParseDBObject {

    constructor() {
        //-> Name der "Collection/Tabelle" in Parse setzen.
        super(Cup.name);
        
    }
    
    public get name(): string {
        return this.get("name");
    }
    public set name(value: string) {
        this.set("name", value);
    }

    public get ersteller(): User {
        return this.get("ersteller");
    }
    public set ersteller(value: User) {
        this.set("ersteller", value);
    }

    public get kategorien(): string[] {
        return this.get("kategorien");
    }
    public set kategorien(value: string[]) {
        this.set("kategorien", value);
    }

    private _fragen: Map<string, Fragenzuordnung[]>; // -> zuordnung zu Kategorie
    public get fragen(): Map<string, Fragenzuordnung[]> {
        return this._fragen;
    }
    public set fragen(value: Map<string, Fragenzuordnung[]>) {
        this._fragen = value;
    }

    public get fpk(): number {
        return this.get("fpk");
    }
    public set fpk(value: number) {
        this.set("fpk", value);
    }

    public get punkteskala(): number[] {
        return this.get("punkteskala");
    }
    public set punkteskala(value: number[]) {
        this.set("punkteskala", value);
    }

    getFragen(): Frage[] {
        return [].concat(this.fragen.values());
    }

}