import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics-dashboard',
  templateUrl: './analytics-dashboard.component.html',
  styleUrls: ['./analytics-dashboard.component.css']
})
export class AnalyticsDashboardComponent implements OnInit {

  analytics: Analytics[] = [
    { hash: '0xA3Fc...B4dd', time: '01.02.23 18:30:22', device: 'MacOS X', browser: 'Chrome', country: 'Croatia', wallet: 'MetaMask', method: 'mint' },
    { hash: '0xA3Fc...B4dd', time: '01.02.23 18:30:22', device: 'Windows 11', browser: 'Chrome', country: 'Croatia', wallet: 'Magic', method: 'approve' },
    { hash: '0xA3Fc...B4dd', time: '01.02.23 18:30:22', device: 'Linux Mint', browser: 'Chrome', country: 'Croatia', wallet: 'WalletConnect', method: 'approveAll' },
    { hash: '0xA3Fc...B4dd', time: '01.02.23 18:30:22', device: 'Windows 11', browser: 'Chrome', country: 'Croatia', wallet: 'Ambire', method: 'transfer' },
    { hash: '0xA3Fc...B4dd', time: '01.02.23 18:30:22', device: 'Windows 10', browser: 'Chrome', country: 'Croatia', wallet: 'MetaMask', method: 'mint' },
    { hash: '0xA3Fc...B4dd', time: '01.02.23 18:30:22', device: 'Windows 11', browser: 'Chrome', country: 'Croatia', wallet: 'Magic', method: 'transfer' },
    { hash: '0xA3Fc...B4dd', time: '01.02.23 18:30:22', device: 'MacOS X', browser: 'Chrome', country: 'Croatia', wallet: 'MetaMask', method: 'mint' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

interface Analytics {
  hash: string,
  time: string,
  device: string,
  browser: string,
  country: string,
  wallet: string
  method: string
}