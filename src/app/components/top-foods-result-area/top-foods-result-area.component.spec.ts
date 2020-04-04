import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFoodsResultAreaComponent } from './top-foods-result-area.component';
import { HttpClientModule } from '@angular/common/http';

describe('TopFoodsResultAreaComponent', () => {
  let component: TopFoodsResultAreaComponent;
  let fixture: ComponentFixture<TopFoodsResultAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
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
