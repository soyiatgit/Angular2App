import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService }  from './services/user.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/header.html',
  providers : [UserService]
})
export class AppComponent  { name = 'Angular2'; }
