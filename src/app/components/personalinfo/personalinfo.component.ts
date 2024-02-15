import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrl: './personalinfo.component.css'
})
export class PersonalinfoComponent implements OnInit {
  @HostBinding('class.pc') pcmode = false;
  mydata: string[][] = [
    ['Name', 'Yogita Dongare'],
    ['DOB', '16/02/2001'],
    ['Location', 'Fulchincholi Pandharpur'],
    ['Email', 'yogitadongare06@gmail.com']
  ];
  aboutme: string[] = [
    ' A Recent college graduate seeking an Software Developer position in the field of Computer Science .', ' Possesses a strong academic record, having graduated with honors, eager to put my skills to work in a professional setting.', ' Gained valuable experience through internships , College Projects and other from my own projects.'
  ];

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

