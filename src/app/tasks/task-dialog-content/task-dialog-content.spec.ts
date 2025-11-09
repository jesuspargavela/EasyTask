import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDialogContent } from './task-dialog-content';

describe('TaskDialogContent', () => {
  let component: TaskDialogContent;
  let fixture: ComponentFixture<TaskDialogContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDialogContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDialogContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
