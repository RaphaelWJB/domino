import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoJogadoresComponent } from './selecao-jogadores.component';

describe('SelecaoJogadoresComponent', () => {
  let component: SelecaoJogadoresComponent;
  let fixture: ComponentFixture<SelecaoJogadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelecaoJogadoresComponent]
    });
    fixture = TestBed.createComponent(SelecaoJogadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
