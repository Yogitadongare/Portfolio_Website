import { Component, OnInit } from '@angular/core';
import { projects } from '../models/models';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
  projectlist: projects[] = [
    {
      title: 'Sign Language Recognition Using Machine Learning',
      technology: 'Machine Learning,Python',
      description: [
        'Data sets are used to store the sign image using CNN and SVM algorithm',
        'Although our proposed work expected to recognized the sign language and convert into the alphabet ,there is still alot of scope for possible future work',
        'Basically it is used for deep and dump people',
      ],
    },
    {
      title: 'Sign Language Recognition Using Machine Learning',
      technology: 'Machine Learning, Python',
      description: [
        'Data sets are used to store the sign image using CNN and SVM algorithm',
        'Although our proposed work expected to recognized the sign language and convert into the alphabet , there is still alot of scope for possible future work',
        'Basically it is used for deep and dump people',
      ],
    },
  ]

  constructor() { }
  ngOnInit(): void {

  }

}
