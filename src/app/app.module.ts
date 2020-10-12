import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { DataService } from './data.service';
import { CovidMeterComponent } from './covid-meter/covid-meter.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent,routingComponents, CovidMeterComponent],
  bootstrap:    [ AppComponent ],
  providers:[DataService]
})
export class AppModule { }
