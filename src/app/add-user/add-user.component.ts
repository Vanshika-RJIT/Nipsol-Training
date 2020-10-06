import { Component, OnInit,Output,EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../data.service';
import { FormBuilder,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
   name2:string="";
   name3:string="";
   id:number;
   reactiveForm:FormGroup;
    constructor(private fb:FormBuilder, route:ActivatedRoute,private data:DataService) { }
  ngOnInit() {
    //  this.data.teacherMessage$.subscribe(message=>
    // {
    //    this.name2=message;
    // });
    this.reactiveForm=this.fb.group({
       Name:[],
       Email:[],
       Phone:[],
       Address:[]   
    });
    
  }
  submit()
  {
    console.log(this.reactiveForm);
  }
    
  // sendMessage() {
  //   this.data.sendMessage(this.name3)
  // }
}