import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor(private route:ActivatedRoute) { }
   name2:string="";
   name3:string="";
   @Output()childEvent= new EventEmitter();
  ngOnInit() {
    this.name2=this.route.snapshot.params['foo'];
    this.childEvent.emit(this.name3);
  }
   

}