import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicaComponent } from './logica.component';

describe('LogicaComponent', () => {
  let component: LogicaComponent;
  let fixture: ComponentFixture<LogicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
