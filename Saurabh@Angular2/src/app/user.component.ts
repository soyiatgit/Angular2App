import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService }  from './services/user.service';

@Component({
    templateUrl: 'app/templates/userList.html',
    styles : [
`.person_block {
background-color: rgba(244, 67, 54, 0.82);
padding: 10px;
text-align: center;
margin: 10px 0px;
border: 1px solid red;
border-radius: 5px;
min - height : 200px;
}`,
`.person_image{
    width: 100px;
    display: inline-block;
    height: 100px;
    vertical-align: top;
    background-color: beige;
    border: 1px solid beige;
    border-radius: 50px;
}`,

`.person_info{
    width: 55%;
    display: inline-block;
}`,
`.edit_info{
    width: 5%;
    display: inline-block;
    vertical-align: top;
    color: black;
    cursor: pointer;
}`    ]
})
export class UserComponent implements OnInit {

    users :any = [];

    constructor(private _userService: UserService, private _router : Router) { }

    ngOnInit() {
        //this.users = this._userService.getUsers();
        //code for real http data : Observable do not send data unless you subscribe to them
        this._userService.getUsers().subscribe(response => this.users.push(response));
    }

    onEdit(user : any) {
        this._router.navigate(['/editUsers', user.personal.name]);
    }
}
