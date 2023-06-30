import { Component, OnInit } from '@angular/core';
import { Observable, first } from 'rxjs';
import { AntwortTyp, Frage } from 'src/app/model/Frage';
import { DBAdapterService } from 'src/app/services/dbadapter.service';

@Component({
  selector: 'app-fragenbrowser',
  templateUrl: './fragenbrowser.component.html',
  styleUrls: ['./fragenbrowser.component.scss']
})
export class FragenbrowserComponent implements OnInit {
  
  fragen$: Observable<Frage[]>;
  antwortTyp: typeof AntwortTyp = AntwortTyp;

  constructor(private dbAdapter: DBAdapterService){

  }
  
  ngOnInit(): void {

    this.fragen$ = this.dbAdapter.getFragenLazy().asObservable();
    
  }




}
