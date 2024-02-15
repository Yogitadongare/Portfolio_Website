import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrl: './baner.component.css'
})
export class BanerComponent implements OnInit {
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
