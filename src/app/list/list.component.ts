import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output() DataChanger = new EventEmitter;

  theHide:boolean = false;

  DataChange(){
    this.theHide = !this.theHide
    this.DataChanger.emit(this.theHide)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
