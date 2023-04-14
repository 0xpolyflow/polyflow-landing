import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworksDashboardComponent } from './networks-dashboard.component';

describe('NetworksDashboardComponent', () => {
  let component: NetworksDashboardComponent;
  let fixture: ComponentFixture<NetworksDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworksDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworksDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
