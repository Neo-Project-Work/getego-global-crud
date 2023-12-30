import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './uikit/nav-bar/nav-bar.component';
import { ShowroomComponent } from './component/showroom/showroom.component';
import { TaskCardInfoComponent } from './component/task-card-info/task-card-info.component';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from './uikit/side-bar/side-bar.component';
// import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  // providers:[HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    NavBarComponent,
    ShowroomComponent,
    TaskCardInfoComponent,
    FormsModule,
    SideBarComponent,
  ],
})
export class AppComponent {
  title = 'crud-getego-global';
}
