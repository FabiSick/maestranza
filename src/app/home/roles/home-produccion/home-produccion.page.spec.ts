import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeProduccionPage } from './home-produccion.page';

describe('HomeProduccionPage', () => {
  let component: HomeProduccionPage;
  let fixture: ComponentFixture<HomeProduccionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProduccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
