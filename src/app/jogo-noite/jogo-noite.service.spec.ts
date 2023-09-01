import { TestBed } from '@angular/core/testing';

import { JogoNoiteService } from './jogo-noite.service';

describe('JogoNoiteService', () => {
  let service: JogoNoiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JogoNoiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
