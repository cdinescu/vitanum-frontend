import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskOracleComponent } from './ask-oracle.component';

describe('AskOracleComponent', () => {
  let component: AskOracleComponent;
  let fixture: ComponentFixture<AskOracleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskOracleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskOracleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
