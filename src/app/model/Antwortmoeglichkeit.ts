import { Frage } from "./Frage";
import { ParseDBObject } from "./ParseDBObject";


export class Antwortmoeglichkeit extends ParseDBObject {
    
    //Klasse beinhaltet die Prüfwerte für die Frage und die Art der Antwort

    frage: Frage;
    antworttext: string;
    antwortanzahl: number;
    
    //Für Multiple choice Fragen
    multiple_choice_option: string;
    multiple_choice_correct: boolean;
    
    constructor(){
        super("Antwortmoeglichkeit")
    }
    
    override prepareForDB(): void {
        this.set("frage", this.frage);
        // this.set("frage", this.antwortTyp);
        this.set("antworttext", this.antworttext);
        this.set("antwortanzahl", this.antwortanzahl);
        this.set("multiple_choice_option", this.multiple_choice_option);
        this.set("multiple_choice_correct", this.multiple_choice_correct);
    }
    override prepareForAPP(): void {
        this.antwortanzahl = this.get("antwortanzahl");
        this.antworttext = this.get("antworttext");
        this.frage = this.get("frage");
        this.multiple_choice_option = this.get("multiple_choice_option");
        this.multiple_choice_correct = this.get("multiple_choice_correct");
    }

}