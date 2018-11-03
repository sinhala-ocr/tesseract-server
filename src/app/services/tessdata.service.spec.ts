import { TestBed } from '@angular/core/testing';

import { TessdataService } from './tessdata.service';

describe('TessdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TessdataService = TestBed.get(TessdataService);
    expect(service).toBeTruthy();
  });
});
