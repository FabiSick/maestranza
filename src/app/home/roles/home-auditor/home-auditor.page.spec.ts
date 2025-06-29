import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeAuditorPage } from './home-auditor.page';

describe('HomeAuditorPage', () => {
  let component: HomeAuditorPage;
  let fixture: ComponentFixture<HomeAuditorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAuditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
