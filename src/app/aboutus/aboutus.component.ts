import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
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
export class AboutusComponent implements OnInit {

  showSectionSub = new BehaviorSubject(false)
  showSection$ = this.showSectionSub.asObservable()

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.showSectionSub.next(true), 10)
  }

}
