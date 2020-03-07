import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFoodsResultAreaComponent } from './top-foods-result-area.component';

describe('TopFoodsResultAreaComponent', () => {
  let component: TopFoodsResultAreaComponent;
  let fixture: ComponentFixture<TopFoodsResultAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFoodsResultAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFoodsResultAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
