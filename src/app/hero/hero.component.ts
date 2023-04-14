import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import tippy from 'tippy.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
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
export class HeroComponent implements OnInit {

  substackFormToggled = false

  toggleSubstack() {
    this.substackFormToggled = !this.substackFormToggled
  }

  constructor() { }

  ngOnInit(): void {
    tippy('#aboutus', {
      content: document.getElementById('tippy-aboutus')?.innerHTML,
      theme: 'light',
      duration: 0,
      placement: 'right',
      allowHTML: true
    })
    tippy('#docs', {
      content: document.getElementById('tippy-docs')?.innerHTML,
      theme: 'light',
      duration: 0,
      placement: 'right',
      allowHTML: true
    })
    tippy('#pricing', {
      content: document.getElementById('tippy-pricing')?.innerHTML,
      theme: 'light',
      duration: 0,
      placement: 'right',
      allowHTML: true
    })
    tippy('#dashboard', {
      content: document.getElementById('tippy-dashboard')?.innerHTML,
      theme: 'light',
      duration: 0,
      placement: 'right',
      allowHTML: true
    })

  }

}
