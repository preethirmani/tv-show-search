import { Component } from '@angular/core';
import { ShowService } from './show.service';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'tv-show-search';
  constructor(private showService: ShowService) {}
}
