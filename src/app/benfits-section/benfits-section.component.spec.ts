import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenfitsSectionComponent } from './benfits-section.component';

describe('BenfitsSectionComponent', () => {
  let component: BenfitsSectionComponent;
  let fixture: ComponentFixture<BenfitsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenfitsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenfitsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
