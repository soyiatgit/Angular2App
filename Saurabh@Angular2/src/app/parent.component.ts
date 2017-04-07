import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
    templateUrl: 'app/templates/parent.html',
    styles: [`.parentText{
                margin: 5px 0px}`
            ]
})
export class ParentComponent {
    dataForChild: any[] = [];
    selectedValue: string;

    private parentData = [
        { name: 'Javscript', childs: ['Angular', 'React', 'Backbone', 'Vue'] },
        { name: 'Mathematics', childs: ['Arithematic', 'Algebra', 'Geometry', 'Trigonometry'] },
        { name: 'Science', childs: ['Physics', 'Chemistry', 'Biology', 'Psychology'] }
    ]

    onParentClick(obj: any) {
        this.dataForChild = this.dataForChild.concat(obj.childs);
    }

    onEventFromChild(value: string) {
        this.parentData.forEach((i) => {
            if (i.childs.indexOf(value) != -1)
                this.selectedValue = i.name;
        });
    }
}
