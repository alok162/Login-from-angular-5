import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  str: string;
  constructor(private router:Router, private user:UserService) { }
 
  ngOnInit() {
  }
  loginUser(e){
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    if(username=='alok' && password=='password') {
      this.user.setUserLoggedIn();
       this.router.navigate(['dashboard'])
    }
    else{
      this.str='Authentication Failed';
    }
  }

}
