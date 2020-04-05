import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuComponent } from './side-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';

export class RouterStub {
  private subject = new Subject();

  push(event: Event) {
    this.subject.next(event);
  }

  get events() {
    return this.subject.asObservable();
  }
}
describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        { provide: Router, useClass: RouterStub }
      ],
      declarations: [SideMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display ask oracle component if navigation points to `ask oracle`', () => {
    // Arrange
    const router = TestBed.get(Router);

    // Act
    router.push(new NavigationEnd(1, '/ask-the-oracle', '/ask-the-oracle'));

    // Assert
    expect(component.showAskOracleForm).toBe(true);
  });

  it('should NOT display ask oracle component if navigation does not point to `ask oracle` after redirect', () => {
    // Arrange
    const router = TestBed.get(Router);

    // Act
    router.push(new NavigationStart(1, '/diaries'));

    // Assert
    expect(component.showAskOracleForm).toBe(false);
  });

  it('should NOT display ask oracle component if navigation points to `diary`', () => {
    // Arrange
    const router = TestBed.get(Router);

    // Act
    router.push(new NavigationEnd(1, '/diaries', '/diaries'));

    // Assert
    expect(component.showAskOracleForm).toBe(false);
  });
});
