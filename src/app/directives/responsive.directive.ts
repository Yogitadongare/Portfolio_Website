import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appResponsive]'
})
export class ResponsiveDirective {
  /* @HostBinding('class.pc') pc = false;*/
  constructor(private element: ElementRef, private breakpointob: BreakpointObserver
  ) {
    const responsiveDirective = new ResponsiveDirective(element, breakpointob);
    this.breakpointob
      .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {
          for (let breakpoint of Object.keys(result.breakpoints)) {
            if (result.breakpoints[breakpoint]) {
              if (breakpoint == Breakpoints.HandsetPortrait) {
                this.element.nativeElement.classList.remove('pc');

              }
              if (breakpoint == Breakpoints.WebLandscape) {
                this.element.nativeElement.classList.add('pc');

              }


            }
          }
        }
      });
  }

}


