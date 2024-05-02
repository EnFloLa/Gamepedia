import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAdministradorComponent } from './menu-administrador.component';

describe('MenuAdministradorComponent', () => {
  let component: MenuAdministradorComponent;
  let fixture: ComponentFixture<MenuAdministradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuAdministradorComponent]
    });
    fixture = TestBed.createComponent(MenuAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
