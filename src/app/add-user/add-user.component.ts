import { Component, OnInit,Output,EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../data.service';
import {dataModel} from '../dataModel';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
   name2:string="";
   name3:string="";
   id:number;
    constructor(private route:ActivatedRoute,private data:DataService) { }
  ngOnInit() {
    //  this.data.teacherMessage$.subscribe(message=>
    // {
    //    this.name2=message;
    // });
    this.id=0;
    
  }
   model=new dataModel(1," "," ","","");
  // sendMessage() {
  //   this.data.sendMessage(this.name3)
  // }
  onSubmit()
  {
    console.log('this.model.name'+this.model.name);
    console.log('this.model.email'+this.model.email);
     console.log('this.model.phone'+this.model.phone);
    console.log('this.model.address'+this.model.address);
  }

  newData()
  {
    this.id=this.id+1;
   this.model = new dataModel(this.id, '', '','',',');
  }

}