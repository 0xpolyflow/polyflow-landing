import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-book-dashboard',
  templateUrl: './address-book-dashboard.component.html',
  styleUrls: ['./address-book-dashboard.component.css']
})
export class AddressBookDashboardComponent implements OnInit {

  addresses: AddressBookItem[] = [
    { alias: 'deployer', address: '0x49Fa42e706d6914E44Be4855B3f52b6FB74CeA06' },
    { alias: 'funder', address: '0x49Fa42e706d6914E44Be4855B3f52b6FB74CeA06' },
    { alias: 'traper', address: '0x49Fa42e706d6914E44Be4855B3f52b6FB74CeA06' },
    { alias: 'dever', address: '0x49Fa42e706d6914E44Be4855B3f52b6FB74CeA06' },
    { alias: 'rever', address: '0x49Fa42e706d6914E44Be4855B3f52b6FB74CeA06' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

interface AddressBookItem {
  alias: string,
  address: string
}