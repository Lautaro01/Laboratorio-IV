import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProfesionalComponent } from './menu-profesional.component';

describe('MenuProfesionalComponent', () => {
  let component: MenuProfesionalComponent;
  let fixture: ComponentFixture<MenuProfesionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuProfesionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
