import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlataformasComponent } from './lista-plataformas.component';

describe('ListaPlataformasComponent', () => {
  let component: ListaPlataformasComponent;
  let fixture: ComponentFixture<ListaPlataformasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPlataformasComponent]
    });
    fixture = TestBed.createComponent(ListaPlataformasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
