import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskOracleFormComponent } from './ask-oracle-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AskOracleSharedDataService } from 'src/app/services/ask-oracle-shared-data.service';

describe('AskOracleFormComponent', () => {
  let component: AskOracleFormComponent;
  let fixture: ComponentFixture<AskOracleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [AskOracleFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskOracleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be able to submit on click', () => {
    // Arrange
    const askOracleSharedDataService = TestBed.inject(AskOracleSharedDataService);
    const spy = spyOn(askOracleSharedDataService, 'nextQuery');

    // Act
    component.onSubmitClick();

    // Assert
    expect(spy).toHaveBeenCalled();
  });
});
