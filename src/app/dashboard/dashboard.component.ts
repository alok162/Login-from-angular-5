import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent {
  name:string = '';
  age:number;
  found:boolean;
  

  constructor(private httpClient:HttpClient, private user:UserService){  }

  onNameKeyUp(event:any){
    this.name = event.target.value;
    this.found = false;
  }

  logOut() {
    this.user.setFalseUserLoggedIn();
  }

  getProfile(){

    this.httpClient.get(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/?name=${this.name}`)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          this.age = data[0].age;
          
          this.found = true;
          console.log(this.name);
          console.log(this.age);
          console.log(data[0].id);
        }
      }
    )
  }
  }

