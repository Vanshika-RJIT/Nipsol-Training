import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {dataModel} from './dataModel';
@Injectable(
  {
    providedIn:'root'
  }
)
export class DataService{
 
  private _teacherMessageSource= new Subject <dataModel>();
  teacherMessage$ = this._teacherMessageSource.asObservable();
  constructor()
  { }
  addUser(user:dataModel)
  {
    this._teacherMessageSource.next(user);                            

  }

}