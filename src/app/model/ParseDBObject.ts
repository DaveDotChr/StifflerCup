abstract class ParseDBObject extends Parse.Object {
    //Alle Objekte die in die Parse db gespeichert werden müssen von dieser Klasse erben

    abstract prepareForDB():void;

    abstract prepareForAPP():void;

}