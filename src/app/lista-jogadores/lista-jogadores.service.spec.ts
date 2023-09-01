import { TestBed } from '@angular/core/testing';

import { ListaJogadoresService } from './lista-jogadores.service';

describe('ListaJogadoresService', () => {
  let service: ListaJogadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaJogadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
