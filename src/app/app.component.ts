import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  status:boolean=true;
  status1:boolean=false;
  name1:string=" ";
  name4:string=" ";
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
