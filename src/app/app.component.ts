import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'end-end-testing';
  counter : number;


 constructor() {
     this.counter=1;
   }

 }