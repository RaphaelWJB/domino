import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaJogadoresComponent } from './lista-jogadores.component';

describe('ListaJogadoresComponent', () => {
  let component: ListaJogadoresComponent;
  let fixture: ComponentFixture<ListaJogadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaJogadoresComponent]
    });
    fixture = TestBed.createComponent(ListaJogadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
