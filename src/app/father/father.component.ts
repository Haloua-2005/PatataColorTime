import { Component, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  color = '';
  ColorOfMySon = ''

  changeColor(theColor) {
    this.color=theColor
  }

  ColorForDad(MyColor) {
    this.ColorOfMySon = MyColor
  }

  constructor() { }

  ngOnInit(): void {
  }

}
