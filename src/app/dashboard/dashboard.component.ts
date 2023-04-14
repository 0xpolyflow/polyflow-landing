import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  activeSidebarItemSub = new BehaviorSubject<SidebarOption>('analytics')
  activeSidebarItem$ = this.activeSidebarItemSub.asObservable()

  constructor() { }

  ngOnInit(): void {
  }

  changeScreen(option: SidebarOption) {
    this.activeSidebarItemSub.next(option)
  }

  isActiveScreen(option: SidebarOption) {
    return option === this.activeSidebarItemSub.getValue()
  }

}

type SidebarOption = 'networks' | 'contracts' | 'address-book' | 'analytics' | 'keys' | 'widget-config' | 'compliance' | 'plugins'
