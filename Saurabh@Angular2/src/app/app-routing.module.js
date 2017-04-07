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
var user_component_1 = require('./user.component');
var adduser_component_1 = require('./adduser.component');
var parent_component_1 = require('./parent.component');
var child_component_1 = require('./child.component');
var routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'users', component: user_component_1.UserComponent },
    { path: 'addUsers', component: adduser_component_1.AddUserComponent },
    { path: 'editUsers/:name', component: adduser_component_1.AddUserComponent },
    { path: 'parent-child', component: parent_component_1.ParentComponent },
    //the below wild card path matches any url entered in browser, so if the entered url doesn't match any of the above url; the below component is displayed.
    //Make sure this is at the end else it will always get matched first and no other routes will be looked up for matching. This can be used for displaying 
    //Page not found kind of components
    { path: '**', component: adduser_component_1.AddUserComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.RoutedComponents = [user_component_1.UserComponent, adduser_component_1.AddUserComponent, parent_component_1.ParentComponent, child_component_1.ChildComponent];
//# sourceMappingURL=app-routing.module.js.map