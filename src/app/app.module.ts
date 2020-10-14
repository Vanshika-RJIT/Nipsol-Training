import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { DataService } from './data.service';
import { CovidMeterComponent } from './covid-meter/covid-meter.component';
import { NgpSortModule } from "ngp-sort-pipe";


@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,ReactiveFormsModule,  HttpClientModule, NgpSortModule],
  declarations: [ AppComponent, HelloComponent,routingComponents, CovidMeterComponent],
  bootstrap:    [ AppComponent ],
  providers:[DataService]
})
export class AppModule { }
