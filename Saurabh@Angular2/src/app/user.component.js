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
var UserComponent = (function () {
    function UserComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.users = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.users = this._userService.getUsers();
        //code for real http data : Observable do not send data unless you subscribe to them
        this._userService.getUsers().subscribe(function (response) { return _this.users.push(response); });
    };
    UserComponent.prototype.onEdit = function (user) {
        this._router.navigate(['/editUsers', user.personal.name]);
    };
    UserComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/templates/userList.html',
            styles: [
                ".person_block {\nbackground-color: rgba(244, 67, 54, 0.82);\npadding: 10px;\ntext-align: center;\nmargin: 10px 0px;\nborder: 1px solid red;\nborder-radius: 5px;\nmin - height : 200px;\n}",
                ".person_image{\n    width: 100px;\n    display: inline-block;\n    height: 100px;\n    vertical-align: top;\n    background-color: beige;\n    border: 1px solid beige;\n    border-radius: 50px;\n}",
                ".person_info{\n    width: 55%;\n    display: inline-block;\n}",
                ".edit_info{\n    width: 5%;\n    display: inline-block;\n    vertical-align: top;\n    color: black;\n    cursor: pointer;\n}"]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map