import { TestBed } from '@angular/core/testing';

import { HTMLGeneratorService } from './htmlgenerator.service';

describe('HTMLGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HTMLGeneratorService = TestBed.get(HTMLGeneratorService);
    expect(service).toBeTruthy();
  });
});
