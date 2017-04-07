import { Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'child',
    templateUrl: 'app/templates/child.html',
    styles: [`.childText{
                margin: 5px 5px;
                display:inline-block}`
    ],
    inputs: ['childDataPassedFromParents'],
    outputs: ['childEvent']
})
export class ChildComponent {
    private childDataPassedFromParents: String[];
    childEvent = new EventEmitter<any[]>();

    onChildClick(name: any) {
        this.childEvent.emit(name);
    }
}