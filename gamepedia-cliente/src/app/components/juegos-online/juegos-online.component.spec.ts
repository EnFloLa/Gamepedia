import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosOnlineComponent } from './juegos-online.component';

describe('JuegosOnlineComponent', () => {
  let component: JuegosOnlineComponent;
  let fixture: ComponentFixture<JuegosOnlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuegosOnlineComponent]
    });
    fixture = TestBed.createComponent(JuegosOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
