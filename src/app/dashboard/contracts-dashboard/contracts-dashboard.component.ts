import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contracts-dashboard',
  templateUrl: './contracts-dashboard.component.html',
  styleUrls: ['./contracts-dashboard.component.css']
})
export class ContractsDashboardComponent implements OnInit {

  contracts: ContractModel[] = [
    { alias: 'bored-token', deployments: [
      { address: '0x49Fa42e706d6914E44Be4855B3f52b6FB74CeA06', network: 'Avax', isBehindProxy: true },
      { address: '0x49Fa42e706d6914E44Be4855B3f52b6FB74CeA06', network: 'Polygon', isBehindProxy: false },
      { address: '0x49Fa42e706d6914E44Be4855B3f52b6FB74CeA06', network: 'Polygon', isBehindProxy: false }
    ] },
    { alias: 'stored-token', deployments: [
      { address: '0x49Fa42e706d6914E44Be4855B3f52b6FB74CeA06', network: 'Avax', isBehindProxy: true },
      { address: '0x49Fa42e706d6914E44Be4855B3f52b6FB74CeA06', network: 'Polygon', isBehindProxy: false },
      { address: '0x49Fa42e706d6914E44Be4855B3f52b6FB74CeA06', network: 'Optimism', isBehindProxy: false }
    ] },
    { alias: 'detored-token', deployments: [
      { address: '0x49Fa42e706d6914E44Be4855B3f52b6FB74CeA06', network: 'Avax', isBehindProxy: true },
      { address: '0x49Fa42e706d6914E44Be4855B3f52b6FB74CeA06', network: 'Polygon', isBehindProxy: false },
      { address: '0x49Fa42e706d6914E44Be4855B3f52b6FB74CeA06', network: 'Optimism', isBehindProxy: false }
    ] }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}


interface ContractModel {

  alias: string
  deployments: ContractAddressModel[]

}

interface ContractAddressModel {
  address: string,
  network: string,
  isBehindProxy: boolean
}