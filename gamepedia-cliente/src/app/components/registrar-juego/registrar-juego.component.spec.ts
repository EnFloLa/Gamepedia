import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarJuegoComponent } from './registrar-juego.component';

describe('RegistrarJuegoComponent', () => {
  let component: RegistrarJuegoComponent;
  let fixture: ComponentFixture<RegistrarJuegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarJuegoComponent]
    });
    fixture = TestBed.createComponent(RegistrarJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
