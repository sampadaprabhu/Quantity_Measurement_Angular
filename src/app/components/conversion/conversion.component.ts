import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.sass']
})
export class ConversionComponent implements OnInit {

  constructor() { }

  @Input() quantityTypeUnit:any[];
  @Input() input:number;
  @Input() output:number;

  ngOnInit(): void {
  }

}
