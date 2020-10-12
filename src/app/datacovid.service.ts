import {Injectable} from '@angular/core';
import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import {IData} from './data';
import {Observable} from 'rxjs';
import { IWorldData } from './WorldData';
@Injectable(
  {
    providedIn:'root'
  }
)
export class DataCovidService{
  private url:string="https://api.covid19api.com/countries";
  private url1:string="https://api.covid19api.com/world/total";
 
  constructor(private http:HttpClient)
  { 
    
  }
  getCountries():Observable<IData[]>
    {
      return this.http.get<IData[]>(this.url);
    }
    getWorldData():Observable<IWorldData>
    {
      return this.http.get<IWorldData>(this.url1);
    }

}