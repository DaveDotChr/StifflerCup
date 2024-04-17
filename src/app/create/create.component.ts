import { Component, OnInit } from '@angular/core';
import { DBAdapterService } from '../services/dbadapter.service';
import { RouterOutlet } from '@angular/router';

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
