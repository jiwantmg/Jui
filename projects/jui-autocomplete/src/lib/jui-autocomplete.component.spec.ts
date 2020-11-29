import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuiAutocompleteComponent } from './jui-autocomplete.component';

describe('JuiAutocompleteComponent', () => {
  let component: JuiAutocompleteComponent;
  let fixture: ComponentFixture<JuiAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuiAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuiAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
