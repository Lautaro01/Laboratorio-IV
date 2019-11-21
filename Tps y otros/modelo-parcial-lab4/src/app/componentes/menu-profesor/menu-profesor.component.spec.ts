import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProfesorComponent } from './menu-profesor.component';

describe('MenuProfesorComponent', () => {
  let component: MenuProfesorComponent;
  let fixture: ComponentFixture<MenuProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
