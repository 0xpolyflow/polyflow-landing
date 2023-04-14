import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionZeroComponent } from './section-zero.component';

describe('SectionZeroComponent', () => {
  let component: SectionZeroComponent;
  let fixture: ComponentFixture<SectionZeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionZeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
