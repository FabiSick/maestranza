import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LotesVencimientoPage } from './lotes-vencimiento.page';

describe('LotesVencimientoPage', () => {
  let component: LotesVencimientoPage;
  let fixture: ComponentFixture<LotesVencimientoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LotesVencimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
