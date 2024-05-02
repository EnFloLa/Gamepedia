import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDesarrolladoraComponent } from './registrar-desarrolladora.component';

describe('RegistrarDesarrolladoraComponent', () => {
  let component: RegistrarDesarrolladoraComponent;
  let fixture: ComponentFixture<RegistrarDesarrolladoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarDesarrolladoraComponent]
    });
    fixture = TestBed.createComponent(RegistrarDesarrolladoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
