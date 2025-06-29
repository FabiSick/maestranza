import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeProyectosPage } from './home-proyectos.page';

describe('HomeProyectosPage', () => {
  let component: HomeProyectosPage;
  let fixture: ComponentFixture<HomeProyectosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProyectosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
