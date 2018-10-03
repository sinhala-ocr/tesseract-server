import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OcrTaskListItemComponent} from './ocr-task-list-item.component';

describe('OcrTaskListItemComponent', () => {
  let component: OcrTaskListItemComponent;
  let fixture: ComponentFixture<OcrTaskListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OcrTaskListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcrTaskListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
