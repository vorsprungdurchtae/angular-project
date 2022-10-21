import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { SearchPipe } from './serach.pipe';
import { SearchComponent } from './search/search.component';
import { FrontComponent } from './front/front.component';
import { PlotComponent } from './plot/plot.component';

import { InMemoryDataService } from './in-memory-data.service';
import { DocsService } from './services/docs.service';
import { MultiplesComponent } from './multiples/multiples.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchPipe,
    SearchComponent,
    FrontComponent,
    PlotComponent,
    MultiplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [DocsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
