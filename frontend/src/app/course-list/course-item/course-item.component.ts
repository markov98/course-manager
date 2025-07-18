import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserService } from '../../login/user.service';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../course.service';
import { Course } from '../../types/course';

@Component({
  selector: 'app-course-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css'
})
export class CourseItemComponent {
  @Input() course: Course = { id: NaN, name: '', description: '', image: '' };
  isEditing = false;

  constructor(
    private userService: UserService,
    private courseService: CourseService
  ) { }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  editCourse(): void {
    this.isEditing = true;
  }

  saveCourse(): void {
    this.isEditing = false;

    this.courseService.editCourse(this.course.id, this.course.name, this.course.description)
      .subscribe({
        next: (() => {
          console.log('Success!');
        })
      })
  }
}
