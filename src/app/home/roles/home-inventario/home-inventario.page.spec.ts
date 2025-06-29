import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeInventarioPage } from './home-inventario.page';

describe('HomeInventarioPage', () => {
  let component: HomeInventarioPage;
  let fixture: ComponentFixture<HomeInventarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInventarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
