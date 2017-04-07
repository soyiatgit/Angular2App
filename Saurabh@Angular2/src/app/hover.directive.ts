import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector : '[hover]'
})
export class HoverDirective{
    constructor(private elem: ElementRef) { }

    @Input('hover') hoverColor: string;

    @HostListener('mouseenter')
    onMouseEnter() {
        this.highlightColor(this.hoverColor || "yellow");
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.highlightColor(null);
    }

    highlightColor(color: string) {
        this.elem.nativeElement.style.backgroundColor = color;
    }
}