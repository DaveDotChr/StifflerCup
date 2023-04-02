import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'StifflerCup';

  constructor(){}
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
    
    let loadedImage = new Image();

    reader.onload = (file) => {
      console.log(file);
      console.log(file.target.result);
      loadedImage.src = file.target.result.toString();
      this.base64img = file.target.result.toString();
      (<HTMLImageElement>document.getElementById("testimage")).src = this.base64img;
      return (result) => { console.log(result);}
    }


    document.querySelector("input").addEventListener('change', (event: Event) => {
      image = (<HTMLInputElement>event.target).files[0]; 
      reader.readAsDataURL(image);
    })

    
    
    
    
    // reader.readAsText(new Blob(["sdf"]), "base64");
  
  }


  

  // file = new Parse.File("testImage", {base64: "sdf"})





}
