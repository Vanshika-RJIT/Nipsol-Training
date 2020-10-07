import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';
import {DataService} from '../data.service';
import {dataModel} from '../dataModel';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
      user:dataModel;
  constructor(private data:DataService) { }  

  ngOnInit() {
    // this.data. teacherMessage$.subscribe((user:dataModel)=>
    // {
    //   this.user=user;
   
    // })
    // ;
  }   

}  