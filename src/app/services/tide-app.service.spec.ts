import { TestBed } from '@angular/core/testing';

import { TideAppService } from './tide-app.service';

describe('TideAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TideAppService = TestBed.get(TideAppService);
    expect(service).toBeTruthy();
  });
});
