import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeCompradorPage } from './home-comprador.page';

describe('HomeCompradorPage', () => {
  let component: HomeCompradorPage;
  let fixture: ComponentFixture<HomeCompradorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCompradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
