
import { Component, OnInit, Input } from '@angular/core';
import { ITvshow } from '../itvshow';
import { ShowService } from '../show.service';
@Component({
  selector: 'app-show-component',
  templateUrl: './show-component.component.html',
  styleUrls: ['./show-component.component.css']
})
export class ShowComponentComponent implements OnInit {
  @Input() show: ITvshow = {
      id: 0,
      img: '',
      title: '',
      genres: [''],
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
  constructor(private showService: ShowService) { 
    
  }

  ngOnInit(): void {
    
  }

  seasonHandler(event:any) {
    
  }

}
