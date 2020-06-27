import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patata-color-time',
  templateUrl: './patata-color-time.component.html',
  styleUrls: ['./patata-color-time.component.css']
})
export class PATATAColorTimeComponent implements OnInit {
  color = ''

  PATATAchanger(yourColor) {
    this.color = yourColor
  }

  reset(){
    this.color= '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
