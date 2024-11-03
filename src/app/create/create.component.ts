import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DBAdapterService } from '../services/dbadapter.service';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss'],
    standalone: true,
    imports: [RouterOutlet]
})
export class CreateComponent implements OnInit{

  constructor(private dbAdapter: DBAdapterService){

  }
  ngOnInit(): void {
    	      
    

  }


}
