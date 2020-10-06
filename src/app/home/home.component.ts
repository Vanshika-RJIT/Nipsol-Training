import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {dataModel} from '../dataModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:dataModel;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data. teacherMessage$.subscribe((user:dataModel)=>
    {
      this.user=user;
      console.log(this.user);
   
    });
  }
  }

