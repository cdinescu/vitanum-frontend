import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodDialogComponent } from './add-food-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AddFoodDialogComponent', () => {
  let component: AddFoodDialogComponent;
  let fixture: ComponentFixture<AddFoodDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, MatIconModule, MaterialModule, MatDialogModule],
      declarations: [ AddFoodDialogComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFoodDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
