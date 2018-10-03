import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OcrTaskListComponent} from './ocr-task-list.component';

describe('OcrTaskListComponent', () => {
  let component: OcrTaskListComponent;
  let fixture: ComponentFixture<OcrTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OcrTaskListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcrTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
