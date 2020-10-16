import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';
import {DataService} from '../data.service';
import { CrudService } from "../crud.service";
import {dataModel} from '../dataModel';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
      user:dataModel;
      allUsersArray:any[]=[];
      User:any;
  constructor(private data:DataService,private crudservice:CrudService) { }  
 
  ngOnInit() {
    this.allUsersArray=this.data.allUsersArray;
    console.log(this.allUsersArray);
    this.crudservice.getUsers().subscribe(data=>
    {
      this.User=data.map(e=>
      {
       return {
         id:e.payload.doc.id,
         name:e.payload.doc.data()['name'],
         email:e.payload.doc.data()['email'],
         phone:e.payload.doc.data()['phone'],
         address:e.payload.doc.data()['address'],

       };
      })
         console.log(this.User);
    });
  }  
  deleteCard(record_id)
  {
    this.crudservice.deleteUser(record_id);
  } 

}  