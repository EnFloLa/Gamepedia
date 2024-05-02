import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPlataformaComponent } from './actualizar-plataforma.component';

describe('ActualizarPlataformaComponent', () => {
  let component: ActualizarPlataformaComponent;
  let fixture: ComponentFixture<ActualizarPlataformaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarPlataformaComponent]
    });
    fixture = TestBed.createComponent(ActualizarPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
