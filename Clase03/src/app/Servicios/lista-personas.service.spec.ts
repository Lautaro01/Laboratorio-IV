import { TestBed } from '@angular/core/testing';

import { ListaPersonasService } from './lista-personas.service';

describe('ListaPersonasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaPersonasService = TestBed.get(ListaPersonasService);
    expect(service).toBeTruthy();
  });
});
