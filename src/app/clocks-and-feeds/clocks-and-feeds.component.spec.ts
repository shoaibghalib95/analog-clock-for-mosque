import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClocksAndFeedsComponent } from './clocks-and-feeds.component';

describe('ClocksAndFeedsComponent', () => {
  let component: ClocksAndFeedsComponent;
  let fixture: ComponentFixture<ClocksAndFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClocksAndFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClocksAndFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
