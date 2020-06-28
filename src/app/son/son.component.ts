import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {
  @Input() colorChanger: string;
  @Output() theNewColorChanger = new EventEmitter();
  myFavoriteColor = 'cyan'

  constructor() { }

  ngOnInit(): void {
  }

  ChangeTheColor(){
    this.theNewColorChanger.emit(this.myFavoriteColor);
  }

}
