import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDesarrolladoraComponent } from './actualizar-desarrolladora.component';

describe('ActualizarDesarrolladoraComponent', () => {
  let component: ActualizarDesarrolladoraComponent;
  let fixture: ComponentFixture<ActualizarDesarrolladoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarDesarrolladoraComponent]
    });
    fixture = TestBed.createComponent(ActualizarDesarrolladoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
