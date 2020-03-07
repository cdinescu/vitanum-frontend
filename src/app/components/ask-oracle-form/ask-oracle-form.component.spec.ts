import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskOracleFormComponent } from './ask-oracle-form.component';

describe('AskOracleFormComponent', () => {
  let component: AskOracleFormComponent;
  let fixture: ComponentFixture<AskOracleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
});
