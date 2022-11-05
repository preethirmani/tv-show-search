import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITvshow } from './itvshow';
import { IShowInfoData } from './ishow-info-data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private httpClient : HttpClient) { 
  
  }

    getShowData(val : any) {
    var result =  this.httpClient.get<IShowInfoData>(` https://api.tvmaze.com/singlesearch/shows?q=girls`);
    console.log('Result:: ',result);
    return result.pipe(map(data => this.transformtoShowData(data)));
  }
  
    private transformtoShowData(data:IShowInfoData) {
    return {
      id: data.id,
      title: data.name,
      language: data.language,
      genre: data.genres,
      rating: data.rating.average,
      summary: data.summary,
      status:data.status,
      img: data.image? data.image.original:'',
      ended: data.ended,
    }
     
    }
}
