import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDesarrolladorasComponent } from './lista-desarrolladoras.component';

describe('ListaDesarrolladorasComponent', () => {
  let component: ListaDesarrolladorasComponent;
  let fixture: ComponentFixture<ListaDesarrolladorasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDesarrolladorasComponent]
    });
    fixture = TestBed.createComponent(ListaDesarrolladorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
