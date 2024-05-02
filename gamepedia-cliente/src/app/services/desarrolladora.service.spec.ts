import { TestBed } from '@angular/core/testing';

import { DesarrolladoraService } from './desarrolladora.service';

describe('DesarrolladoraService', () => {
  let service: DesarrolladoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesarrolladoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
