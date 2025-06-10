import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialPreciosPage } from './historial-precios.page';

describe('HistorialPreciosPage', () => {
  let component: HistorialPreciosPage;
  let fixture: ComponentFixture<HistorialPreciosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialPreciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
