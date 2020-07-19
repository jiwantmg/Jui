import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuiDateConverterComponent } from './jui-date-converter.component';

describe('JuiDateConverterComponent', () => {
  let component: JuiDateConverterComponent;
  let fixture: ComponentFixture<JuiDateConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuiDateConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuiDateConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
