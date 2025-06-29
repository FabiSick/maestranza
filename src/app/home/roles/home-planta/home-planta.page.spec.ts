import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePlantaPage } from './home-planta.page';

describe('HomePlantaPage', () => {
  let component: HomePlantaPage;
  let fixture: ComponentFixture<HomePlantaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePlantaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
