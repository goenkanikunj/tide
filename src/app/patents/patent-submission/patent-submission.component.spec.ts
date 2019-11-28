import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentSubmissionComponent } from './patent-submission.component';

describe('PatentSubmissionComponent', () => {
  let component: PatentSubmissionComponent;
  let fixture: ComponentFixture<PatentSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatentSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
