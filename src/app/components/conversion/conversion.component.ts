import { Component, Input, OnInit } from '@angular/core';
import { QuantityServiceService } from 'src/app/service/QuantityService/quantity-service.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.sass']
})
export class ConversionComponent implements OnInit {

  constructor(private httpPost: QuantityServiceService) { }

  @Input() quantityTypeUnit:any[];
  @Input() input:number;
  @Input() output:number;
  @Input() primaryUnit: string;

  unit: string;
  inputValue: number;
  inputUnit: string;
  outputUnit: string;
  outputValue;
  finalOutput=0;

  ngOnInit(): void {
  }

  getConversionValue(){
    var data={
      unit1: this.inputUnit,
      unit2: this.outputUnit,
      value: this.inputValue,
      unit: this.primaryUnit,
    };
    console.log('HTTPSSDSD',data);
    this.httpPost.convertedValues(data).subscribe(
      data=>{
        console.log(data);
        this.finalOutput=data["convertedValue"];
      },
      error=>{
        console.log(error);
      }
    );
  }

  convertedValue(data){
    console.log(data.target.value);
    this.inputValue=data.target.value;
    console.log('DotNet: ', this.unit);
    this.getConversionValue();
  }

  quantityUnitOne(unitOne){
    console.log('FIRST UNIT',unitOne.target.value);
    this.inputUnit=unitOne.target.value;
    this.getConversionValue();
  }

  quantityUnitTwo(unitTwo){
    console.log('SECOND UNIT',unitTwo.target.value);
    this.outputUnit=unitTwo.target.value;
    this.getConversionValue();
  }
}
