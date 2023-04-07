import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';
import { DBAdapterService } from './services/dbadapter.service';
import { Frage } from './model/Frage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'StifflerCup';

  constructor(private dbAdapter: DBAdapterService){}
  base64img: string;
  // Modules:
  // 1. Fragen erstellen/editieren/löschen
  // 2. Quiz zusammenstellen
  // 3. Ansicht für das tatsächliche Spiel
  // 4. Login/Registriern
  // 5. Irgendwas zum beitreten
  // 6. Home Seite
  //   -> Auswahl von Bestimmtem obrigem Modul nach einloggen, z.B. 1,2,5
  // Login, breitreten und Home einfach im App module da alles relativ kleine Module sein werden

  ngOnInit(){
    console.log("onInit");
    let image: File;
    let reader: FileReader = new FileReader();

    reader.onload = (file) => {
      this.base64img = file.target.result.toString();

      let p_file = new Parse.File("picture.png", {base64: this.base64img});
      let frage = new Frage();
      frage.image = p_file;
      frage.frage = "Sieht man das?";
      frage.punkte = 100;
      this.dbAdapter.saveToDB(frage);

      // (<HTMLImageElement>document.getElementById("testimage")).src = this.base64img;
    }


    document.querySelector("input").addEventListener('change', (event: Event) => {
      image = (<HTMLInputElement>event.target).files[0]; 
      reader.readAsDataURL(image);
    })

    
    
    
    
    // reader.readAsText(new Blob(["sdf"]), "base64");
  
  }


  

  // file = new Parse.File("testImage", {base64: "sdf"})





}
