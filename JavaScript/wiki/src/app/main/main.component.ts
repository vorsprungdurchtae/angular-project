import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { DocuInterface } from '../types/docu.interface';

@Component({
  selector: 'app-main',
  templateUrl: './wiki_main.html',
  styleUrls: []
})
export class MainComponent implements OnInit {

  @Input () maintitle: string = "";
  @Input () maincontent: string = "";
  @Input () hidemain: boolean = false;
  @Input () showmultiples: boolean = false;
  @Input () emptysearchbool: boolean = false;

  @Input () parentApi !: any;

  @Input () _pData !: any;

  @Input () multipleDoc: DocuInterface[] = [];

  @Output () keyword_from_main = new EventEmitter<string>();

  @Output () title_to_duplicate: string = "";

  searchInput_main: string = "";

  searchInput_from_key: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  transmitKeyword(){

    this.keyword_from_main.emit(this.searchInput_main)
    console.log("the search keyword from main is transmitted")

  }

  transmitKeywordFromSearch(event){

    console.log("event arrived from Search")
    console.log(event)
    this.keyword_from_main.emit(event)

  }

  trasmitDescriptionFromDup(event){

    this.maincontent = event


  }

}
