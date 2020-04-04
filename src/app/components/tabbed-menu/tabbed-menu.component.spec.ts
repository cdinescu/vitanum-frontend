import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedMenuComponent } from './tabbed-menu.component';

describe('TabbedMenuComponent', () => {
  let component: TabbedMenuComponent;
  let fixture: ComponentFixture<TabbedMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabbedMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component.diaryMenuState = 'out';
    component.askTheOracleMenuState = 'out';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have all tabs toggled by default', () => {
    expect(component.diaryMenuState).toEqual('out');
    expect(component.askTheOracleMenuState).toEqual('out');
  });

  it('toggle \'Diary\' when diary menu already out', () => {
    component.toggleDiary();

    expect(component.diaryMenuState).toEqual('in');
    expect(component.askTheOracleMenuState).toEqual('out');
  });

  it('toggle \'Diary\' when diary menu in', () => {
    // Arrange
    component.diaryMenuState = 'in';

    // Act
    component.toggleDiary();

    // Assert
    expect(component.diaryMenuState).toEqual('out');
    expect(component.askTheOracleMenuState).toEqual('out');
  });

  it('toggle \'AskOracle\' when ask oracle menu already out', () => {
    component.toggleAskTheOracle();

    expect(component.diaryMenuState).toEqual('out');
    expect(component.askTheOracleMenuState).toEqual('in');
  });

  it('toggle \'AskOracle\' when ask oracle menu already in', () => {
    // Arrange
    component.askTheOracleMenuState = 'in';

    // Act
    component.toggleAskTheOracle();

    // Assert
    expect(component.diaryMenuState).toEqual('out');
    expect(component.askTheOracleMenuState).toEqual('out');
  });
});
