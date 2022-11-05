import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITvshow } from './itvshow';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private httpClient : HttpClient) { 
  
  }

    getShowData(val : any) {
    
  }
}
