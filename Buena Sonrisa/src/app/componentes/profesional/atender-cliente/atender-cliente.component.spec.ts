import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtenderClienteComponent } from './atender-cliente.component';

describe('AtenderClienteComponent', () => {
  let component: AtenderClienteComponent;
  let fixture: ComponentFixture<AtenderClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtenderClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtenderClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
