import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroInventarioPage } from './registro-inventario.page';

describe('RegistroInventarioPage', () => {
  let component: RegistroInventarioPage;
  let fixture: ComponentFixture<RegistroInventarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroInventarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
