import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { DataService } from './data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent,routingComponents],
  bootstrap:    [ AppComponent ],
  providers:[DataService]
})
export class AppModule { }
