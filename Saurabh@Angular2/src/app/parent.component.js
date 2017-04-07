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
var ParentComponent = (function () {
    function ParentComponent() {
        this.dataForChild = [];
        this.parentData = [
            { name: 'Javscript', childs: ['Angular', 'React', 'Backbone', 'Vue'] },
            { name: 'Mathematics', childs: ['Arithematic', 'Algebra', 'Geometry', 'Trigonometry'] },
            { name: 'Science', childs: ['Physics', 'Chemistry', 'Biology', 'Psychology'] }
        ];
    }
    ParentComponent.prototype.onParentClick = function (obj) {
        this.dataForChild = this.dataForChild.concat(obj.childs);
    };
    ParentComponent.prototype.onEventFromChild = function (value) {
        var _this = this;
        this.parentData.forEach(function (i) {
            if (i.childs.indexOf(value) != -1)
                _this.selectedValue = i.name;
        });
    };
    ParentComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/templates/parent.html',
            styles: [".parentText{\n                margin: 5px 0px}"
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ParentComponent);
    return ParentComponent;
}());
exports.ParentComponent = ParentComponent;
//# sourceMappingURL=parent.component.js.map