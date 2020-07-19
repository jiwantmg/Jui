import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuiDatatableComponent } from './jui-datatable.component';

describe('JuiDatatableComponent', () => {
  let component: JuiDatatableComponent;
  let fixture: ComponentFixture<JuiDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuiDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuiDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
