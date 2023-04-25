import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconItemHolderComponent } from './icon-item-holder.component';

describe('IconItemHolderComponent', () => {
  let component: IconItemHolderComponent;
  let fixture: ComponentFixture<IconItemHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconItemHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconItemHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
