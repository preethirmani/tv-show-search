import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ITvshow } from '../itvshow';
@Component({
  selector: 'app-show-component',
  templateUrl: './show-component.component.html',
  styleUrls: ['./show-component.component.css']
})
export class ShowComponentComponent implements OnInit {
  show: ITvshow
  constructor() { 
    this.show = {
      id: '',
      img: '',
      title: 'The Office',
      genres: 'Comedy',
      rating: 'Top-rated',
      status: 'Ended',
      ended: '2013-05-16',
      summary: 'This mockumentary follows the everyday lives of the manager and the employees he manages.',
      premiered: '2005-03-24',
      language: 'English'
    }
  }

  ngOnInit(): void {
  }

}
