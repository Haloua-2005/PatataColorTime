import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Personne } from './thePersonClass';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.css']
})
export class Item1Component implements OnInit {

  @Output() ShowHideItem1 = new EventEmitter;

  isHidden1:boolean =true;

  item1Details = new Personne (542135454,"Jissey",
  "Micheal",26,14585,"Designer","(reached)")

  ShowHideFirstItem() {
    this.isHidden1 = !this.isHidden1
    this.ShowHideItem1.emit(this.isHidden1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
