import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedirTurnoComponent } from './pedir-turno.component';

describe('PedirTurnoComponent', () => {
  let component: PedirTurnoComponent;
  let fixture: ComponentFixture<PedirTurnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedirTurnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedirTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
