import { Component, OnInit,  VERSION } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  status:boolean=true;
  status1:boolean=false;
  name1:string=" ";
  name3:string="";
  constructor(private data:DataService)
  {

  }
  modelChangeFn(value) {
    this.name1 = value;
  }
  ngOnInit(){
    this.name3=this.data.name3;
  }
  clickEvent()
  {
    this.status=true;
    this.status1=false;

  }
 clickEvent1()
  {
    this.status1=true;
    this.status=false;

  }
 
}
