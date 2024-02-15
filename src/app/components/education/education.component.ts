import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  educationlist: Education[] = [
    {
      Institute: 'SVERI’s College of Engineering, Pandharpur',
      Course: 'SSC',
      Duration: '2020-2023',
      Score: '85%'

    },
    {
      Institute: 'SVERI’s College of Engineering(POLYTECHNIC),Pandharpur',
      Course: 'Diploma',
      Duration: '2017-2020',
      Score: '90.74%'
    },
    {
      Institute: 'SVERI’s College of Engineering, Pandharpur',
      Course: 'SSC',
      Duration: '2016-2017',
      Score: '89.80%'
    }
  ]
  constructor() { }
  ngOnInit(): void {

  }

}
