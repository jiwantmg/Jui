import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuiNepaliDatepickerComponent } from './jui-nepali-datepicker.component';

describe('JuiNepaliDatepickerComponent', () => {
  let component: JuiNepaliDatepickerComponent;
  let fixture: ComponentFixture<JuiNepaliDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuiNepaliDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuiNepaliDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
