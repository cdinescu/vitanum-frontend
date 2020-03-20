import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodLoggerEntryComponent } from './food-logger-entry.component';

describe('FoodLoggerEntryComponent', () => {
  let component: FoodLoggerEntryComponent;
  let fixture: ComponentFixture<FoodLoggerEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodLoggerEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodLoggerEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
