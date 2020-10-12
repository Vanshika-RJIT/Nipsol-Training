import { Component, OnInit } from '@angular/core';
import { DataCovidService } from '../datacovid.service';

@Component({
  selector: 'app-covid-meter',
  templateUrl: './covid-meter.component.html',
  styleUrls: ['./covid-meter.component.css']
})
export class CovidMeterComponent implements OnInit {
  public countries=[];
  constructor(private dataCovid:DataCovidService) { }

  ngOnInit() {
    this.dataCovid.getCountries().subscribe(data=>this.countries=data);
  }

}