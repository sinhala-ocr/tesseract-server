import { TestBed } from '@angular/core/testing';

import { ConfusionMatrixService } from './confusion-matrix.service';

describe('ConfusionMatrixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfusionMatrixService = TestBed.get(ConfusionMatrixService);
    expect(service).toBeTruthy();
  });
});
