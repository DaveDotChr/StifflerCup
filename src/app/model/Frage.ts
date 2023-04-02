class Frage extends ParseDBObject {

    frage: string = "";
    punkte: number = 0;
    image: Parse.File;


    prepareForAPP(): void {
        throw new Error("Method not implemented.");
    }
    prepareForDB(): void {
        throw new Error("Method not implemented.");
    }


}