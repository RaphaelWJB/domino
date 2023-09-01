import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadorFormComponent } from './jogador-form.component';

describe('JogadorFormComponent', () => {
  let component: JogadorFormComponent;
  let fixture: ComponentFixture<JogadorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JogadorFormComponent]
    });
    fixture = TestBed.createComponent(JogadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
