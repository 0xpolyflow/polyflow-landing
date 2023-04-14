import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginsDashboardComponent } from './plugins-dashboard.component';

describe('PluginsDashboardComponent', () => {
  let component: PluginsDashboardComponent;
  let fixture: ComponentFixture<PluginsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PluginsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
