import { Frage } from "./Frage";
import { ParseDBObject } from "./ParseDBObject";


export class Antwortmoeglichkeit extends ParseDBObject {
    
    //Klasse beinhaltet die Prüfwerte für die Frage und die Art der Antwort
    constructor(){
        super("Antwortmoeglichkeit")
    }

    public get frage(): Frage {
        return this.get("frage");
    }
    public set frage(value: Frage) {
        this.set("frage", value);
    }

    public get antworttext(): string {
        return this.get("antworttext");
    }
    public set antworttext(value: string) {
        this.set("antworttext", value);
    }
    
    public get antwortanzahl(): number {
        return this.get("antwortanzahl");
    }
    public set antwortanzahl(value: number) {
        this.set("antwortanzahl", value);
    }

    //Für Multiple choice Fragen
    public get multiple_choice_option(): string {
        return this.get("multiple_choice_option");
    }
    public set multiple_choice_option(value: string) {
        this.set("multiple_choice_option", value);
    }

    public get multiple_choice_correct(): boolean {
        return this.get("multiple_choice_correct");
    }
    public set multiple_choice_correct(value: boolean) {
        this.set("multiple_choice_correct", value);
    }    

}