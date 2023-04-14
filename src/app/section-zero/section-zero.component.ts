import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-zero',
  templateUrl: './section-zero.component.html',
  styleUrls: ['./section-zero.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        animate('300ms ease-in-out',  keyframes([
          style({opacity: 0}),
          style({opacity: 1}),
        ]))
      ]),
      transition(':leave', [
        animate('1ms ease-in-out',  keyframes([
          style({opacity: 1}),
          style({opacity: 0}),
        ]))
      ]),
    ])
  ]
})
export class SectionZeroComponent implements OnInit {

  selctedItem: FeatureItem = 'wallets'

  itemsList: FeatureItem[] = [
    'wallets',
    'networks',
    'gas',
    'multichain',
    'custodial',
    'environments'
  ]
  selectedIndex = 0

  constructor() { }

  ngOnInit(): void {
    setInterval(() => { 
      this.selectedIndex += 1
      this.selectedIndex = this.selectedIndex % (this.itemsList.length - 2)
      this.selctedItem = this.itemsList[this.selectedIndex]
    }, 5000)
  }

  isItemSelected(item: FeatureItem) {
    return this.selctedItem === item
  }

  switchItem(item: FeatureItem) {
    this.selctedItem = item
  }

}

type FeatureItem = 'wallets' | 'networks' | 'gas' | 'multichain' | 'custodial' | 'environments'
