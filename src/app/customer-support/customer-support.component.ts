import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.css']
})
export class CustomerSupportComponent implements OnInit {

  isVisibleSub = new BehaviorSubject(true)
  isVisible$ = this.isVisibleSub.asObservable()

  constructor() { }

  ngOnInit(): void {
  }

}
