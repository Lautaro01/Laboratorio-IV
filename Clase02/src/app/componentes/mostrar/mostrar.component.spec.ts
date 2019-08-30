import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarComponent } from './mostrar.component';

describe('MostrarComponent', () => {
  let component: MostrarComponent;
  let fixture: ComponentFixture<MostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
