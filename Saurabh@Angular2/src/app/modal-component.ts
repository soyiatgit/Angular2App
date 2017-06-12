import {Component} from '@angular/core';


@Component({
    selector: 'app-modal',
    templateUrl: 'app/templates/dialog.html',
    styles: [`
    .modal {
      background: rgba(0,0,0,0.6);
    }
  `]
})
export class ModalComponent {

    public visible = false;
    private visibleAnimate = false;

    constructor() { }

    public show(): void {
        this.visible = true;
        this.visibleAnimate = true;
        //setTimeout(() => this.visibleAnimate = true, 100);
    }

    public hide(): void {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
    }

    public onContainerClicked(event: MouseEvent): void {
        if ((<HTMLElement>event.target).classList.contains('modal')) {
            this.hide();
        }
    }

}
