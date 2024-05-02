import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPlataformaComponent } from './registrar-plataforma.component';

describe('RegistrarPlataformaComponent', () => {
  let component: RegistrarPlataformaComponent;
  let fixture: ComponentFixture<RegistrarPlataformaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarPlataformaComponent]
    });
    fixture = TestBed.createComponent(RegistrarPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
