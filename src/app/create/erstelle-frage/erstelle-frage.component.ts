import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { AntwortTyp, Frage } from 'src/app/model/Frage';
import { DBAdapterService } from 'src/app/services/dbadapter.service';
import * as Parse from "parse";
import { Antwortmoeglichkeit } from 'src/app/model/Antwortmoeglichkeit';
import { MatChipListboxChange } from '@angular/material/chips';

@Component({
  selector: 'app-erstelle-frage',
  templateUrl: './erstelle-frage.component.html',
  styleUrls: ['./erstelle-frage.component.scss']
})
export class ErstelleFrageComponent implements OnInit {
  //default Werte
  schwierigkeiten: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  min: number = this.schwierigkeiten[0];
  max: number = this.schwierigkeiten[this.schwierigkeiten.length-1];

  maxImgSize = 0.5 * 1024 * 1024; //In bytes
  base64img: string;
  anz_antworten: number = 0;
  antw_moeglichkeiten: Antwortmoeglichkeit[] = [];
  frage: Frage = new Frage();
  type: typeof AntwortTyp = AntwortTyp;


  constructor(private dbAdapter: DBAdapterService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    //TODO: Muss garantiert werden dass Werte aus den vorherigen Fragen nicht bei wechsel mitgenommen werden.
    // this.frage.antwortTyp = AntwortTyp.Text;
    // this.loadQuestion(this.frage);
    

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


    // document.querySelector("input").addEventListener('change', (event: Event) => {
    //   image = (<HTMLInputElement>event.target).files[0];
    //   if (image.size <= this.maxImgSize) {
    //     reader.readAsDataURL(image);
    //   } else {
    //     console.log("Dein Bild is zu mächtig!");

    //   }
    // })
  }

  addMCAnswer(){
    this.anz_antworten++;
    let antw = new Antwortmoeglichkeit();
    antw.frage = this.frage;
    this.antw_moeglichkeiten.push(antw);
  }

  deselectType(){
    this.frage.antwortTyp = AntwortTyp.Empty;
  }

  removeMCAnswer(antwort: Antwortmoeglichkeit){
    let index = this.antw_moeglichkeiten.indexOf(antwort);
    this.antw_moeglichkeiten.splice(index, 1);
    this.anz_antworten--;
  }

  test(event: MatChipListboxChange){
    this.frage.antwortTyp = event.source.value as AntwortTyp;
    console.log(this.frage.antwortTyp);
    
  }

  async loadQuestion(frage: Frage){
    let query = new Parse.Query(Frage);
    this.frage = await this.dbAdapter.getFrage(query);
    console.log(this.frage);
    
  }

  save(){
    if(this.frage.antwortTyp == AntwortTyp.Multiple_Choice){
      //default wert weil sonst undefined
      this.antw_moeglichkeiten.forEach(a => {
        if(a.multiple_choice_correct == undefined){
          a.multiple_choice_correct = false;
        }
      })
    }
    this.dbAdapter.saveFrage(this.frage, this.antw_moeglichkeiten);
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
      let antworten: Antwortmoeglichkeit[] = [].concat(this.frage.antwortMoeglichkeiten);

      for (let index = this.anz_antworten - antworten.length; index > 0; index--) {
        antworten.push(new Antwortmoeglichkeit());
      }
      this.frage.antwortMoeglichkeiten = antworten;

    }

  }

}
