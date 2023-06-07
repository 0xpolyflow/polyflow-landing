import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        animate('100ms ease-in-out',  keyframes([
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
export class NavbarComponent implements OnInit {

  mobileMenuVisibleSub = new BehaviorSubject(false)
  mobileMenuVisible$ = this.mobileMenuVisibleSub.asObservable()

  isProductsVisible = false

  constructor() { }

  onMouseEnter() {
    this.isProductsVisible = true
  }

  onMouseLeave() {
    this.isProductsVisible = false
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isProductsVisible = false
    }, 100);
  }

  toggleMobileMenu() {
    this.mobileMenuVisibleSub.next(!this.mobileMenuVisibleSub.value)
  }

}
