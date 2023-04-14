import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookDashboardComponent } from './address-book-dashboard.component';

describe('AddressBookDashboardComponent', () => {
  let component: AddressBookDashboardComponent;
  let fixture: ComponentFixture<AddressBookDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressBookDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressBookDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
