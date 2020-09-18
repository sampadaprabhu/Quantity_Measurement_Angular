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
  ngOnInit(): void {
  }

}
