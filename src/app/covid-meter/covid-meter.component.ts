import { Component, OnInit } from '@angular/core';
import { ITableData } from '../covidtabledata';
import { DataCovidService } from '../datacovid.service';

@Component({
  selector: 'app-covid-meter',
  templateUrl: './covid-meter.component.html',
  styleUrls: ['./covid-meter.component.css']
})
export class CovidMeterComponent implements OnInit {
  public countries=[];
  public worlddata;
  public tabledata:any=[];
  public idselected:string;
  show:boolean=false;
  order: string = 'tabledata.Date';
   OnIdSelected(event:any)
  { this.idselected=event.target.value;
   console.log( this.idselected);
   this.dataCovid.setMessage(this.idselected).subscribe(data2=>this.tabledata=data2);
   console.log(this.tabledata);
   this.show=true;

data2=>this.tabledata=data2
  }
  constructor(private dataCovid:DataCovidService) { }

  ngOnInit() {
    this.dataCovid.getCountries().subscribe(data=>this.countries=data);
    this.dataCovid.getWorldData().subscribe(data1=>this.worlddata=data1);
  }
 

  

}