import { TestBed } from '@angular/core/testing';

import { JuiDatepickerService } from './jui-datepicker.service';

describe('JuiDatepickerService', () => {
  let service: JuiDatepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuiDatepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
