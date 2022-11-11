import { Component } from '@angular/core';
import { ITvshow } from './itvshow';
import { ShowService } from './show.service';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-show-search';

  iTVhow: ITvshow = {
    id: 0,
    img: '',
    title: '',
    genres: [],
    rating: 0,
    status: '',
    ended: '',
    summary: '', 
    premiered: '', 
    language: '',
    cast1: '',
    cast2: '',
    cast3: '',
    seasons:[]
  }
  constructor(private showService: ShowService) {}

  doSearch(searchValue : string) {
    const userInput = searchValue.trim();
    this.showService.getShowData(userInput).subscribe(data => {
      this.iTVhow = data
    })
  }
}
