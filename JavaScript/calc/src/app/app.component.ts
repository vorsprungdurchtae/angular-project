import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'missionary';
  public number1 : number;
  public number2 : number;
  public result : number;

  public add(){
    this.result = this.number1 + this.number2
}

}

