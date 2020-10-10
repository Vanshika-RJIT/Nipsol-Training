import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {dataModel} from './dataModel';
@Injectable(
  {
    providedIn:'root'
  }
)
export class DataService{
  allUsersArray:any[]=[];
 
  constructor()
  { }
  addUser(user:dataModel)
  {
    this.allUsersArray.push(user);                            

  }

}