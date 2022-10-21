import { Component, OnInit, OnDestroy, AfterContentInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DocuInterface } from 'src/app/types/docu.interface';
import { Observable } from 'rxjs';
import { IntegerType } from 'mongodb';
import { DocsService } from './services/docs.service';

@Component({
  selector: 'app-root',
  templateUrl: './wiki_front.html',
  styleUrls: []
})
export class AppComponent{

  docs: DocuInterface[] = [];
  names: string[] = [];
  results: DocuInterface[] = [];

  title = "instant-search";

  keyfromfront: string = "";

  keyword_correctly_given: boolean = false;
  clicked: boolean = false;
  initial_state: boolean = true;
  not_now: boolean = false;

  frontBool: boolean = true;
  mainBool: boolean = false;
  emptysearchBool: boolean = false;
  duplicatedBool: boolean = false;
  hideinfinitely: boolean = false;

  url: string = "http://localhost:3000/contents"

  len: IntegerType = 0;

  maintitle: string = "";
  maincontent: string = "";

  listfound: boolean = false;

  parentMsg: string ="";

  constructor(private route:ActivatedRoute, 
              public router:Router, 
              private http: HttpClient,
              private docsService: DocsService){}

  ngOnInit(): void{

    this.docsService.getDocs().subscribe( (docs: DocuInterface[]) => {

      this.docs = docs

    })

  }

  keywordAlert(){

    var formschinp = document.getElementById("form-search");
    var btnschinp = document.getElementById("searchBtn")

    formschinp?.addEventListener("keypress", function(event){

      if (event.key == "Enter"){
        
        btnschinp?.click();
        event.stopImmediatePropagation();
        
      }
    });
    
    btnschinp?.addEventListener("click", function(event){

      event.preventDefault();
      alert("you will search for " + ((document.getElementById("form-search") as HTMLInputElement).value));
      event.stopImmediatePropagation();

    });

  };

  toMain(){

    this.router.navigate(['../main']);
    
  };

  getEventFromFront(event){

    this.results = this.docs.filter(x => {return x.name.toLowerCase().replace(/\s/g, "") == event.toLowerCase().replace(/\s/g, "")})
    
    if(this.results.length == 1){

      this.mainBool = true;
      this.emptysearchBool = false;
      this.duplicatedBool = false;
      console.log(this.results[0].description)
      this.maintitle = this.results[0].name
      this.maincontent = this.results[0].description

    } else if(this.results.length == 0){

      this.mainBool = true;
      this.emptysearchBool = true;
      this.duplicatedBool = false;


    } else {

      console.log("the given artikel includes more than one article")
      this.mainBool = true;
      this.emptysearchBool = false;
      this.duplicatedBool = true;
      this.maintitle = this.results[0].name

    }

  }

  addDoc(na: string, desc: string): void {

    this.docsService.addDocs(na, desc).subscribe(newDoc => {

      this.docs.push(newDoc)

    })
    console.log("added a new doc")
    
  }

  removeDoc(na: string): void {

    this.docsService.removeDocs(na).subscribe(()=>{

      this.docs = this.docs.filter(docs => docs.name !== na)

    }) 

    console.log("deleted from backend")

  }
  
}

