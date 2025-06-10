import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KitsPage } from './kits.page';

describe('KitsPage', () => {
  let component: KitsPage;
  let fixture: ComponentFixture<KitsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
