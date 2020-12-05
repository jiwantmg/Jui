import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuiDatepickerComponent } from './jui-datepicker.component';

describe('JuiDatepickerComponent', () => {
  let component: JuiDatepickerComponent;
  let fixture: ComponentFixture<JuiDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuiDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuiDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
