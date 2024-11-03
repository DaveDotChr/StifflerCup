import Parse from 'parse';

export abstract class ParseDBObject extends Parse.Object {
    //Alle Objekte die in die Parse db gespeichert werden müssen von dieser Klasse erben

    constructor(classname: string){
        super(classname);
    }

}