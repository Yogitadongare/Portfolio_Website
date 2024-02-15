import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @HostBinding('class.pc') pcmode = false;
  constructor(private breakpointob: BreakpointObserver) { }


  ngOnInit(): void {
    this.breakpointob
      .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {
          console.log(result)
          for (let breakpoint of Object.keys(result.breakpoints)) {
            if (result.breakpoints[breakpoint]) {
              if (breakpoint === Breakpoints.HandsetPortrait) {
                this.pcmode = false;

              }
              if (breakpoint === Breakpoints.WebLandscape) {
                this.pcmode = true;

              }


            }
          }
        }
      });
  }


}