import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
@Injectable()
export class DataService{
 
  private _teacherMessageSource= new Subject <string>();
  teacherMessage$ = this._teacherMessageSource.asObservable();
  constructor()
  { }
  sendMessage(message:string)
  {
    this._teacherMessageSource.next(message);                            

  }

}