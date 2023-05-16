import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropDownDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') mouseclick() {
    this.isOpen = !this.isOpen;
  }
}
