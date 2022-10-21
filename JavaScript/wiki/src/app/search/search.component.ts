import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output () keyword_from_search = new EventEmitter<string>();

  searchInput_search: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  transmitKeywordFromSearch(){

    this.keyword_from_search.emit(this.searchInput_search)
    console.log("the search keyword from search is transmitted")

  }

}
