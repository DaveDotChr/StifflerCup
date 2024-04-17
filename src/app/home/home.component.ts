import { Component } from '@angular/core';
import { Frage } from '../model/Frage';
import { MatDivider } from '@angular/material/divider';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [RouterLink, MatDivider]
})
export class HomeComponent {

}
