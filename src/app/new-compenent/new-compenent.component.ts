import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-compenent',
  templateUrl: './new-compenent.component.html',
  styleUrls: ['./new-compenent.component.css']
})
export class NewCompenentComponent implements OnInit {

  color = 'Black' ;
  defaultColor = 'Black'

  yeahPATATA(theColor) {
    this.color = theColor
  }

  patataTime() {
    this.color = this.defaultColor
    document.getElementById("thePATATA").innerText=this.defaultColor
  }

  constructor() { }

  ngOnInit(): void {
  }

}
