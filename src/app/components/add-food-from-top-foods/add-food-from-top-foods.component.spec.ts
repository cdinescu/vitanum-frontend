import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodFromTopFoodsComponent } from './add-food-from-top-foods.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';
import { MatDialogModule } from '@angular/material/dialog';

describe('AddFoodFromTopFoodsComponent', () => {
  let component: AddFoodFromTopFoodsComponent;
  let fixture: ComponentFixture<AddFoodFromTopFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MatIconModule, MaterialModule, MatDialogModule],
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
