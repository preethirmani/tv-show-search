import { Component, OnInit } from '@angular/core';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-tv-show-search',
  templateUrl: './tv-show-search.component.html',
  styleUrls: ['./tv-show-search.component.css']
})
export class TvShowSearchComponent implements OnInit {

  constructor(private showService : ShowService) { }

  ngOnInit(): void {
    this.showService.getShowData('Girls').subscribe(data => {
      console.log('Data in component',data);
    })
  }
  

}
