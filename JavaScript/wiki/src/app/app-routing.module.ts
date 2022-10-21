import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [

  { path: "", redirectTo: "/front", pathMatch: "full"},
  { path: 'main', component: MainComponent},
  { path: "main", component: SearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
