import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFoodsCountComponent } from './top-foods-count.component';

describe('TopFoodsCountComponent', () => {
  let component: TopFoodsCountComponent;
  let fixture: ComponentFixture<TopFoodsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFoodsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFoodsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
