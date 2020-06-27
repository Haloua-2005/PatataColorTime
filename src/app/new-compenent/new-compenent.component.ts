import { Component, OnInit } from '@angular/core';
import { Text } from '@angular/compiler/src/i18n/i18n_ast';

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
  photoURL = ""

  constructor() { }

  ngOnInit(): void {
  }

}
