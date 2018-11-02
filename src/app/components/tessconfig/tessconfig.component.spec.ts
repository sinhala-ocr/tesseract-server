import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TessconfigComponent } from './tessconfig.component';

describe('TessconfigComponent', () => {
  let component: TessconfigComponent;
  let fixture: ComponentFixture<TessconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TessconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TessconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
