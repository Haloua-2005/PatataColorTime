import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-compenent',
  templateUrl: './new-compenent.component.html',
  styleUrls: ['./new-compenent.component.css']
})
export class NewCompenentComponent implements OnInit {

  name = ""
  age = ""
  job = ""
  status =""

  constructor() { }

  ngOnInit(): void {
  }

}
