import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-type',
  templateUrl: './choose-type.component.html',
  styleUrls: ['./choose-type.component.sass']
})
export class ChooseTypeComponent implements OnInit {

  constructor() { }

  scale:boolean=false;
  temperature:boolean=false;
  volume:boolean=false;
  length: string='mat-card';
  temp: string='mat-card';
  vol: string='mat-card';

  changeLengthImage: boolean=false;
  changeTemperatureImage: boolean=false;
  changeVolumeImage: boolean=false;

  quantityTypeUnit=[];
  input=0;
  output=0;
  primaryUnit: string;

  onLength(unit): void{
    if(this.length === 'mat-card') 
    {
      this.primaryUnit=unit;
      this.length='mat-card scale-card HOLD-LENGTH';
      this.temp='mat-card';
      this.vol='mat-card';
      this.temperature=false;
      this.volume=false;
      this.changeLengthImage=true;
      this.changeTemperatureImage=false;
      this.changeVolumeImage=false;
      this.quantityTypeUnit=['FEET', 'INCH', 'YARD', 'CENTIMETER'];
      this.input=0;
      this.output=12;
    }
    else{
      this.length='mat-card';
      this.changeLengthImage=false;
    }
  }

  lengthOut(): void{
    if(this.changeLengthImage === true)
    {
      this.scale=true;
    }
    else{
      this.scale=false;
    }
  }

  onTemperature(unit): void{
    if(this.temp === 'mat-card')
    {
      this.primaryUnit=unit;
      this.temp='mat-card temperature-card HOLD-TEMP';
      this.length='mat-card';
      this.vol='mat-card';
      this.scale=false;
      this.volume=false;
      this.changeTemperatureImage=true;
      this.changeLengthImage=false;
      this.changeVolumeImage=false;
      this.quantityTypeUnit=['CELSIUS', 'FAHRENHEIT'];
      this.input=0;
      this.output=32;
    }
    else{
      this.temp='mat-card';
      this.changeTemperatureImage=false;
    }
  }

  temperatureOut(): void{
    if(this.changeTemperatureImage === true)
    {
      this.temperature=true;
    }
    else{
      this.temperature=false;
    }
  }

  onVolume(unit): void{
    if(this.vol === 'mat-card')
    {
      this.primaryUnit=unit;
      this.vol='mat-card volume-card HOLD-VOL';
      this.length='mat-card';
      this.temp='mat-card';
      this.scale=false;
      this.temperature=false;
      this.changeVolumeImage=true;
      this.changeLengthImage=false;
      this.changeTemperatureImage=false;
      this.quantityTypeUnit=['LITRE', 'ML','GALLON'];
      this.input=0;
      this.output=1000;
    }
    else{
      this.vol='mat-card';
      this.changeVolumeImage=false;
    }
  }

  volumeOut(): void{
    if(this.changeVolumeImage === true)
    {
      this.volume=true;
    }
    else{
      this.volume=false;
    }
  }
  ngOnInit(): void {
  }

}
