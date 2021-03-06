import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskOracleFormComponent } from './ask-oracle-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('AskOracleFormComponent', () => {
  let component: AskOracleFormComponent;
  let fixture: ComponentFixture<AskOracleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [ AskOracleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskOracleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate foods names', () => {
    expect(component.foodNames).toBeDefined();
    expect(component.foodNames.length).toEqual(32);
  });

  it('should have a default selected food', () => {
    expect(component.selectedFoodName).toEqual('Caffeine');
  });

  it('should have a default selected food count', () => {
    expect(component.selectedFoodCount).toEqual(25);
  });

  it('should have a food count option list', () => {
    expect(component.topFoodCountOptions).toEqual([25, 50, 75, 100, 200]);
  });
});
