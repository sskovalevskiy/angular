import {Directive, ElementRef, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'violet';
    this.renderer.setStyle(this.element.nativeElement, 'text-align', 'center');

    const {nativeElement} = this.element;
    this.renderer.addClass(nativeElement, 'white-text')
  }
}
