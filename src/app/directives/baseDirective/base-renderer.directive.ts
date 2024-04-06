import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appBaseRenderer]',
    standalone: true,
})
export class BaseRendererDirective {
    constructor(private renderer: Renderer2, private el: ElementRef) {}

    ngOnInit() {
        this.renderer.setStyle(
            this.el.nativeElement,
            'backgroundColor',
            'blue'
        );
		this.renderer.setStyle(
            this.el.nativeElement,
            'color',
            'white'
        );
    }
}
