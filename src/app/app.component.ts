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
  name1:any;
  clickEvent()
  {
    this.status=!this.status;
    this.status1=false;

  }
 clickEvent1()
  {
    this.status1=!this.status1;
    this.status=false;

  }

}
