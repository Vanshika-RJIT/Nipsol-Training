import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { DataService } from './data.service';
import { CovidMeterComponent } from './covid-meter/covid-meter.component';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import  {firebase} from '../environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { CrudService } from './crud.service';



@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,ReactiveFormsModule,  HttpClientModule,AngularFireModule.initializeApp(firebase.FireStore), AngularFireDatabaseModule,AngularFirestoreModule],
  declarations: [ AppComponent, HelloComponent,routingComponents, CovidMeterComponent],
  bootstrap:    [ AppComponent ],
  providers:[DataService,CrudService]
})
export class AppModule { }
