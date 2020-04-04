import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodLoggerEntryComponent } from './food-logger-entry.component';
import { HttpClientModule } from '@angular/common/http';

describe('FoodLoggerEntryComponent', () => {
  let component: FoodLoggerEntryComponent;
  let fixture: ComponentFixture<FoodLoggerEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
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
