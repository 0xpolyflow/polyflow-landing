import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-create-new-contract-item',
  templateUrl: './create-new-contract-item.component.html',
  styleUrls: ['./create-new-contract-item.component.css'],
  animations: [
    trigger('bubbleGrow', [
      transition(':enter', [
        animate('500ms ease-in-out',  keyframes([
          style({transform: 'scale(0)'}),
          style({transform: 'scale(1.1)'}),
          style({transform: 'scale(1)'}),
        ]))
      ]),
      transition(':leave', [
        animate('500ms ease-in-out',  keyframes([
          style({transform: 'scale(1)'}),
          style({transform: 'scale(1.1)'}),
          style({transform: 'scale(0)'})
        ]))
      ]),
    ]),
    trigger('fade', [
      transition(':enter', [
        animate('300ms ease-in-out',  keyframes([
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
export class CreateNewContractItemComponent implements OnInit {

  isModalToggledSub = new BehaviorSubject(false)
  isModalToggled$ = this.isModalToggledSub.asObservable()

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddContractModal() {
    this.isModalToggledSub.next(!this.isModalToggledSub.getValue())
  }

}
