import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDetalleJuegoComponent } from './ver-detalle-juego.component';

describe('VerDetalleJuegoComponent', () => {
  let component: VerDetalleJuegoComponent;
  let fixture: ComponentFixture<VerDetalleJuegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerDetalleJuegoComponent]
    });
    fixture = TestBed.createComponent(VerDetalleJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
