import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntegracionComprasPage } from './integracion-compras.page';

describe('IntegracionComprasPage', () => {
  let component: IntegracionComprasPage;
  let fixture: ComponentFixture<IntegracionComprasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegracionComprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
