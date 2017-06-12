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
var ModalComponent = (function () {
    function ModalComponent() {
        this.visible = false;
        this.visibleAnimate = false;
    }
    ModalComponent.prototype.show = function () {
        this.visible = true;
        this.visibleAnimate = true;
        //setTimeout(() => this.visibleAnimate = true, 100);
    };
    ModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    ModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'app-modal',
            templateUrl: 'app/templates/dialog.html',
            styles: ["\n    .modal {\n      background: rgba(0,0,0,0.6);\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal-component.js.map