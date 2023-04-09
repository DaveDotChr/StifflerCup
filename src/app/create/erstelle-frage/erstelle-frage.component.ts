import { Component } from '@angular/core';
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


  constructor(private dbAdapter: DBAdapterService) { }

  ngOnInit() {
    

    let test = new Parse.Object("asdf");
    test.set("count", 4);

    test.save();


    test.get("count")















    let image: File;
    let reader: FileReader = new FileReader();

    reader.onload = (file) => {
      this.base64img = file.target.result.toString();

      let p_file = new Parse.File("picture.jpg", { base64: this.base64img }, "image/jpg");
      let frage = new Frage();
      frage.image = p_file;
      frage.frage = "Sieht man das?";
      frage.punkte = 100;
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


  fragenSelektieren() {
    let query = new Parse.Query(Frage).include("image");
    this.dbAdapter.getFragen(query).pipe(first()).subscribe((fragen: Frage[]) => {
      this.fragen = fragen;
      fragen.map(x => x.prepareForAPP());
      console.log(fragen);
    });
  }

}
