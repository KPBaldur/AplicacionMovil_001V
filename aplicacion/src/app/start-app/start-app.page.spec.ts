import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartAppPage } from './start-app.page';

describe('StartAppPage', () => {
  let component: StartAppPage;
  let fixture: ComponentFixture<StartAppPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StartAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
