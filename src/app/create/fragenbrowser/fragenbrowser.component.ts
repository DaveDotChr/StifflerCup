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
  displayedColumns: string[] = ['frage', 'antwortTyp'];
  expanded_row: Frage | null = null;


  constructor(private dbAdapter: DBAdapterService){

  }
  
  ngOnInit(): void {
    this.fragen$ = this.dbAdapter.getFragenLazy().asObservable();
    




  }

  test(row: Frage){
    this.expanded_row = this.expanded_row == row ? null : row;
    // console.log(this.expanded_row);
    
  }

  test2(element1: any, element2: any){
    console.log(element1);
    console.log(element2);
    
    
    return ""
  }

}
