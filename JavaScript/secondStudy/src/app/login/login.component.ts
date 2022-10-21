import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input () visible1 : boolean = false;
  id :string;
  pwd : string;

  constructor() { }

  ngOnInit(): void {
  }

  tryToLogin() : void{
    if(this.id =='admin' && this.pwd == '1234'){
      this.visible1 = true;
    }   
    console.log(this.id, this.pwd);    
  }
}