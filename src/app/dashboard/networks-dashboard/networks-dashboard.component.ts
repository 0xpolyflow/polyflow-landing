import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-networks-dashboard',
  templateUrl: './networks-dashboard.component.html',
  styleUrls: ['./networks-dashboard.component.css'],
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
export class NetworksDashboardComponent implements OnInit {

  networks: Network[] = [
    { rpcs: ['https://rpc.io/dev', 'htps://asdksdja.co'], name: 'Polygon', chainID: 137, currencyName: 'MATIC' },
    { rpcs: ['https://rpc.io/dev'], name: 'Optimism', chainID: 137, currencyName: 'ETH' },
    { rpcs: ['https://rpc.io/dev'], name: 'Avalanche', chainID: 137, currencyName: 'AVAX' },
  ]

  isAddNetworkModalOpenSub = new BehaviorSubject(false)
  isAddNetworkModalOpen$ = this.isAddNetworkModalOpenSub.asObservable()

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.isAddNetworkModalOpenSub.next(!this.isAddNetworkModalOpenSub.getValue())
  }

}

interface Network {
  rpcs: string[],
  name: string,
  chainID: number,
  currencyName: string
}