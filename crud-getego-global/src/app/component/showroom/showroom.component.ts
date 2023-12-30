import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskCardInfoComponent } from '../task-card-info/task-card-info.component';
import { SideBarComponent } from '../../uikit/side-bar/side-bar.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-showroom',
  standalone: true,
  templateUrl: './showroom.component.html',
  styleUrl: './showroom.component.scss',
  imports: [
    // ReactiveFormsModule,
    // FormsModule,
    TaskCardInfoComponent,
    CommonModule,
  ],
})
export class ShowroomComponent {
  constructor() {}
}
