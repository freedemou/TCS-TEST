import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyAlphanumeric]',
})
export class OnlyAlphanumericDirective {
  constructor() {}

  @HostListener('keydown', ['$event'])
  public onKeydown(event: KeyboardEvent) {
    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z0-9]/.test(inp) || event.keyCode === 8 || event.keyCode === 32) {
      return true;
    } else {
      event.preventDefault();

      return false;
    }
  }
}
