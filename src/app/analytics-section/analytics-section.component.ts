import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, delay, map } from 'rxjs';

@Component({
  selector: 'app-analytics-section',
  templateUrl: './analytics-section.component.html',
  styleUrls: ['./analytics-section.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        animate('500ms ease-in-out',  keyframes([
          style({opacity: 0}),
          style({opacity: 1}),
        ]))
      ]),
      transition(':leave', [
        animate('300ms ease-in-out',  keyframes([
          style({opacity: 1}),
          style({opacity: 0}),
        ]))
      ]),
    ])
  ]
})
export class AnalyticsSectionComponent implements OnInit {

  isVisibleSub = new BehaviorSubject(true)
  isVisible$ = this.isVisibleSub.asObservable()
    

  constructor() { }

  ngOnInit(): void {
  }

}
