import { Component, OnInit } from '@angular/core';
import { ShowroomComponent } from '../showroom/showroom.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../../uikit/side-bar/side-bar.component';
import { ServerService } from '../../server.service';
import { TaskModel } from './task.info.mode';

@Component({
  selector: 'app-task-card-info',
  standalone: true,
  templateUrl: './task-card-info.component.html',
  styleUrl: './task-card-info.component.scss',
  imports: [
    ShowroomComponent,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SideBarComponent,
  ],
})
export class TaskCardInfoComponent implements OnInit {
  taskForm!: FormGroup;
  taskObj: TaskModel = new TaskModel();
  taskData: any;
  tasklength: string | undefined;

  constructor(
    private serverService: ServerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      title: [''],
      description: [''],
      createdBy: [''],
      assignedTo: [''],
    });
    this.getAllTask();
  }

  createTask() {
    this.taskObj.title = this.taskForm.value.title;
    this.taskObj.description = this.taskForm.value.description;
    this.taskObj.createdBy = this.taskForm.value.createdBy;
    this.taskObj.assignedTo = this.taskForm.value.assignedTo;

    this.serverService.create(this.taskObj).subscribe(
      (res) => {
        this.getAllTask();
        this.taskForm.reset();

      },
      (err) => {
        alert('Something went wrong' + err);
      }
    );
  }

  getAllTask() {
    this.serverService.getAll().subscribe((res) => {
      this.taskData = res;
    });
  }

  editTask(item: any) {
    this.taskObj.id = item.id;
    this.taskForm.controls['title'].setValue(item.title);
    this.taskForm.controls['description'].setValue(item.description);
    this.taskForm.controls['createdBy'].setValue(item.createdBy);
    this.taskForm.controls['assignedTo'].setValue(item.assignedTo);
  }

  update() {
    this.taskObj.title = this.taskForm.value.title;
    this.taskObj.description = this.taskForm.value.description;
    this.taskObj.createdBy = this.taskForm.value.createdBy;
    this.taskObj.assignedTo = this.taskForm.value.assignedTo;

    this.serverService
      .update(this.taskObj, this.taskObj.id)
      .subscribe((res) => {
        this.taskForm.reset();
        this.getAllTask();
      });
  }

  deleteTask(item: any) {
    this.serverService.delete(item.id).subscribe((res) => {
      this.getAllTask();
    });
  }

  deleteAllTask() {
    this.serverService.getAll().subscribe((res) => {
      res.forEach((id: any) => this.deleteTask(id))
    });
  }
}
