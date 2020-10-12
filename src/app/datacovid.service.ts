import {Injectable} from '@angular/core';
import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import {IData} from './data';
import {Observable} from 'rxjs';
@Injectable(
  {
    providedIn:'root'
  }
)
export class DataCovidService{
  private url:string="https://api.covid19api.com/countries";
 
  constructor(private http:HttpClient)
  { 
    
  }
  getCountries():Observable<IData[]>
    {
      return this.http.get<IData[]>(this.url);
    }
    // errorHandler(error:HttpErrorResponse)
    // {
    //   return Observable.throw(error.message||"Server Error");

    // }

}