import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuiEnglishDatepickerComponent } from './jui-english-datepicker.component';

describe('JuiEnglishDatepickerComponent', () => {
  let component: JuiEnglishDatepickerComponent;
  let fixture: ComponentFixture<JuiEnglishDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuiEnglishDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuiEnglishDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
