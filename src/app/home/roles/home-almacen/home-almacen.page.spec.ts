import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeAlmacenPage } from './home-almacen.page';

describe('HomeAlmacenPage', () => {
  let component: HomeAlmacenPage;
  let fixture: ComponentFixture<HomeAlmacenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAlmacenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
