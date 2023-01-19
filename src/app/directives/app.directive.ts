import { Directive, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
    selector: '[appDirective]'
})
export class AppDirective{

    @Output() public appDirective: EventEmitter<Event> = new EventEmitter();

    constructor() {  }

    @HostListener('click', ['$event']) onCLick(event: Event) {
      this.appDirective.emit(event)
    }

    @HostListener('keyup', ['$event']) onMouseLeave(event: Event) {
      this.appDirective.emit(event)
    }
}
