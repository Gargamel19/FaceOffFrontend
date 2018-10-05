import { TestBed } from '@angular/core/testing';

import { SpielerService } from './spieler.service';

describe('SpielerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpielerService = TestBed.get(SpielerService);
    expect(service).toBeTruthy();
  });
});
