import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksapcesSwitcherComponent } from './worksapces-switcher.component';

describe('WorksapcesSwitcherComponent', () => {
  let component: WorksapcesSwitcherComponent;
  let fixture: ComponentFixture<WorksapcesSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksapcesSwitcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksapcesSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
