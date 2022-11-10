import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShowService } from '../show.service';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-tv-show-search',
  templateUrl: './tv-show-search.component.html',
  styleUrls: ['./tv-show-search.component.css']
})
export class TvShowSearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  search = new FormControl('', Validators.minLength(3))

  constructor(private showService : ShowService) { }

  ngOnInit(): void {
    this.search.valueChanges
    .pipe(debounceTime(1000)).subscribe(data => {
      if(!this.search.invalid) {
        this.searchEvent.emit(data);
      }
    })
  }
  

}
