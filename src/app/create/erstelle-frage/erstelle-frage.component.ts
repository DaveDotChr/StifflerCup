import { ChangeDetectorRef, Component, SimpleChanges } from '@angular/core';
import { first } from 'rxjs';
import { Frage } from 'src/app/model/Frage';
import { DBAdapterService } from 'src/app/services/dbadapter.service';
import * as Parse from "parse";


@Component({
  selector: 'app-erstelle-frage',
  templateUrl: './erstelle-frage.component.html',
  styleUrls: ['./erstelle-frage.component.scss']
})
export class ErstelleFrageComponent {

  fragen: Frage[] = [];
  maxImgSize = 3000000; //In bytes
  base64img: string;
  schwierigkeiten: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  min: number = this.schwierigkeiten[0];
  max: number = this.schwierigkeiten[this.schwierigkeiten.length-1];
  anz_antworten: number = 0;
  frage: Frage = new Frage();


  constructor(private dbAdapter: DBAdapterService, private ref: ChangeDetectorRef) { }

  onchanges

  ngOnInit() {
    
    let image: File;
    let reader: FileReader = new FileReader();

    reader.onload = (file) => {
      this.base64img = file.target.result.toString();

      let p_file = new Parse.File("picture.jpg", { base64: this.base64img }, "image/jpg");
      let frage = new Frage();
      frage.image = p_file;
      frage.frage = "Sieht man das?";
      frage.punktevorschlag = 100;
      this.dbAdapter.saveToDB(frage);

      // (<HTMLImageElement>document.getElementById("testimage")).src = this.base64img;
    }


    document.querySelector("input").addEventListener('change', (event: Event) => {
      image = (<HTMLInputElement>event.target).files[0];
      if (image.size <= this.maxImgSize) {
        reader.readAsDataURL(image);
      } else {
        console.log("Dein Bild is zu mächtig!");

      }
    })
  }

  changeAntwortmenge(event: Event) {
    console.log(event);
    
    if(this.anz_antworten == null){
      console.log("ignore when empty");
      
      return;
    }
    if(this.frage.anzahlAntworten > this.anz_antworten){
      //Fragen werden gelöscht wenn zahl verringert wird.

    } else {
      this.frage.anzahlAntworten = this.anz_antworten;
      let antworten = [].concat(this.frage.antwortvorschlaege);

      for (let index = this.anz_antworten - antworten.length; index > 0; index--) {
        antworten.push("");
      }
      this.frage.antwortvorschlaege = antworten;

    }

  }

  fragenSelektieren() {
    let query = new Parse.Query(Frage).include("image");
    this.dbAdapter.getFragen(query).pipe(first()).subscribe((fragen: Frage[]) => {
      this.fragen = fragen;
      fragen.map(x => x.prepareForAPP());
      console.log(fragen);
    });
  }

}
