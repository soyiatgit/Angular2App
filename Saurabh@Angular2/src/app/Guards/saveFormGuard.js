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
var SaveFormsGuard = (function () {
    function SaveFormsGuard() {
    }
    //implement the below method from CanDeactivate interface, the method gets three params as shown below,
    // call any method of component instance to provide a boolean or promise or Observable return value.
    // The return IDBCursorWithValue should BeforeUnloadEvent of type : Observable<boolean>|Promise<boolean>|boolean
    SaveFormsGuard.prototype.canDeactivate = function (component, route, state) {
        return component.isAnyDataUnsaved();
    };
    SaveFormsGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SaveFormsGuard);
    return SaveFormsGuard;
}());
exports.SaveFormsGuard = SaveFormsGuard;
//# sourceMappingURL=saveFormGuard.js.map