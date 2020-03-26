import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodFromTopFoodsComponent } from './add-food-from-top-foods.component';

describe('AddFoodFromTopFoodsComponent', () => {
  let component: AddFoodFromTopFoodsComponent;
  let fixture: ComponentFixture<AddFoodFromTopFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFoodFromTopFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFoodFromTopFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
