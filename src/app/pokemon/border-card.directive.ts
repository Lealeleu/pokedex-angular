import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  // Propriété de base
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#BE4E51';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    // On appelle nos propriétés
    this.setBorder(this.initialColor)
    this.setHeight(this.defaultHeight);
  }

  @Input('pkmnBorderCard') borderColor: string; // alias

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

  setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`;
  }


}
