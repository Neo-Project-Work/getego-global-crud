import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardInfoComponent } from './task-card-info.component';

describe('TaskCardInfoComponent', () => {
  let component: TaskCardInfoComponent;
  let fixture: ComponentFixture<TaskCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCardInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
