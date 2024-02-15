import { Component, HostBinding, OnInit } from '@angular/core';
import { Skill } from '../models/models';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  @HostBinding('class.pc') pcmode = false;
  Skills: Skill[] = [{
    name: 'Java',
    level: 'Intermediate',
    rating: '80',


  }, {
    name: 'HTML,CSS,JS',
    level: 'Expert',
    rating: '90',

  }, {
    name: 'Python',
    level: 'Intermediate',
    rating: '80',


  }, {
    name: 'C++',
    level: 'Intermediate',
    rating: '80',


  }, {
    name: 'Angular',
    level: 'Beginer',
    rating: '50',


  }, {
    name: 'Visual Studio Code',
    level: 'Expert',
    rating: '90',


  },
  ]
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
