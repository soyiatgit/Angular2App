import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './services/user.service';
@Component({
    templateUrl: 'app/templates/addUser.html',
    styles: [`input.ng-invalid{border-left : 5px solid red;}
             input.ng-valid {border-left : 5px solid green}`]
})
export class AddUserComponent implements OnInit{
    constructor(private _userService: UserService, private _route: ActivatedRoute, private _router : Router) { }

    private editableName : String;
    private user = { personal: {}};

    ngOnInit() {
        //the snapshot approach do not work if you navigate from a component to same component (even with different data).
        //This is because Angular doesn't create new component in such case and utilizes old DOM and bindings.
        let name = this._route.snapshot.params['name'];
        //We need to use below approach of params observable if we are changing the data for our current state and reloading it.
        //this._route.params.subscribe((params) => {
        //    let name = params['name'];
        //});
        if(name)
            this.assignFormData(name);
    }

    onSubmit(formValue: any) {
        this._userService.addUser(formValue);
        this._router.navigate(['/users']);
    }

    assignFormData(name : String) {
        //let users = this._userService.getUsers();
        //users.forEach((u:any) => {
        //    if (u.personal && u.personal.name === name)
        //        this.user = u;
        //})
        
    }
}
