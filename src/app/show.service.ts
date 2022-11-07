import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITvshow } from './itvshow';
import { IShowInfoData } from './ishow-info-data';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private httpClient : HttpClient) { 
  
  }

    getShowData(val : any) {
    console.log('val::' +val);
    var url = `https://api.tvmaze.com/singlesearch/shows?q=${val}`;
    console.log('URL::'+url);
   return  this.httpClient.get<IShowInfoData>(url)
    .pipe(map(data => this.transformtoShowData(data)))
   
  }
  
    private transformtoShowData(data:IShowInfoData) {
     console.log("Inside Transform TO Show Data ");
      return {
        id: data.id,
        title: data.name,
        language: data.language,
        genres: data.genres,
        rating: data.rating.average,
        summary: data.summary,
        status:data.status,
        img: data.image? data.image.original:'',
        ended: data.ended,
        premierd: data.premiered

      }
     
    }
}
