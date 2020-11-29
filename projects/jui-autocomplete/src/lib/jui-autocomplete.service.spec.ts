import { TestBed } from '@angular/core/testing';

import { JuiAutocompleteService } from './jui-autocomplete.service';

describe('JuiAutocompleteService', () => {
  let service: JuiAutocompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuiAutocompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
