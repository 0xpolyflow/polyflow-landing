import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewContractItemComponent } from './create-new-contract-item.component';

describe('CreateNewContractItemComponent', () => {
  let component: CreateNewContractItemComponent;
  let fixture: ComponentFixture<CreateNewContractItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewContractItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewContractItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
