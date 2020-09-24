import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  button1=true;
  button2=false;
  toggle()
  {
          this.button1=!this.button1;
          this.button2=false;

  }
   toggle1()
  {
          this.button2=!this.button2;
          this.button1=false;

  }

}
