import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  @Input () frontvisible : boolean;
  @Output () givenKeyword : EventEmitter<string> = new EventEmitter();
  @Output () sendFrontBool : EventEmitter<any> = new EventEmitter();

  message: string = "I am arrived from the front";

  searchInput: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  showkeyword() {

    console.log(this.searchInput);

  }

  transmitKeyword() : void{

    this.frontvisible = false;
    console.log("you got clicked transmitKeyword()");
    this.sendFrontBool.emit(this.searchInput);

  }

}
