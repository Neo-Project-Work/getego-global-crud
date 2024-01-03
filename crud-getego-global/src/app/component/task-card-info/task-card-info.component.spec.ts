import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TaskCardInfoComponent } from './task-card-info.component';
import { ServerService } from '../../server.service';
import { of } from 'rxjs';

describe('TaskCardInfoComponent', () => {
  let component: TaskCardInfoComponent;
  let fixture: ComponentFixture<TaskCardInfoComponent>;
  let serverServiceSpy: jasmine.SpyObj<ServerService>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('ServerService', ['create', 'getAll', 'update', 'delete']);

    TestBed.configureTestingModule({
      // declarations: [TaskCardInfoComponent],
      imports: [ReactiveFormsModule, FormsModule, CommonModule, HttpClientTestingModule,TaskCardInfoComponent],
      providers: [{ provide: ServerService, useValue: spy }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCardInfoComponent);
    component = fixture.componentInstance;
    serverServiceSpy = TestBed.inject(ServerService) as jasmine.SpyObj<ServerService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllTask on initialization', () => {
    serverServiceSpy.getAll.and.returnValue(of([]));
    fixture.detectChanges();
    expect(serverServiceSpy.getAll()).toHaveBeenCalled();
  });

  it('should call createTask when submitting the form', () => {
    serverServiceSpy.create.and.returnValue(of({}));
    component.taskForm.setValue({
      title: 'Test Title',
      description: 'Test Description',
      createdBy: 'Test Creator',
      assignedTo: 'Test Assignee'
    });
    component.createTask();
    expect(serverServiceSpy.create).toHaveBeenCalledWith(jasmine.any(Object));
  });

  it('should call update when updating the task', () => {
    serverServiceSpy.update.and.returnValue(of({}));
    component.taskObj.id = 1;
    component.taskForm.setValue({
      title: 'Updated Title',
      description: 'Updated Description',
      createdBy: 'Updated Creator',
      assignedTo: 'Updated Assignee'
    });
    component.update();
    expect(serverServiceSpy.update).toHaveBeenCalledWith(jasmine.any(Object), 1);
  });

  it('should call deleteTask when deleting a task', () => {
    serverServiceSpy.delete.and.returnValue(of({}));
    const taskItem = { id: 1, title: 'Test Title' };
    component.deleteTask(taskItem);
    expect(serverServiceSpy.delete).toHaveBeenCalledWith(1);
  });

  it('should call deleteTask for each task when deleting all tasks', () => {
    serverServiceSpy.getAll.and.returnValue(of([{ id: 1 }, { id: 2 }, { id: 3 }]));
    serverServiceSpy.delete.and.returnValue(of({}));
    component.deleteAllTask();
    expect(serverServiceSpy.delete.calls.count()).toBe(3);
  });
});
