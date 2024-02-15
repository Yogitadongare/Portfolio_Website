import { ElementRef } from '@angular/core';
import { ResponsiveDirective } from './responsive.directive';
import { BreakpointObserver } from '@angular/cdk/layout';
import { TestBed } from '@angular/core/testing';

describe('ResponsiveDirective', () => {
  it('should create an instance', () => {
    /* const directive = new ResponsiveDirective();*/

    const elementRefMock = {} as ElementRef<any>;
    const breakpointObserverMock = {} as BreakpointObserver;


    TestBed.configureTestingModule({
      providers: [
        { provide: ElementRef, useValue: elementRefMock },
        { provide: BreakpointObserver, useValue: breakpointObserverMock }
      ]
    });
    const directive = new ResponsiveDirective(elementRefMock, breakpointObserverMock);
    expect(directive).toBeTruthy();



    /* it('should create an instance', () => {
       const elementRefMock = {} as ElementRef<any>;
       const breakpointObserverMock = {} as BreakpointObserver;
   
       TestBed.configureTestingModule({
         providers: [
           { provide: ElementRef, useValue: elementRefMock },
           { provide: BreakpointObserver, useValue: breakpointObserverMock }
         ]
       });
   
       const directive = new ResponsiveDirective(elementRefMock, breakpointObserverMock);
       expect(directive).toBeTruthy();
     });
   })*/
  });
})














