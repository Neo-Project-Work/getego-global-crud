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
    ReactiveFormsModule,
    FormsModule,
    TaskCardInfoComponent,
    SideBarComponent,
    CommonModule,
  ],
})
export class ShowroomComponent implements OnInit {
  constructor(private http: HttpClient, private imageService: ServerService) {}
  marsImage!: string;

  ngOnInit(): void {
    this.loadMarsImage();
  }

  // loadMarsImage() {
  //   this.imageService.getMarsImage().subscribe(res => {
  //     // this.marsImage =res
  //     console.log(res)
  //   });
  // }

  async loadMarsImage() {
    let res = await fetch('https://source.unsplash.com/random/800x600/?mars');
    return res.json().then((data) => console.log('image',data));
  }
}
