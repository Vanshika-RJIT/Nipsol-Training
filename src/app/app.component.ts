import { Component, OnInit,  VERSION } from '@angular/core';

import { DataService } from './data.service';
import {dataModel} from './dataModel';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  status:boolean=true;
  status1:boolean=false;
  status2:boolean=false;
  name1:string=" ";
  name3:string="";
  user:dataModel;
   constructor( private data:DataService) { }
 
  ngOnInit(){
    // this.data.teacherMessage$.subscribe(message=>
    // {
    //    this.name3=message;
    // });
      this.data. teacherMessage$.subscribe((user:dataModel)=>
    {
      this.user=user;
      console.log(this.user);
   
    });
  
   
  }
// sendMessage() {
//     this.data.sendMessage(this.name1)
//   }
  
  
  clickEvent()
  {
    this.status=true;
    this.status1=false;
    this.status2=false;

  }
 clickEvent1()
  {
    this.status1=true;
    this.status=false;
    this.status2=false;

  }
  clickEvent2(){
     this.status2=true;
    this.status=false;
    this.status1=false;
  }
 
}
