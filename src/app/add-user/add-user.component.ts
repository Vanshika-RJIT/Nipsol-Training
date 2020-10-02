import { Component, OnInit,Output,EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../data.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit,OnDestroy {
   name2:string="";
   name3:string="";
    constructor(private route:ActivatedRoute,private data:DataService) { }
  ngOnInit() {
    
    this.name2=this.route.snapshot.params['foo'];

  }
  sendMessage() {
    this.data.sendMessage(this.name3)
  }
  
  ngOnDestroy(){
   
  } 

}