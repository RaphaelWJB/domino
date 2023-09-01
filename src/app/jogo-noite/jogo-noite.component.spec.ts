import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoNoiteComponent } from './jogo-noite.component';

describe('JogoNoiteComponent', () => {
  let component: JogoNoiteComponent;
  let fixture: ComponentFixture<JogoNoiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JogoNoiteComponent]
    });
    fixture = TestBed.createComponent(JogoNoiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
