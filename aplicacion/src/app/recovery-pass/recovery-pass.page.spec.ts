import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecoveryPassPage } from './recovery-pass.page';

describe('RecoveryPassPage', () => {
  let component: RecoveryPassPage;
  let fixture: ComponentFixture<RecoveryPassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecoveryPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
