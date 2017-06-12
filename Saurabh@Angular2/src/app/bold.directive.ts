import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[myUnless]' })
export class UnlessDirective {
    private hasView = false;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) { }

    @Input() set myUnless(condition: boolean) {
        if (!condition && !this.hasView) {
            console.log('TemplateRef', this.templateRef);
            console.log('ViewContainer', this.viewContainer);
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        } else if (condition && this.hasView) {
            console.log('TemplateRef', this.templateRef);
            console.log('ViewContainer', this.viewContainer);
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}