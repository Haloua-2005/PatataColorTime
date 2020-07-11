import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css']
})
export class AttributeDirectivesComponent implements OnInit {

  color:string
  size:number
  font:string

  firstFont() {
    this.font = 'Friday13'
  }

  secondFont() {
    this.font = 'Times New Roman'
  }

  thirdFont() {
    this.font = 'fantasy'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
