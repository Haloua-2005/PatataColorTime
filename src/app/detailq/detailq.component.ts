import { Component, OnInit} from '@angular/core';
import { Item1Component } from '../item1/item1.component';

@Component({
  selector: 'app-details',
  templateUrl: './detailq.component.html',
  styleUrls: ['./detailq.component.css'],

})
export class DetailqComponent implements OnInit {


  imgHide:boolean = true;

  DetailsFirstItem(value:boolean) {
    this.imgHide = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
