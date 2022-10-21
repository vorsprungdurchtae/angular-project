import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DocuInterface } from '../types/docu.interface';

@Component({
  selector: 'app-multiples',
  templateUrl: './multiples.component.html',
  styleUrls: ['./multiples.component.css']
})
export class MultiplesComponent implements OnInit {

  @Input () duplicatekeyword: string = "";

  @Input () multipleDocList: DocuInterface[] = [];

  @Output () chosen: DocuInterface[] = [];

  @Input () multipleTitle: string = "";

  @Output () mainContentFromDup = new EventEmitter<string>();

  clicked: boolean = false;

  constructor() { }

  ngOnInit(): void {



  }

  transmitcontentfromdup(val: any) {

    console.log(val)
    this.mainContentFromDup.emit(val)
    this.clicked = true

  }

}
