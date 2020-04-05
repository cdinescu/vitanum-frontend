import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuComponent } from './side-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';


describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SideMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
  });

  it('should hide AskOracleForm component when the route does not point to it', () => {
    // Arrange & Act
    component.showAskOracleForm = false;
    fixture.detectChanges();

    // Assert
    expect(fixture.debugElement.query(By.css('.form-group'))).toBeFalsy();
  });

  xit('should display AskOracleForm component when the route points to it', () => {
    // Arrange & Act
    component.showAskOracleForm = true;
    fixture.detectChanges();

    // Assert
    expect(fixture.debugElement.query(By.css('.form-group'))).toBeTruthy();
  });


});
