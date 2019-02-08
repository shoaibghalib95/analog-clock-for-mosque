import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogclockComponent } from './analogclock.component';

describe('AnalogclockComponent', () => {
  let component: AnalogclockComponent;
  let fixture: ComponentFixture<AnalogclockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalogclockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalogclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
