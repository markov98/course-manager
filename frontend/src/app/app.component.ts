import { Component } from '@angular/core';
import { CourseListComponent } from "./course-list/course-list.component";

@Component({
  selector: 'app-root',
  imports: [CourseListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
