import { TestBed } from '@angular/core/testing';

import { JuiDateConverterService } from './jui-date-converter.service';

describe('JuiDateConverterService', () => {
  let service: JuiDateConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuiDateConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
