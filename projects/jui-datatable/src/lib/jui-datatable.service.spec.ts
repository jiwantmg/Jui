import { TestBed } from '@angular/core/testing';

import { JuiDatatableService } from './jui-datatable.service';

describe('JuiDatatableService', () => {
  let service: JuiDatatableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuiDatatableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
