import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertasStockPage } from './alertas-stock.page';

describe('AlertasStockPage', () => {
  let component: AlertasStockPage;
  let fixture: ComponentFixture<AlertasStockPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertasStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
