import { Component, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  color = '';

  changeColor(theColor) {
    this.color=theColor
  }

  constructor() { }

  ngOnInit(): void {
  }

}
