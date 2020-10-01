import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor(private route:ActivatedRoute) { }
   name2:any;
  ngOnInit() {
    this.name2=this.route.snapshot.params['foo'];
  }

}