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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
require('rxjs/add/observable/from');
require('rxjs/add/observable/interval');
require('rxjs/add/operator/take');
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.getUserUrl = 'data/data.json';
        this.users = [
            { personal: { name: 'Saurabh', age: 24 }, role: 'Web Developer', hobby: 'Coding' },
            { personal: { name: 'Sunil', age: 24 }, role: 'Manual Tester', hobby: 'Drinking tea' },
            { personal: { name: 'Digvijay', age: 24 }, role: 'Onsite Tester', hobby: 'Gaming' },
            { personal: { name: 'Vinod', age: 24 }, role: 'C# Developer', hobby: 'Flirting' }
        ];
    }
    UserService.prototype.getUsers = function () {
        var _this = this;
        //return this.users;
        //code for real time urls
        //return this._http.get(this.getUserUrl)
        //        .map((response: Response) => response.json())
        //        .catch(this._errorHandler);
        //return Observable..interval(3000).from(this.users);
        return Observable_1.Observable
            .interval(500)
            .take(this.users.length) // end the observable after it pulses N times
            .map(function (i) { return _this.users[i]; });
    };
    UserService.prototype.addUser = function (user) {
        this.users.push(user);
    };
    UserService.prototype._errorHandler = function (error) {
        return Observable_1.Observable.throw(error || "Server error");
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map