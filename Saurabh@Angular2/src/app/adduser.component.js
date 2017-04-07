"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var user_service_1 = require('./services/user.service');
var AddUserComponent = (function () {
    function AddUserComponent(_userService, _route, _router) {
        this._userService = _userService;
        this._route = _route;
        this._router = _router;
        this.user = { personal: {} };
    }
    AddUserComponent.prototype.ngOnInit = function () {
        //the snapshot approach do not work if you navigate from a component to same component (even with different data).
        //This is because Angular doesn't create new component in such case and utilizes old DOM and bindings.
        var name = this._route.snapshot.params['name'];
        //We need to use below approach of params observable if we are changing the data for our current state and reloading it.
        //this._route.params.subscribe((params) => {
        //    let name = params['name'];
        //});
        if (name)
            this.assignFormData(name);
    };
    AddUserComponent.prototype.onSubmit = function (formValue) {
        this._userService.addUser(formValue);
        this._router.navigate(['/users']);
    };
    AddUserComponent.prototype.assignFormData = function (name) {
        //let users = this._userService.getUsers();
        //users.forEach((u:any) => {
        //    if (u.personal && u.personal.name === name)
        //        this.user = u;
        //})
    };
    AddUserComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/templates/addUser.html',
            styles: ["input.ng-invalid{border-left : 5px solid red;}\n             input.ng-valid {border-left : 5px solid green}"]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute, router_1.Router])
    ], AddUserComponent);
    return AddUserComponent;
}());
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=adduser.component.js.map