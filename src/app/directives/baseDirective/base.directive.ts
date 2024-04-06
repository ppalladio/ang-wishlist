import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appBase]',
    standalone: true,
})
export class BaseDirective {
    constructor(private el: ElementRef) {}

    ngOnInit() {
        this.el.nativeElement.style.backgroundColor = 'red';
    }
}
