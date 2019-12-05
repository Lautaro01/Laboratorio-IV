import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseniasClienteComponent } from './resenias-cliente.component';

describe('ReseniasClienteComponent', () => {
  let component: ReseniasClienteComponent;
  let fixture: ComponentFixture<ReseniasClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReseniasClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseniasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
