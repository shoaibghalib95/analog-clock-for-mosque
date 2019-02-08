import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiclockComponent } from './digiclock.component';

describe('DigiclockComponent', () => {
  let component: DigiclockComponent;
  let fixture: ComponentFixture<DigiclockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigiclockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigiclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
