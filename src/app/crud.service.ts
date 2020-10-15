import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable(
  {
    providedIn:'root'
  }
)
export class CrudService{
  constructor(public fireservices:AngularFirestore)
  {

  }
  createUser(Record)
  {
         return this.fireservices.collection('Users').add(Record);

  }
  getUsers()
  {
    return this.fireservices.collection('Users').snapshotChanges();
  }
  deleteUser(record_id)
  {
    this.fireservices.doc('Users/'+record_id).delete();
  }
  
}