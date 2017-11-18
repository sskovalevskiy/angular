import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective implements OnInit {

  @Input() hoverColor: string;
  @Input() defaultColor: string;
  @HostBinding('style.backgroundColor') background: string;

  constructor() {
  }

  ngOnInit(): void {
    this.background = this.defaultColor
  }

  @HostListener('mouseenter') mouseEnter() {
    this.background = this.hoverColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = this.defaultColor;
  }

}
